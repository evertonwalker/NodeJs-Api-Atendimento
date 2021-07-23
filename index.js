const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabela')

const app = customExpress();
conexao.connect(erro => {
    if (erro) {
        console.log(erro) 
        return;
    }
    if (!erro) console.log('Connection with database was sucessful')
    Tabelas.init(conexao)
    
})

app.listen(3000, () => {
    console.log(' Server is running');
});


