const express = require("express");
const BrowserHistory = require("node-browser-history");

const PORT = 5000;

const app = express();
app.get("/history", (req, res) => {
  BrowserHistory.getChromeHistory(100).then(function (history) {
    res.send(history);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
