<?php

$token = "5992977485:AAE85qn1EaKffs7oAttHC1RnCPNlZzkpz-8";
$chat_id = "1150450636";

// $values = $hook->getValues();

#Получаем название формы
// $formName = $modx->getOption('formName', $formit->config, 'form-'.$modx->resource->get('id'));

#Получаем ip адрес отправителя
// $ip = $modx->getOption('REMOTE_ADDR', $_SERVER, '');

#Данные с формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

#Создаем массив
$arr = array(
"Имя" => $name,
"Телефон" => $phone,
"Cообщение" => $message,
"Емэйл" => $email,

);

/*Цикл по массиву (собираем сообщение) */
foreach($arr as $key => $value) { 
  if($value != "") {
    $txt .= "<b>".$key."</b>: ".$value."%0A"; 
  } 
}

#Отправляем сообщение
// $fp=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
$fp=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
header('Location: thanksyou.html');
#Возвращаем true
return true;
