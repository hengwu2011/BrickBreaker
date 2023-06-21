const express = require("express"),
  app = express(),
  port = 3007,
  server = app.listen(port, () => console.log("Hopefully it wokrs at " + port));
app.use(express.static("Brick-breaker/public"));
