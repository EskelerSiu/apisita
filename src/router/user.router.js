const router = require("express").Router();
const Usuario = require("../model/user.model");

router.get("/", async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: usuarios,
    });
});

router.get("/:usuario_id", async (req, res) => {
    const id = req.params.usuario_id;
    const usuario = await Usuario.findOne({
        where: {
            usuario_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: usuario,
    });
});

router.post("/", async (req, res) => {
    const dataUsuario = req.body;
    const createUsuario = await Usuario.create({
        nombre: dataUsuario.nombre,
        email: dataUsuario.email,
        password: dataUsuario.password,
        rol_id: dataUsuario.rol_id,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Usuario",
    });
});

router.put("/:usuario_id", async (req, res) => {
    const id = req.params.usuario_id;
    const dataUsuario = req.body;
    const updateUsuario = await Usuario.update(
        {
            nombre: dataUsuario.nombre,
            email: dataUsuario.email,
            password: dataUsuario.password,
            rol_id: dataUsuario.rol_id,
        },
        {
            where: {
                usuario_id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateUsuario,
    });
});

router.delete("/:usuario_id", async (req, res) => {
    const id = req.params.usuario_id;
    const deleteUsuario = await Usuario.destroy({
        where: {
            usuario_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: deleteUsuario,
    });
});

module.exports = router;
