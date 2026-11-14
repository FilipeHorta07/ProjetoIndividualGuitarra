var votoModel = require("../models/votoModel");

function testar(req, res) {
    res.status(200).send("Controller de votos funcionando!");
}

function listar(req, res) {

    votoModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).send("Erro ao listar os votos!");
        });
}

function cadastrar(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var idBanda = req.body.idBandaServer;

    if (idUsuario == undefined || idBanda == undefined) {
        res.status(400).send("Dados do voto não informados!");
        return;
    }

    votoModel.cadastrar(idUsuario, idBanda)
        .then(function (resultado) {
            res.status(201).send("Voto registrado com sucesso!");
        })
        .catch(function (erro) {

            if (erro.code == "ER_DUP_ENTRY") {
                res.status(409).send("Este usuário já votou!");
            } else {
                console.log(erro);
                res.status(500).send("Erro ao registrar o voto!");
            }

        });
}

module.exports = {
    testar,
    listar,
    cadastrar
};
