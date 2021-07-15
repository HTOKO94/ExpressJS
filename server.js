const express = require("express");

const app = express();
const port = 5000;

app.get("/Style/closed.css", (req, res) => {
    res.sendFile(`${__dirname}/Views/Style/closed.css`);
  });

  const date_verif = (req, res, next) => {
    let ndate = new Date();
    let d = ndate.getDay();
    let h = ndate.getHours();
    if (d > 6 || h > 17 || h < 9) {
      res.sendFile(`${__dirname}/Views/closed.html`);
    } else {
      next();
    }
  };
  
  app.use(date_verif, express.static("Views"));
  
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`http://localhost:${port}`);
  });