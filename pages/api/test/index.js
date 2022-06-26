export default (req, res) => {
  return new Promise(() => {
    res.json({ test: "this is a test!" });
  });
};
