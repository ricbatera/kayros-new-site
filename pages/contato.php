<div class="wow container-contato animate__animated animate__fadeIn">
    
    <div class="lado-a">
        <img src="./img/envelope.png" alt="imagem_envelope" />
        <h2>Contato</h2>
    </div>

    <div class="lado-b">
        <form action="mail.php" method="post">
            <label class="control-label col-sm-2" for="fname">Nome: </label>
            <input type="text" class="form-control" id="fname" placeholder="Nome" name="fname" autofocus>

            <label class="control-label col-sm-2" for="email">Email: </label>
            <input type="email" class="form-control" id="email" placeholder="email@email.com" name="email">

            <label class="control-label col-sm-2" for="comment">Mensagem: </label>
            <textarea class="form-control" rows="5" id="msg" name="msg" placeholder="Escreva aqui sua sugestão ou dúvida e entraremos em contato."></textarea>
            <button type="submit" class="btn btn-default">Enviar</button>
        </form>
    </div>
</div>
