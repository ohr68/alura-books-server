const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, removeLivro } = require('../servicos/livros');

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

        if (id && Number(id)) {
            const livro = getLivrosPorId(id);
            response.send(livro);
        }
        else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function postLivro(request, response) {
    try {
        const livroNovo = request.body;

        if (request.body.nome) {
            insereLivro(livroNovo);

            response.status(201);
            response.send("Livro inserido com sucesso");
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function patchLivro(request, response) {
    try {
        const id = request.params.id;
        const modificacoes = request.body;

        if (id && Number(id)) {
            modificaLivro(id, modificacoes);
            response.send("Item modificado com sucesso.");
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function deleteLivro(request, response) {
    try {
        const id = request.params.id;

        if (id && Number(id)) {
            removeLivro(id);
            response.send("Livro removido com sucesso");
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}