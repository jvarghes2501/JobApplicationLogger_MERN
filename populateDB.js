import "express-async-errors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import Job from "./models/JobModel.js";
import User from "./models/UserModel.js";
import { JOB_STATUS, JOB_TYPES } from "./utils/constant.js";

dotenv.config();

const companies = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Meta",
  "Netflix",
  "Tesla",
  "Uber",
  "Airbnb",
  "Twitter",
  "LinkedIn",
  "Salesforce",
  "Adobe",
  "Oracle",
  "IBM",
  "Intel",
  "Nvidia",
  "Spotify",
  "Stripe",
  "Dropbox",
];

const jobTitles = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
  "QA Engineer",
  "Mobile Developer",
];

const locations = [
  "New York, NY",
  "San Francisco, CA",
  "Seattle, WA",
  "Austin, TX",
  "Boston, MA",
  "Los Angeles, CA",
  "Chicago, IL",
  "Denver, CO",
  "Remote",
  "Portland, OR",
];

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getRandomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

const populateDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");

    // Find a user to associate jobs with
    const user = await User.findOne();

    if (!user) {
      console.error("No user found! Please register a user first.");
      process.exit(1);
    }

    console.log(`Found user: ${user.email}`);

    // Delete existing jobs for this user (optional)
    await Job.deleteMany({ createdBy: user._id });
    console.log("Cleared existing jobs");

    // Generate mock jobs
    const mockJobs = [];
    const jobCount = 50; // Number of mock jobs to create

    // Date range: last 6 months
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 6);

    for (let i = 0; i < jobCount; i++) {
      const job = {
        company: getRandomItem(companies),
        title: getRandomItem(jobTitles),
        jobStatus: getRandomItem(Object.values(JOB_STATUS)),
        jobType: getRandomItem(Object.values(JOB_TYPES)),
        jobLocation: getRandomItem(locations),
        createdDate: getRandomDate(startDate, endDate),
        createdBy: user._id,
      };
      mockJobs.push(job);
    }

    // Insert mock jobs
    await Job.insertMany(mockJobs);
    console.log(`Successfully created ${jobCount} mock jobs!`);

    // Show summary
    const stats = await Job.aggregate([
      { $match: { createdBy: user._id } },
      { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
    ]);

    console.log("\nJob Status Summary:");
    stats.forEach((stat) => {
      console.log(`  ${stat._id}: ${stat.count}`);
    });

    process.exit(0);
  } catch (error) {
    console.error("Error populating database:", error);
    process.exit(1);
  }
};

populateDB();
