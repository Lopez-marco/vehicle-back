const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})


sequelize.authenticate().then(
    function () {
        console.log('Connected');
    },
    function (err) {
        console.log(err);
    }
);
module.exports = sequelize;