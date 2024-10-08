const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hola", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

class Usuario extends Model {}

Usuario.init(
    {
        usuario_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rol_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Usuario",
        timestamps: false,
    }
);

module.exports = Usuario;
