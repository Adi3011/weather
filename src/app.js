const express = require("express");// we get express as function
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000

app.use(express.json());

console.log(path.join(__dirname));
staticpath = path.join(__dirname, "../public")
template_path = path.join(__dirname, "../templates/views")
partial_path = path.join(__dirname, "../templates/partials")


app.set("view engine","hbs");
app.set('views' ,template_path)

app.use(express.static(staticpath))
hbs.registerPartials(partial_path);





app.get("", (req, res) => {
    res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/weather", (req, res) => {
    res.render("weather")
});
app.get("*", (req, res) => {
    res.render("404", {
        errormsg: "Opps Page Not Found!"
    })
});


app.listen(port , ( ) => {
    console.log(`connection is setup at ${port}`)
})