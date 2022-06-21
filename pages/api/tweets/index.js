import {
  getAllTweets,
} from "../../../firebase/admin/querys/tweetsQuerys";
export default (req, res) => {
  return new Promise((resolve, reject) => {
    getAllTweets().then((tweets) => {
      res.json(tweets);
      resolve();
    });
  });
};
