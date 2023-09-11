import { Router } from "express";
import { getDayName } from "../utils/day.js";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

router.get("", (req, res) => {
  const { slack_name, track } = req.body;

  const currentDate = new Date();
  const dayName = getDayName(currentDate);
  const result = {
    slack_name: slack_name,
    current_day: dayName,
    utc_time: new Date(),
    track: track,
    github_file_url:
      "https://github.com/hanibalgirmay/repo/blob/main/file_name.ext",
    github_repo_url: process.env.GITHUB_URL,
    status_code: res.sendStatus,
  };
  res.json(result);
});

router.get("/test", (req, res) => {
  console.log(req);
  res.send("test route");
});

// module.exports = router;
export default router;
