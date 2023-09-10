let express = require('express');
let app = express();

console.log("Hello World")

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html")
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", function(req, res) {
    let message = "Hello json"
    if (messageStyle === "uppercase") {
        message = message.toUpperCase()
    }
    res.json({message})
})

// Middleware functions

app.use((req, res, next) => {
  const logString = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logString);
  next();
});

































module.exports = app;
