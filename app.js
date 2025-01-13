import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.set("view engine", "ejs");
// app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("report", { name: ["chetan", "kunal", "shubham"], age: 20 });
});

app.get("/report", (req, res) => {
    const name = ["chetan", "kunal", "shubham"];
    res.render("report", { name, age: 20 });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
