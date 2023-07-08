const express = require("express");
const AuthRoute = require("./routes/auth");
const homeRouter = require("./routes/home")
const app = express();


app.use(express.json());
app.use("/", homeRouter);
app.use("/auth", AuthRoute);

app.listen(9000, () => {
    console.log("server listening at port 9000");
})
