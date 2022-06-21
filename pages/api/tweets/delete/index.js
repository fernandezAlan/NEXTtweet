import { deleteTweet } from "../../../../firebase/admin/querys/tweetsQuerys";
import { verifyIdToken } from "../../../../firebase/admin/auth";
export default (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "missing authorization header" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const { tweetId } = req.body;
    verifyIdToken(token).then((userId) => {
      deleteTweet({ tweetId, userId })
        .then((response) => {
          res.status(200).send("DELETED");
        })
        .catch(() => res.status(500).end());
    });
    resolve();
  });
};
