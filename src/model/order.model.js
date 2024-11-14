const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("apisita", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});

class Pedido extends Model {}

Pedido.init(
    {
        pedido_id: {
            type: DataTypes.INTEGER, // Usamos INTEGER en lugar de UUID
            autoIncrement: true, // Auto-incremental
            primaryKey: true,
        },
        cliente_id: {
            type: DataTypes.INTEGER, // Usamos INTEGER en lugar de UUID
            allowNull: false,
        },
        fecha_pedido: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        total: {
            type: DataTypes.NUMERIC(10, 2), // Usamos NUMERIC para el total
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Pedido",
        tableName: "pedidos",
        timestamps: false,
        schema: "apisita"
    }
);

module.exports = Pedido;
