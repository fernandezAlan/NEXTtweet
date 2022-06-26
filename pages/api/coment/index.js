import { addComent } from "../../../firebase/admin/querys/tweetsQuerys";
export default async (req, res) => {
  return new Promise((resolve, reject) => {
    const { body } = req;
    const { rootId, userId, coment } = body;
    if (rootId === undefined || userId === undefined || coment === undefined) {
      res.status(400).send(body);
    } else {
      addComent(body)
        .then((response) => {
          res.json(response);
          resolve();
        })
        .catch(() => {
          res.status(500);
          reject(new Error("fail at create coment"));
        });
    }
  });
};
