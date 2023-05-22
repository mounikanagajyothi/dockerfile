const express = require("express")
const app = express();
app.get("/", (req, res) => {
        res.send("Hii welcome to my app");
});
app.listen(8080, () => {
        console.log("Server started on prt 8080");
});
