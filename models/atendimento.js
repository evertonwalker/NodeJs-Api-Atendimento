const conexao = require('../infraestrutura/conexao')
const moment = require('moment');
class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const sql = 'INSERT INTO Atendimentos SET ?'

        const atendimentoDatado = { ...atendimento, dataCriacao, data }

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

}


module.exports = new Atendimento;
