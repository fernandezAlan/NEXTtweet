import { verifyIdToken } from "../../../firebase/admin/auth";
import { addUserActivity } from "../../../firebase/admin/userActivity";
export default (req, res) => {
  return new Promise(() => {
    const { type } = req.query;
    const { tweetId, targetUserId } = req.body;

    if (!req.headers.authorization) {
      return res.status(403).send({ message: "missing authorization header" });
    }
    const token = req.headers.authorization.split(" ")[1];
    verifyIdToken(token).then((currentUserId) => {
      addUserActivity({
        tweetId,
        currentUserId,
        typeActivity: type,
        targetUserId,
      });
      res.status(201).send("OK");
    });
  });
};
