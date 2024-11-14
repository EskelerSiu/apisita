const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("apisita", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});

class MateriaPrima extends Model {}

MateriaPrima.init(
    {
        materia_prima_id: {
            type: DataTypes.INTEGER, // Usamos INTEGER en lugar de UUID
            autoIncrement: true, // Auto-incremental
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.NUMERIC(10, 2), // Usamos NUMERIC para la cantidad
            allowNull: false,
        },
        unidad_medida: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.NUMERIC(10, 2), // Usamos NUMERIC para el precio
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Materia_Prima",
        tableName: "materia_primas",
        timestamps: false,
        schema: "apisita"
    }
);

module.exports = MateriaPrima;
