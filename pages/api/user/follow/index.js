import { verifyIdToken } from "../../../../firebase/admin/auth";
import { handleFollowUser } from "../../../../firebase/admin/querys/userQuerys";
export default (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "missing authorization header" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const { userId } = req.body;
    verifyIdToken(token).then(async (currentUserId) => {
      const { follow } = await handleFollowUser({ currentUserId, userId });
      await follow();
      res.status(201).end();
    });
    resolve();
  });
};
