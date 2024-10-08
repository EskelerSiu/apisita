const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hola", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

class MateriaPrima extends Model {}

MateriaPrima.init(
    {
        materia_prima_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false,
        },
        unidad_medida: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Materia_Prima",
        timestamps: false
    }
);

module.exports = MateriaPrima;
