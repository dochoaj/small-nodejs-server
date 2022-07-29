// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  console.log(req)
  res.send("Express on Vercel");
});

app.get("/api", (req, res) => {
  console.log(req);
  res.json({ hello: 'world' })
})

// Initialize server
app.listen(8080, () => {
  console.log("Running on port 8080.");
});

module.exports = app;
