const express = require('express');
const app = express();
const rotaLivro = require('./rotas/livro');
const cors = require("cors");

app.use(express.json());
app.use(cors({origin: "*"}));

app.use('/livros', rotaLivro);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
