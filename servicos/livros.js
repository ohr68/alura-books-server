const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivrosPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const livro = livros.filter((livro) => livro.id === id)[0];

    return livro;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaDeLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(id, modificacoes) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const indiceDoLivroModificado = livros.findIndex((livro) => livro.id === id);

    const conteudoModificado = { ...livros[indiceDoLivroModificado], ...modificacoes };

    livros[indiceDoLivroModificado] = conteudoModificado;

    fs.writeFileSync("livros.json", JSON.stringify(livros));
}

function removeLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const livrosFiltrados = livros.filter(livro => livro.id !== id);

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro,
    removeLivro
}