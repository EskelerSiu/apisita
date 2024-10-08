const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hola", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

class Rol extends Model {}

Rol.init(
    {
        rol_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Role",
        timestamps: false,
    }
);

module.exports = Rol;
