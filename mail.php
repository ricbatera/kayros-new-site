<?php
// Recebendo dados do formulário
$name = $_POST['fname'];
$email = $_POST['email'];
$message = $_POST['msg'];
$subject = "Mensagem do Site";
//$sucesso = $_POST['sucesso'];

$headers = "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Dados que serão enviados
$corpo = "Formulário da página de contato <br>";
$corpo .= "Nome: " . $name . " <br>";
$corpo .= "Email: " . $email . " <br>";
$corpo .= "Mensagem: " . $message . " <br>";

// Email que receberá a mensagem (Não se esqueça de substituir)
$email_to = 'contato@kyroscontabil.com.br';

// Enviando email
$status = mail($email_to, mb_encode_mimeheader($subject, "utf-8"), $corpo, $headers);

if ($status):
  // Enviada com sucesso 
  header('location:index.html?status=sucesso');
  //echo "<script type='javascript'>document.getElementById('sucesso').setAttribute("hidden","false");</script>";
else:
  // Se der erro
  //header('location:index.html?status=erro');
  //echo "<script type='text/javascript'>document.getElementById('sucesso').hidden = false</script>";
  //echo "<script type='text/javascript'>alert('erro')</script>";
  header('location:index.html?status=erro');
endif;
?>