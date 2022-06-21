import { verifyIdToken } from "../../../../firebase/admin/auth";
import {
  shareTweet,
  unShareTweet,
} from "../../../../firebase/admin/querys/tweetsQuerys";

export default (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "missing authorization header" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const { tweetId } = req.body;
    verifyIdToken(token).then(async (currentUserId) => {
      if (req.method === "POST") {
        await shareTweet({ currentUserId, tweetId });
      } else if (req.method === "DELETE") {
        await unShareTweet({ currentUserId, tweetId });
      }
      res.status(201).send("OK");
      resolve();
    });
  });
};
