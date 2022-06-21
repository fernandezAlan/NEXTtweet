import { firestore } from "../../../../firebase/admin/admin";

const parseDate = (data) => {
  const { createdAt } = data;
  return createdAt.toMillis();
};
export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { query } = req;
    const { id } = query;
    firestore
      .collection("tweets")
      .doc(id)
      .get()
      .then(async (doc) => {
        const data = doc.data();
        data.id = doc.id;
        data.createdAt = parseDate(data);
        res.send(data);
        resolve(data);
      })
      .catch((error) => {
        res.status(404).end();
        reject(error);
      });
  });
};
