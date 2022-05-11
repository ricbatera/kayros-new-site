document.querySelectorAll('.click-menu').forEach(link =>{
    const conteudo = document.getElementById('conteudo');

    link.onclick = function(e){
        e.preventDefault();
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
});

function msg() {
    alert("Programar essa parte do envio");
}

function carregahome(){
    const conteudo = document.getElementById('conteudo');
    fetch('./pages/home.html')
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
}
carregahome();

function carregaSobre(){
    const conteudo = document.getElementById('conteudo');
    fetch('./pages/sobre.html')
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
}

function carregaContato(){
    const conteudo = document.getElementById('conteudo');
    fetch('./pages/contato.html')
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
}

new WOW().init();

function nomeAssinatura(){
    // const nome = document.getElementById('nome-assinatura');
    // const nomeImg = document.getElementById('nome-assinatura-img');
    // nomeImg.innerText = nome;
    document.getElementById('nome-assinatura-img').innerText = $('#nome-assinatura').val();
}

function cargoAssinatura(){
    document.getElementById('cargo-assinatura').innerText = $('#cargo-a').val();    
}

function emailAssinatura(){
    document.getElementById('email-assinatura').innerText = $('#email-a').val();    
}

function telefoneAssinatura(){
    document.getElementById('telefone-assinatura').innerText = $('#telefone-a').val();    
}

function celularAssinatura(){
    document.getElementById('celular-assinatura').innerText = $('#celular-a').val();    
}

function capturaUrl(){    
    var url_atual = window.location.href;
    if(url_atual == "http://kayroscontabil.com.br/index.html?status=sucesso"){
        alert("Mensagem enviada com sucesso!");        
    }else if(url_atual == "http://kayroscontabil.com.br/index.html?status=erro"){
        alert("Erro ao enviar a mensagem!");        
    }
}
capturaUrl();