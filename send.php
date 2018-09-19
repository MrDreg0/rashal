<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email']) and !isset($_POST['phone'])){
    echo "Пожалуйста, заполните все поля формы.";
} else {
//показываем форму
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$name = trim($name);
$email = trim($email);
$phone = trim($phone);
mail("drak0on@yandex.ru", "Заявка с сайта", "Имя: ".$name."\r\nE-mail: ".$email."\r\nТелефон: ".$phone ,"From: info@rashal.ru \r\n");
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>Спасибо за заявку! Мы Вам перезвоним.</title>
<meta name="generator">
<style type="text/css">
body
{
   
   background: #22BFF7 url(img/zakaz.jpg) top -70% center no-repeat;
   
}

<script type="text/javascript">
setTimeout('location.replace("/")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
</body>
</html>