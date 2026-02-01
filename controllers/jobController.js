import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import dayjs from "dayjs";
import ExcelJS from "exceljs";
export const getAllJobs = async (req, res) => {
  const { search, jobStatus, jobType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
  }

  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "title",
    "z-a": "-title",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  const jobs = await Job.find(queryObject).sort(sortKey);

  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  res.status(StatusCodes.OK).json({ job });
};

export const editJobById = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ message: "Job updated", job: updatedJob });
};

export const deleteJobById = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ message: "Job deleted", job });
};

export const showStats = async (req, res) => {
  try {
    let stats = await Job.aggregate([
      { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
      { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
    ]);

    stats = stats.reduce((acc, curr) => {
      const { _id: title, count } = curr;
      acc[title] = count;
      return acc;
    }, {});

    const defaultStats = {
      applied: stats.applied || 0,
      interview: stats.interview || 0,
      offer: stats.offer || 0,
      rejected: stats.rejected || 0,
    };

    // Monthly applications for last 6 months
    let monthlyApplications = await Job.aggregate([
      { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
      {
        $group: {
          _id: {
            year: { $year: "$createdDate" },
            month: { $month: "$createdDate" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
      { $limit: 6 },
    ]);

    monthlyApplications = monthlyApplications
      .map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        const date = dayjs()
          .month(month - 1)
          .year(year)
          .format("MMM YYYY");
        return { date, count };
      })
      .reverse();

    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
  } catch (error) {
    console.error("Error in showStats:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Error fetching stats", error: error.message });
  }
};

export const downloadJobsAsExcel = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort(
    "-createdDate"
  );

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Jobs");

  // Define columns
  worksheet.columns = [
    { header: "Company", key: "company", width: 20 },
    { header: "Position", key: "title", width: 25 },
    { header: "Status", key: "jobStatus", width: 15 },
    { header: "Type", key: "jobType", width: 15 },
    { header: "Location", key: "jobLocation", width: 20 },
    { header: "Date Applied", key: "createdDate", width: 15 },
  ];

  // Add data
  jobs.forEach((job) => {
    worksheet.addRow({
      company: job.company,
      title: job.title,
      jobStatus: job.jobStatus,
      jobType: job.jobType,
      jobLocation: job.jobLocation,
      createdDate: dayjs(job.createdDate).format("MM/DD/YYYY"),
    });
  });

  // Style header row
  worksheet.getRow(1).font = { bold: true };
  worksheet.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFE0E0E0" },
  };

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=jobs_${dayjs().format("YYYY-MM-DD")}.xlsx`
  );

  await workbook.xlsx.write(res);
  res.end();
};
