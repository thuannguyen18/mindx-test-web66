const express = require("express");
const connectToDb = require("./db");
const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");
const verifyToken = require("./middleware/verifyToken");

const app = express();

app.use(express.json());

app.use("/", productRouter);
app.use("/login", authRouter);

app.get("/resource", verifyToken, (req, res) => {
  res.send("Resource")
});

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
