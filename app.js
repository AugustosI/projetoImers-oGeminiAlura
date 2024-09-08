function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável
    let section = document.getElementById("resultados-pesquisa");

    // Seleciona o elemento HTML com o ID "campo-pesquisa" e armazena em uma variáve
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    //Se o campoPesquisa for campo vazio, não retornará nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Busca Vazia</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let link = "";
    let tags = "";

    // Itera sobre cada elemento do array "dados"
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        link = dado.link.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Concatena o HTML de cada resultado à string "resultados"
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
            `;
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o conteúdo HTML gerado à propriedade innerHTML do elemento "section"
    section.innerHTML = resultados;
}
