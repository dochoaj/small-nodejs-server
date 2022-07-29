// Add Express
const express = require("express");
const cors = require("cors");

// Initialize Express
const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://apps-403161767531951.apps.fbsbx.com/']
}))

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
