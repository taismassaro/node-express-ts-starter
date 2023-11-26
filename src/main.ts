import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("We are up and running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
