/////////////////////////// Página 1
//carrega um valor salvo no local storage em seu respectivo lugar, caso exista.
function carrega(item){
    var teste = window.localStorage.getItem("form_"+item.id);
    if(teste != null) item.value= teste;
}
//carrega os essenciais da pagina 1
function loadP1(){
    var varNome = document.getElementById("nome");
    var varResumo = document.getElementById("resumo");
    carrega(varNome);
    carrega(varResumo);
}
//armazena um item no local storage utilizando o id como parte do identificador
function armazena(item){
    window.localStorage.setItem("form_"+item.id,item.value);
}
//função que armazena o que foi preenchido na pagina 1 no local storage
function salvarP1(){
    var varNome = document.getElementById("nome");
    var varResumo = document.getElementById("resumo");
    armazena(varNome);
    armazena(varResumo);
}

////////////////////////// Pagina 2
//função que alterna o display das perguntas alternativas da página 2
function escolheuSim(){
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    yes.style.display="block";
    no.style.display="none";
}
//função que alterna o display das perguntas alternativas da pagina 2
function escolheuNao(){
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    no.style.display="block";
    yes.style.display="none";
}
//função que carrega os essenciais da pagina 2
function loadP2(){
    var opcao = document.getElementsByName("jogawow");
    var exp = document.getElementsByName("expansao");
    var justifica = document.getElementById("justifica");
    carrega(justifica);
    carregaRadio(exp);
    carregaRadio(opcao);
}
//função que carrega no radio button o valor salvo anteriormente no local storage
function carregaRadio(item){
    var teste = window.localStorage.getItem("form_"+item[0].name);
    if(teste != null){
        for(var i = 0; i < item.length; i++){
            if(item[i].value === teste){
                item[i].checked = true;
                if(item[i].name === "jogawow"){
                    if(teste === "sim"){
                        escolheuSim();
                    }else{
                        escolheuNao();
                    }
                }
                break;
            }
        }
    }
}
//função que armazena um item no local storage utilizando o name como parte do identificador
function armazenaRadio(item){
    window.localStorage.setItem("form_"+item.name,item.value);
}
//função que armazena o que foi preenchido na pagina 2 no local storage
function salvarP2(){
    var opcao = document.getElementsByName("jogawow");
    var exp = document.getElementsByName("expansao");
    var justifica = document.getElementById("justifica");
    for(var i = 0; i < opcao.length; i++){
        if(opcao[i].checked === true){
            armazenaRadio(opcao[i]);
            break;
        }
    }
    for(var i = 0; i < exp.length; i++){
        if(exp[i].checked === true){
            armazenaRadio(exp[i]);
            break;
        }
    }
    armazena(justifica);
}

///////////////////////////////// Pagina 3

//função que inicializa os essenciais para a pagina 3
function loadP3(){
    var selecao = document.getElementsByName("classes");
    carregaSelecao(selecao);
}
//função que guarda um item no local storage, utilizando o name como parte do identificador
function armazenaSelecao(nome, item){
    window.localStorage.setItem("form_"+nome.name,item.value);
}
//função para armazenar os valores inseridos no local storage
function salvarP3(){
    var selecao = document.getElementsByName("classes");
    console.log(selecao[0][0]);
    for(var i = 0; i < selecao[0].length; i++){
        console.log(selecao[0][i]);
        if(selecao[0][i].selected === true){
            armazenaSelecao(selecao[0],selecao[0][i]);
            break;
        }
    }
}
//função que busca o item no localStorage para carregar no menu de cascata
function carregaSelecao(item){
    var teste = window.localStorage.getItem("form_"+item[0].name);
    if(teste != null){
        for(var i = 0; i < item[0].length; i++){
            if(item[0][i].value === teste){
                item[0][i].selected = true;
                break;
            }
        }
    }
}

/////////////////////////////// Pagina 4
//função que carrega os resultados nos respectivos componentes
function loadP4(){
    var nome = window.localStorage.getItem("form_nome");
    var resumo = window.localStorage.getItem("form_resumo");
    var jogawow = window.localStorage.getItem("form_jogawow");
    var alterna;
    var pergAlt;
    if(jogawow === "sim"){
        pergAlt = "Qual sua \"expansão\" favorita?";
        alterna = window.localStorage.getItem("form_expansao");
    }else{
        pergAlt = "Por que não?";
        alterna = window.localStorage.getItem("form_justifica");
    }
    var classes = window.localStorage.getItem("form_classes");
    document.getElementById("nome").innerText = nome;
    document.getElementById("resumo").innerText = resumo;
    document.getElementById("jogawow").innerText = jogawow;
    document.getElementById("pergAlt").innerText = pergAlt;
    document.getElementById("alterna").innerText = alterna;
    document.getElementById("classes").innerText = classes;
}
//função que apaga um item do local storage
function apaga(item){
    window.localStorage.removeItem(item);
}
//função que apaga os itens relacionados ao site da pesquisa, armazenados no local storage
function finaliza(){
    apaga("form_nome");
    apaga("form_resumo");
    apaga("form_jogawow");
    apaga("form_expansao");
    apaga("form_justifica");
    apaga("form_classes");
}