
var database = require("../database/config");

function listar() {

    var instrucaoSql = `
        select
            banda.id,
            banda.nome,
            banda.votos_iniciais + count(voto.id) as total_votos
        from banda
        left join voto on voto.fk_banda = banda.id
        group by banda.id, banda.nome, banda.votos_iniciais
        order by banda.id;
    `;

    return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, idBanda) {

    var instrucaoSql = `
        insert into voto (fk_usuario, fk_banda)
        values (?, ?);
    `;

    return database.executar(instrucaoSql, [idUsuario, idBanda]);
}

module.exports = {
    listar,
    cadastrar
};
