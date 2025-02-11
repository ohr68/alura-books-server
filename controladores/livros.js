const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro } = require('../servicos/livros');

function getLivros(request, response) {
    try {
        const livros = getTodosLivros();

        response.send(livros);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function getLivro(request, response) {
    try {
        const id = request.params.id;
        const livro = getLivrosPorId(id);

        response.send(livro);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function postLivro(request, response) {
    try {
        const livroNovo = request.body;

        insereLivro(livroNovo);

        response.status(201);
        response.send("Livro inserido com sucesso");

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function patchLivro(request, response) {
    try {
        const id = request.params.id;
        const modificacoes = request.body;

        modificaLivro(id, modificacoes);

        response.send("Item modificado com sucesso.");

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro
}