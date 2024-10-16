const router = require("express").Router();
const MateriaPrima = require("../model/material.model");

router.get("/", async (req, res) => {
    const materiasPrimas = await MateriaPrima.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: materiasPrimas,
    });
});

router.get("/:materia_prima_id", async (req, res) => {
    const id = req.params.materia_prima_id;
    const materiaPrima = await MateriaPrima.findOne({
        where: {
            materia_prima_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: materiaPrima,
    });
});

router.post("/", async (req, res) => {
    const dataMateriaPrima = req.body;
    const createMateriaPrima = await MateriaPrima.create({
        nombre: dataMateriaPrima.nombre,
        cantidad: dataMateriaPrima.cantidad,
        unidad_medida: dataMateriaPrima.unidad_medida,
        precio: dataMateriaPrima.precio,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created MateriaPrima",
    });
});

router.put("/:materia_prima_id", async (req, res) => {
    const id = req.params.materia_prima_id;
    const dataMateriaPrima = req.body;
    const updateMateriaPrima = await MateriaPrima.update(
        {
            nombre: dataMateriaPrima.nombre,
            cantidad: dataMateriaPrima.cantidad,
            unidad_medida: dataMateriaPrima.unidad_medida,
            precio: dataMateriaPrima.precio,
        },
        {
            where: {
                materia_prima_id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateMateriaPrima,
    });
});

router.delete("/:materia_prima_id", async (req, res) => {
    const id = req.params.materia_prima_id;
    const deleteMateriaPrima = await MateriaPrima.destroy({
        where: {
            materia_prima_id: id,
        },
    });
    res.status(200r).json({
        ok: true,
        status: 200,
        body: deleteMateriaPrima,
    });
});

module.exports = router;
