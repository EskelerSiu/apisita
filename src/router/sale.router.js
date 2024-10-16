const router = require("express").Router();
const Venta = require("../model/sales.model");

router.get("/", async (req, res) => {
    const ventas = await Venta.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: ventas,
    });
});

router.get("/:venta_id", async (req, res) => {
    const id = req.params.venta_id;
    const venta = await Venta.findOne({
        where: {
            venta_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: venta,
    });
});

router.post("/", async (req, res) => {
    const dataVenta = req.body;
    const createVenta = await Venta.create({
        pedido_id: dataVenta.pedido_id,
        total: dataVenta.total,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Venta",
    });
});

router.put("/:venta_id", async (req, res) => {
    const id = req.params.venta_id;
    const dataVenta = req.body;
    const updateVenta = await Venta.update(
        {
            pedido_id: dataVenta.pedido_id,
            total: dataVenta.total,
        },
        {
            where: {
                venta_id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateVenta,
    });
});

router.delete("/:venta_id", async (req, res) => {
    const id = req.params.venta_id;
    const deleteVenta = await Venta.destroy({
        where: {
            venta_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: deleteVenta,
    });
});

module.exports = router;
