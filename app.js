require("dotenv").config();
app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
})

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})

let express = require("express");
let app = express();

const sequelize = require("./db");

let vehicle = require("./controllers/vehiclecontroller");
let user = require("./controllers/usercontrollers");

sequelize.sync();
app.use(require("./middleware/header"));
app.use(express.json());
app.use("/user", user);
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////if there is validate session on ports not need these
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////
app.use("/vehicle", vehicle);
app.listen(3000, function () {
    console.log("App is Listenig on port 3000");
});
