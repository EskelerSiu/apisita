const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hola", "admin", "12345", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
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
        tableName: "roles",
        timestamps: false,
        schema: "hola"
    }
);

module.exports = Rol;
