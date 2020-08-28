require("dotenv").config();
// const { cloudinary } = require('./utils/cloudinary')
let express = require("express");
let app = express();
const sequelize = require("./db");

let vehicle = require("./controllers/vehiclecontroller");
let user = require("./controllers/usercontrollers");

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

// app.post('/api/upload', async (req, res) => {
//     try {
//         const fileStr = req.body.data;
//         const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
//             upload_preset: 'dev_setup'
//         })
//         console.log();
//         res.json(uploadedResponse)
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ err: 'problem on server' })
//     }
// })

// CLOUDINARY_API_KEY=741942416595765
// CLOUDINARY_API_SECRET=iWtzb0gNKfNM0r-eNzIspr_xp8c
// CLOUDINARY_NAME=mlpez

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
app.listen(process.env.PORT, function () {
    console.log("App is Listenig on port 3000");
});
