class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarAtendimento();
    }


    criarAtendimento() {
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL
        AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20),
        servico varchar(20) NOT NULL, status varchar(20) NOT NULL,
        dataCriacao datetime NOT NULL,
        data varchar(30) NOT NULL,
        observacoes text, PRIMARY KEY(id))`

        // const sql = 'drop table Atendimentos';

        this.conexao.query(sql, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Table atendimento was created with sucessful')
            }
        })
    }

}

module.exports = new Tabelas;