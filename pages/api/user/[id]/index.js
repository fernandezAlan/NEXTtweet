import { getUserById } from "../../../../firebase/admin/querys/tweetsQuerys";
export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { query } = req;
    const { id } = query;
    if (id) {
      getUserById(id).then((data) => {
        res.json(data);
      });
    } else {
      res.status(400).end();
    }
    resolve();
  });
  // res.status(200).end();
  /*
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
*/
};
