const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, categoria, estoque) {
        const livro = {
            nome: nome,
            autor: autor,
            categoria: categoria,
            estoque: estoque,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);

        console.log("Livro adicionado:", livro.nome);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            console.log(`${p.nome} - ${p.autor}`);
        }
    },

    alugar(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];

            if (p.nome === nome) {
                if (p.disponivel && p.estoque > 0) {
                    p.disponivel = false;
                    p.alugado = true;
                    p.vezesAlugado++;
                    p.estoque--;

                    console.log(nome + " alugado com sucesso");
                } else if (p.estoque <= 0) {
                    console.log("O livro " + nome + " está sem estoque!");
                } else {
                    console.log("O livro " + nome + " já está alugado!");
                }

                return; // encerra a função quando encontra o livro
            }
        }

        console.log("O livro " + nome + " não existe.");
    },
    devolver(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            if (p.nome === nome) {
                if (p.disponivel == false) {
                    p.disponivel = true;
                    p.alugado = false;
                    p.estoque = 1;
                    console.log("Livro", nome, "devolvido com sucesso!");
                    return;
                } else {
                    console.log("O", nome, "ja esta disponivel!")
                    return;
                }
            }
        }
        console.log("O", nome, "Nao foi encontrado!!")
    }
}



biblioteca.adicionarLivros(
    "A Revolução dos Bichos",
    "George Orwell",
    "fábula satírica",
    210
);

biblioteca.mostrarLivros();

biblioteca.alugar("A Revolução dos Bichos");