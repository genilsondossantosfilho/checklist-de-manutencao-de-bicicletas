
Aluno: Genilson dos Santos Filho
Tema sorteado: Checklist de Manutenção de Bicicletas


# Descrição geral do app e suas funcionalidades

O Gbikes é um aplicativo web de checklist focado para manutenção de bicicletas. O usuario pode anotar o reparos e separar por categorias da bicicleta.

Funcionalidades:

- Adicionar novas categorias podendo escolher um nome e um ícone;
- Entrar em uma categorias e ver todos os reparos cadastrados nela;
- Adicionar novos reparo;
- Marcar um reparo como concluído;
- Excluir um reparo;
- Alternar entre temas claro/escuro;
- Dados salvos no navegador para não serem perdidos ao recarregar a pagina


# Estrutura dos arquivos do projeto

Checklist_De_Manutenção_De_Bicicletas/
├── docs/
│   ├── README.md
│   └── LICENSE
│   
├── estilos/
│   └── style.css
│     
├── images/
│   ├── bike.png
│   ├── wheel.PNG
│   ├── wrench.PNG
│   └── fundobranco.PNG
│     
├── js/
│   └── Main.js
│  
└── index.html         


# Como os dados são armazenados e renderizados na tela

O app é dinâmico e os elementos guardados nas listas `categories` e `reparos` são montados na tela toda vez que sofrem alguma alteração, então o app desmonta tudo e remonta do zero a cada item interagido nessas listas. O `renderCategories()` esvazia o container (`categoriesContainer.innerHTML = ""`) e percorre a lista `categories` prA contar os reparos, e após isso, ela cria a div e adiciona a contagem de reparos ja dentro dela com `appendChild`. O `renderReparos()` faz a mema coisa só que pra os reparos da categoria escolhida por (`selectedCategory`) ele percorre`reparos` e cria dinamicamente o `<label>` + `<input type="checkbox">` + `<div class="delete">` de cada um.


# Como funcionam os principais eventos

Todos os elementos são pegos pelo `document.querySelector` usando o `getElementById`. Cada um deles possuem um `addEventListener` pra "ouvir" quando o elemento sofrer uma interação (ex: botão foi clicado) e executar sua respectiva funcção javaScript.

- Adicionar categoria: o `#form-nova-area` tem o evento `submit` ligado à função `addCategory`, que recebe o nome digitado e o icone escolhido, verifica se o usuario digitou alguma coisa ou deixou vazio, cria um novo objeto `{ title, img }` dá `push` pra adicionar em `categories`, salva no localStorage e monta novamente as categorias.

- Adicionar reparo: é o botão (`.add-reparo-btn`) que abre o formulário (`toggleAddReparoForm`) e ao confirmar `submit` em "Add" ativa `addReparo(e)`, que faz `e.preventDefault()`, verifica se o usuario digitou alguma coisa ou deixou vazio, cria um novo objeto de reparo, dá `push` na lista `reparos` + `saveLocal()` e `renderReparos()`.

- Concluir reparo: cada item tem `change` que acha o reparo pelo `id` quando clicado, troca o campo `completed` e salva. Ele tambem fica riscado usando o `input:checked ~ p` no CSS.

- Excluir reparo: cada botão de delete tem uma função pra "ouvir" o `click` que acha o reparo pelo `id`, retira da lista com `splice` e chama `saveLocal()` + `renderReparos()` pra guardar e renderizar tudo de novo.

- Trocar de tema: o botão (`.theme-btn`) apenas alterna a classe `dark-theme` no `<body>`. Toda a mudança visual é resolvida no CSS.

- Navegar entre as telas: o menu (`☰`) e o botão de voltar alternam a classe `show-category` no elemento `.wrapper`, e é o CSS (`transform: translateX(-100%)`) que faz a "animação" para dentro e para fora da tela.


# Como o localStorage é usado para persistir os dados

O app usa o `localStorage` do navegador mas como ele só guarda texto, as listas javaScript são convertidos para string com `JSON.stringify` antes de salvar e para objetos com `JSON.parse` ao carregar usando as chamadas dos metodos `saveLocal()` e `saveCategoriesLocal()`. Quando recarrega ou inicia a página é chamado `getLocal()` e `getCategoriesLocal()` para  verificar se existe alguma coisa ja salva no navegador; se tiver, os dados iniciais do `Main.js` são substituidos, e se não tiver, eles são iniciados normalmente.


# Dificuldade encontrada e como foi resolvida

Uma das difficuldades encontradas no projeto foi durante a implementação da opção de poder adicionar novas categorias. No inicio as categorias tinham de ser postas atraves do codigo e suas fotos tambem. então assim que adicionei essa nova funcionalidade. foquei apenas em criar os elementos deixando de fora as fotos. logo. as categorias inicializadas continham um icone enquanto que as novas categorias criadas apareciam sem imagens. A solução foi criar (`<select id="nova-area-icone">`) com as opções das categorias tendo seus valores liagdos ao um `<select>` num um objeto (`iconImages`) que guarda-se todas as imagens ligando cada `<select>` a um icone alem de adicionar uma condição
(`[iconValue] || "bike.png`) para sempre haver uma imagem de padrão nas categorias.


# Link para demonstração

> Link para o video mostrando o app funcionando no youtube:  https://youtu.be/BxgQ6FDyqVE?si=PtPC_318VOBH1aJW


> Link para o GithubPages:  https://genilsondossantosfilho.github.io/checklist-de-manutencao-de-bicicletas/

