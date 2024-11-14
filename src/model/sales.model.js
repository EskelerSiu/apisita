const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("apisita", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres",
    port: 5432
});

class Venta extends Model {}

Venta.init(
    {
        venta_id: {
            type: DataTypes.INTEGER, // Usamos INTEGER en lugar de UUID
            autoIncrement: true, // Auto-incremental
            primaryKey: true,
        },
        pedido_id: {
            type: DataTypes.INTEGER, // Usamos INTEGER en lugar de UUID
            allowNull: false,
        },
        fecha_venta: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        total: {
            type: DataTypes.NUMERIC(10, 2), // Usamos NUMERIC para mayor precisión
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Venta",
        tableName: "ventas",
        timestamps: false,
        schema: "apisita"
    }
);

module.exports = Venta;
