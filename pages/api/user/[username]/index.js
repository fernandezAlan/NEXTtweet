import { getTweetsByUserName } from "../../../../firebase/admin/querys/tweetsQuerys";
export default (req, res) => {
  const { query } = req;
  const { username } = query;
  getTweetsByUserName(username).then((data) => res.json(data));
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
