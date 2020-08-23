module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return User;
}