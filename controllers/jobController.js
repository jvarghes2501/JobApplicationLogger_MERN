import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), title: "Software Engineer", company: "Tech Corp" },
  { id: nanoid(), title: "Data Scientist", company: "Data Inc" },
  { id: nanoid(), title: "Product Manager", company: "Business Solutions" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { title, company } = req.body;
  if (!title || !company) {
    return res.status(400).json({ message: "Title and company are required" });
  }
  const newJob = { id: nanoid(), title, company };
  jobs.push(newJob);
  res.status(201).json({ message: "Job created", job: newJob });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.status(200).json({ job });
};

export const editJobById = async (req, res) => {
  const { id } = req.params;
  const { title, company } = req.body;

  if (!title || !company) {
    return res.status(400).json({ message: "Title and company are required" });
  }

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  job.title = title;
  job.company = company;
  res.status(200).json({ message: "Job updated", job });
};

export const deleteJobById = (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({ message: "Job deleted" });
};
