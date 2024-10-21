require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../model/user.model');

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
app.use(express.urlencoded({ extended: false }));

// Ruta principal para verificar que el servidor está funcionando
app.get("/", (req, res) => {
    res.send("This is Express");
});

// Middleware para procesar JSON
app.use(express.json());

app.get('/api', validateToken, (req, res) => {
    res.json({
        username: req.user,
        tuits: [
            {
                id: 0,
                text: 'Este es mi primer tuit',
                username: 'vidamrr'
            },
            {
                id: 0,
                text: 'El mejor lenguaje es HTMLI',
                username: 'patito_feliz'
            }
        ]
    });
});

// Registro de las rutas con prefijo "/api/"
app.use("/api/usuarios", validateToken, userRouter);
app.use("/api/pedidos", validateToken, pedidoRouter);
app.use("/api/materia_primas", validateToken, materiaPrimaRouter);
app.use("/api/ventas", validateToken, ventaRouter);
app.use("/api/roles", validateToken, rolRouter);
app.use("/api/products", validateToken, productoRouter);

app.get('/login', (req, res) => {
    res.send(`<html>
                <head>
                    <title>Login</title>
                </head>
                <body>
                    <form method="POST" action="/auth">
                        Nombre de usuario: <input type="text" name="username"><br/>
                        Contraseña: <input type="password" name="password"><br/>
                        <input type="submit" value="Iniciar sesión"/>
                    </form>
                </body>
            </html>`
    );
});

app.post('/auth', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar al usuario en la base de datos
        const user = await Usuario.findOne({
            where: {
                nombre: username
            }
        });

        // Si no se encuentra al usuario
        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        // Verificar si la contraseña es correcta
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({
                message: 'Contraseña incorrecta'
            });
        }

        // Generar el token si el usuario y la contraseña son válidos
        const accessToken = generateAccessToken({ username: user.nombre });

        res.header('authorization', accessToken).json({
            message: 'Usuario autenticado',
            token: accessToken
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error al autenticar el usuario',
            error: error.message
        });
    }
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '5m' });
}

function validateToken(req, res, next) {
    const accessToken = req.headers['authorization'] || req.query.accesstoken;
    if (!accessToken) res.send('Access denied');

    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if (err) {
            res.send('Access denied, token expired or incorrect');
        } else {
            req.user = user;
            next();
        }
    });
}

// Exportar la aplicación
module.exports = app;
