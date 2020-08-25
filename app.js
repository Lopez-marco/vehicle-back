require("dotenv").config();

let express = require("express");
let app = express();
// const fileUpload = require('express-fileupload');
const sequelize = require("./db");

let vehicle = require("./controllers/vehiclecontroller");
let user = require("./controllers/usercontrollers");

sequelize.sync();
app.use(require("./middleware/header"));
// app.use(fileUpload());

// //Upload 
// app.post('/upload', (req, res) => {
//     if (req.files === null) {
//         return res.status(400).json({ msj: 'No file Upload' });
//     }

//     const file = req.files.file;

//     file.mv(`${--dirname}/client/public/uploads/${file.name}`, err => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send(err);
//         }

//         res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
//     })
// })
app.use(express.json());
app.use("/user", user);
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////if there is validate session on ports not need these
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////
app.use("/vehicle", vehicle);
app.listen(process.env.PORT, function () {
    console.log("App is Listenig on port 3000");
});
