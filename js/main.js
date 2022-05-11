//Efeito menu //
// referencia: https://webdesign.tutsplus.com/pt/tutorials/how-to-build-a-shifting-underline-hover-effect-with-css-and-javascript--cms-28510
const target = document.querySelector(".target");
const links = document.querySelectorAll(".navegacao a");
// const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];


links.forEach(e => {
    e.addEventListener('click', el => {
        el.preventDefault()
        ativo(el)
    });
    e.addEventListener('mouseenter', mouseenterFunc)
    e.addEventListener('mouseout', mouseOutFunc)
})

function mouseenterFunc() {
    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left + window.pageXOffset;
    const top = this.getBoundingClientRect().top + window.pageYOffset - 4;
    let color = "#EA7442";
    if (window.innerWidth <= 800) {
        color = 'transparent'
    }
    // const color = colors[Math.floor(Math.random() * colors.length)];

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
    target.style.transform = "none";
}

function mouseOutFunc() {
    target.style.borderColor = 'transparent';
}

function ativo(el) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("ativo")) {
            links[i].parentNode.classList.remove("ativo");
        }
        // links[i].style.opacity = "0.5";
    }
    el.target.parentNode.classList.add("ativo");
    // el.target.style.opacity = "1";
}

window.addEventListener("resize", resizeFunc);
function resizeFunc() {
    const ativo = document.querySelector(".navegacao li.ativo");

    if (ativo) {
        const left = ativo.getBoundingClientRect().left + window.pageXOffset;
        const top = ativo.getBoundingClientRect().top + window.pageYOffset;

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
    }
}

function ocultaMenu(){
    const menu = document.getElementById('btn-toggle');
    menu.checked = false;
}

// inserir páginas - SPA

document.querySelectorAll('.click-menu').forEach(link => {
    const conteudo = document.getElementById('conteudo');

    link.onclick = function (e) {
        e.preventDefault();
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
            .then(()=> ocultaMenu())
    }
});

function carregahome() {
    const conteudo = document.getElementById('conteudo');
    fetch('./pages/home.html')
    // fetch('./pages/noticias.html')
    .then(resp => resp.text())
    .then(html => conteudo.innerHTML = html)
}
carregahome();

function carregaSobre() {
    const conteudo = document.getElementById('conteudo');
    fetch('./pages/sobre.html')
    .then(resp => resp.text())
    .then(html => conteudo.innerHTML = html)
}
function carregaContato() {
    const conteudo = document.getElementById('conteudo');
    fetch('./pages/contato.php')
    .then(resp => resp.text())
    .then(html => conteudo.innerHTML = html)
}

function carregaHome2(){
    document.location.reload(true);
}



