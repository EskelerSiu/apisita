const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hola", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

class Pedido extends Model {}

Pedido.init(
    {
        pedido_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        cliente_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        fecha_pedido: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        total: {
            type: DataTypes.FLOAT(10, 2),
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
        timestamps: false,
    }
);

module.exports = Pedido;
