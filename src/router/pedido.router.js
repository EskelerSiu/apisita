const router = require("express").Router();
const Pedido = require("../model/order.model");

router.get("/", async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: pedidos,
    });
});

router.get("/:pedido_id", async (req, res) => {
    const id = req.params.pedido_id;
    const pedido = await Pedido.findOne({
        where: {
            pedido_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: pedido,
    });
});

router.post("/", async (req, res) => {
    const dataPedido = req.body;
    const createPedido = await Pedido.create({
        cliente_id: dataPedido.cliente_id,
        total: dataPedido.total,
        estado: dataPedido.estado,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Pedido",
    });
});

router.put("/:pedido_id", async (req, res) => {
    const id = req.params.pedido_id;
    const dataPedido = req.body;
    const updatePedido = await Pedido.update(
        {
            cliente_id: dataPedido.cliente_id,
            total: dataPedido.total,
            estado: dataPedido.estado,
        },
        {
            where: {
                pedido_id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updatePedido,
    });
});

router.delete("/:pedido_id", async (req, res) => {
    const id = req.params.pedido_id;
    const deletePedido = await Pedido.destroy({
        where: {
            pedido_id: id,
        },
    });
    res.status(204).json({
        ok: true,
        status: 204,
        body: deletePedido,
    });
});

module.exports = router;
