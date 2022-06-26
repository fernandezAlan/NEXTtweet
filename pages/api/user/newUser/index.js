import { createUserActivity } from "../../../../firebase/admin/userActivity";

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { currentUserId } = req.body;
    createUserActivity({ currentUserId })
      .then((response) => {
        res.status(201).send("OK");
        resolve();
      })
      .catch((error) => {
        res.status(500).json(error);
        reject(error);
      });
  });
};
