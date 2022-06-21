import { verifyIdToken } from "../../../../firebase/admin/auth";
import { createTweet } from "../../../../firebase/admin/querys/tweetsQuerys";

export default (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "missing authorization header" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const { content, downloadImageURL } = req.body;
    verifyIdToken(token).then(async (userId) => {
      const created = await createTweet({ userId, content, downloadImageURL });
      const newTweet = await created.get();
      if (newTweet.exists) {
        res.status(201).send("OK");
      } else {
        res.status(500).end();
      }
    });
    resolve();
  });
};
