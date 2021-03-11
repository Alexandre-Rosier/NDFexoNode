const express = require("express");
const app = express();
const port = 3001;
const companies = require("./companies");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/companies", (req, res) => {
    res.status(200).json(companies);
  });

app.get("/companies/search/:name", (req, res) => {
    const search = companies.filter((company) => company.name === (req.params.name));
    search.length > 0
    ? res.status(200).json(search)
    : res.status(404).send("Company not found.. Warning => Check the writing of the company");
   
  });

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });