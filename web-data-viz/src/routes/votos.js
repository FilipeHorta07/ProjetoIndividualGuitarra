var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

router.get("/teste", function (req, res) {
    votoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    votoController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    votoController.cadastrar(req, res);
});

router.get("/escolha/:idUsuario", function (req, res) {
    votoController.buscarEscolha(req, res);
});

module.exports = router;
