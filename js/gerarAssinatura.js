currentCanvas = null;

function validarCampos() {
    var gerar = document.getElementById("gerar"),
        nome = document.getElementById('nome-assinatura'),
        cargo = document.getElementById('cargo-a'),
        email = document.getElementById('email-a'),
        celular = document.getElementById('celular-a'),
        telefone = document.getElementById('telefone-a');
    if (nome.value == "" || email.value == "") {
        alert('preencha o nome')
    }
}

function generate() {
    var gerar = document.getElementById("gerar"),
        salvar = document.getElementById("salvare");
        
        html2canvas(document.getElementById("assinatura-div"), {
            "logging": true //Habilita os logs
        }).then(function (canvas) {
            currentCanvas = canvas;
            salvar.disabled = false;
            salvar.hidden = false;
        }); 
}

function salva() {
    if (currentCanvas !== null) {
        canvasDownload(currentCanvas, "foto.jpeg");
    }
};

function canvasDownload(canvas, filename, formato) {
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/" + (formato ? formato : "jpeg"));
    a.download = filename;
    a.click();
}