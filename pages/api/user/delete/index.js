import {
  verifyIdToken,
  deleteUserAccount,
} from "../../../../firebase/admin/auth";

export default (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "missing authorization header" });
    }
    const token = req.headers.authorization.split(" ")[1];
    verifyIdToken(token).then(async (currentUserId) => {
      try {
        await deleteUserAccount({ currentUserId });
        res.status(200).send("OK");
      } catch (error) {
        res.status(500).end();
      }
    });
  });
};
