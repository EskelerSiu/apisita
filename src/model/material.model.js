const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hola", "admin", "12345", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
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
        tableName: "materia_primas",
        timestamps: false,
        schema: "hola"
    }
);

module.exports = MateriaPrima;
