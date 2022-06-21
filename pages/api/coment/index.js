import { addComent } from "../../../firebase/admin/querys/tweetsQuerys";
export default async (req, res) => {
  return new Promise(async (resolve, reject) => {
    const { body } = req;
    const { rootId, userId, coment } = body;
    if (rootId === undefined || userId === undefined || coment === undefined) {
      res.status(400).send(body);
    } else {
      try {
        const response = await addComent(body);
        res.json(response);
        resolve();
      } catch (error) {
        res.status(500);
        reject(error);
      }
    }
  });
};
