const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4502;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Success",
  });
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
