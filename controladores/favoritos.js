const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favoritos");

function getFavoritos(request, response) {
    try {
        const livros = getTodosFavoritos();
        response.send(livros);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function postFavorito(request, response) {
    try {
        const id = request.params.id;
        insereFavorito(id);
        response.status(201);
        response.send("Livro inserido com sucesso");
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

function deleteFavorito(request, response) {
    try {
        const id = request.params.id;

        if (id && Number(id)) {
            deletaFavoritoPorId(id);
            response.send("Favorito deletado com sucesso");
        } else {
            response.status(422);
            response.send("ID inválido");
        }
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}