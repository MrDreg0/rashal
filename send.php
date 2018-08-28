<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email']) and !isset($_POST['phone']) and !isset($_POST['count'])){
    echo "Пожалуйста, заполните все поля формы.";
} else {
//показываем форму
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$count = $_POST['count'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$count = htmlspecialchars($count);
$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$count = urldecode($count);
$name = trim($name);
$email = trim($email);
$phone = trim($phone);
$count = trim($count);
mail("drak0on@yandex.ru", "Заявка с сайта", "Имя: ".$name."\r\nE-mail: ".$email."\r\nТелефон: ".$phone."\r\nКоличество: ".$count ,"From: \r\n".$email);
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>С вами свяжутся</title>
<meta name="generator">
<style type="text/css">
body
{
   
   background: #22BFF7 url(img/zakaz.jpg) top -70% center no-repeat;
   
}

<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
</body>
</html>