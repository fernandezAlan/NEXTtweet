import { firestore } from "../../../../firebase/admin";
export default (req, res) => {
  const { query } = req;
  const { id } = query;
  firestore
    .collection("tweets")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const { createdAt } = data;
      data.createdAt = createdAt.toMillis();
      res.json(data);
    })
    .catch(() => {
      res.status(404).end();
    });
};
