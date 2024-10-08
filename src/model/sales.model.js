const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hola", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

class Venta extends Model {}

Venta.init(
    {
        venta_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        pedido_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        fecha_venta: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        total: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Ventas",
        timestamps: false,
    }
);

module.exports = Venta;
