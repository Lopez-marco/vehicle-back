const Sequelize = require('sequelize');
const sequelize = new Sequelize('vehicule', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('Connected');
    },
    function (err) {
        console.log(err);
    }
);
module.exports = sequelize;