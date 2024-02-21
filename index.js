import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import fs from "fs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : true}))

app.get("/", (req, res) => {
  res.render("welcome.ejs")
});


app.get("/home", (req, res) => {
  res.render("home.ejs")
});

app.post("/home", (req, res) => {
  var headerOne = req.body["header"];
  var textOne = req.body["text"];

  const content = `${headerOne}\n${textOne}`;
  const data = Buffer.from(content, 'utf8');
  
  fs.writeFile('message.txt', data, (err) => {
      if (err) {
          console.error('Error writing to file:', err);
          res.status(500).send('Error writing to file');
          return;
      }
      console.log('The file has been saved!');
      
      res.render("home.ejs", {
          header: headerOne,
          text: textOne,
      });
  });
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs")
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});