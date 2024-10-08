const router = require("express").Router();
const Rol = require("../model/rol.model");

router.get("/", async (req, res) => {
    const roles = await Rol.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: roles,
    });
});

router.get("/:rol_id", async (req, res) => {
    const id = req.params.rol_id;
    const rol = await Rol.findOne({
        where: {
            rol_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: rol,
    });
});

router.post("/", async (req, res) => {
    const dataRol = req.body;
    const createRol = await Rol.create({
        nombre: dataRol.nombre,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Rol",
    });
});

router.put("/:rol_id", async (req, res) => {
    const id = req.params.rol_id;
    const dataRol = req.body;
    const updateRol = await Rol.update(
        {
            nombre: dataRol.nombre,
        },
        {
            where: {
                rol_id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateRol,
    });
});

router.delete("/:rol_id", async (req, res) => {
    const id = req.params.rol_id;
    const deleteRol = await Rol.destroy({
        where: {
            rol_id: id,
        },
    });
    res.status(204).json({
        ok: true,
        status: 204,
        body: deleteRol,
    });
});

module.exports = router;
