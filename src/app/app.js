const express = require("express");
const morgan = require("morgan");

// Importar todos los routers
const userRouter = require("../router/user.router");
const pedidoRouter = require("../router/pedido.router");
const materiaPrimaRouter = require("../router/materia.router");
const ventaRouter = require("../router/sale.router");
const rolRouter = require("../router/rol.router");
const productoRouter = require("../router/product.router");

const app = express();

// Middleware de Morgan para el logging de peticiones
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

// Ruta principal para verificar que el servidor está funcionando
app.get("/", (req, res) => {
    res.send("This is Express");
});

// Middleware para procesar JSON
app.use(express.json());

// Registro de las rutas con prefijo "/api/"
app.use("/api/usuarios", userRouter);
app.use("/api/pedidos", pedidoRouter);
app.use("/api/materia_primas", materiaPrimaRouter);
app.use("/api/ventas", ventaRouter);
app.use("/api/roles", rolRouter);
app.use("/api/products", productoRouter);

app.post('/auth', (req, res)=> {
    const {username, password} = req.body;

    
});

// Exportar la aplicación
module.exports = app;
