const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("apisita", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});

class Product extends Model {}

Product.init(
    {
        product_id: {
            type: DataTypes.INTEGER, // Usamos INTEGER en lugar de UUID
            autoIncrement: true, // Auto-incremental
            primaryKey: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.NUMERIC(10, 2), // Usamos NUMERIC para el precio
            allowNull: false,
        },
        is_stock: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        modelName: "Product",
        tableName: "productos",
        timestamps: false,
        schema: "apisita" 
    }
);

module.exports = Product;
