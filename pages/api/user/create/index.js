import { verifyIdToken } from "../../../../firebase/admin/auth";
import { createUserInformation } from "../../../../firebase/admin/querys/userQuerys";
export default (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "missing authorization header" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const { userName, description, displayName } = req.body;
    const data = {
      userName,
      description,
      follows: [],
      followers: [],
      followsCount: 0,
      followersCount: 0,
      displayName,
      names: [userName.toUpperCase(), displayName.toUpperCase()],
    };
    verifyIdToken(token).then((currentUserId) => {
      createUserInformation({ currentUserId, data })
        .then(() => {
          res.status(201).end();
        })
        .catch(() => res.status(500).end());
    });
    resolve();
  });
};
