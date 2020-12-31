const router = require("express").Router();
const User = require("../db").import("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

///////user signup

router.post("/signup", function (req, res) {
    User.create({
        Email: req.body.user.Email,
        password: bcrypt.hashSync(req.body.user.password, 13),
        firstname: req.body.user.firstname,
        lastname: req.body.user.lastname
    })
        .then(function createSuccess(user) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
            });
            res.status(200).json({
                username: user,
                message: "User seccesfully created!",
                sessionToken: token,
            });
        }
        )
        .catch((err) => res.status(500).json({ error: err })
        );
});


/////user Login/////

router.post("/signin", (req, res) => {
    User.findOne({ where: { Email: req.body.user.Email } }).then((user) => {
        if (user) {
            bcrypt.compare(req.body.user.password, user.password, function (
                err,
                matches
            ) {
                if (matches) {
                    var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                        expiresIn: 60 * 60 * 24,
                    });
                    res.json({
                        user: user,
                        message: "Successfully authenticated.",
                        sessionToken: token,
                    });
                } else {
                    res.status(502).send({ error: "Passwords do not match." });
                }
            });
        } else {
            res.status(403).send({ error: "User not found." });
        }
    });
});

module.exports = router;
