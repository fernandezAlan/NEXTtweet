const timeline = [
  {
    id: "0",
    avatar: "https://avatars.githubusercontent.com/u/59181648?v=4",
    username: "fernandezAlan",
    message: "este es un tweet de prueba",
  },
  {
    id: "1",
    avatar: "https://avatars.githubusercontent.com/u/59181648?v=4",
    username: "fernandezAlan",
    message: "este es un tweet de prueba",
  },
  {
    id: "2",
    avatar: "https://avatars.githubusercontent.com/u/59181648?v=4",
    username: "fernandezAlan",
    message: "este es un tweet de prueba",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "aplication/json");
  res.send(timeline);
};
