const express = require("express");
const app = express();
// console.log(app);
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>aps signals</h1>");
});

app.get("/multiply", (req, res) => {
  console.log(req);
  // Destructur
  const { value1, value2 } = req.query;
  res.send(`Thise should return value of ${value1 * value2} `);
});

app.get("*", (req, res) => {
  res.send("<h1>aps signals</h1><br><p>Page Not Found😂😂</p>");
});

app.listen(PORT, () => {
  console.log(`server is runnig on port : ${PORT}`);
});
