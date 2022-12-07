<?  $headers= "MIME-Version: 1.0\r\n";
    $headers .= 'Content-Type: text/html; charset="utf-8"'."\n";
    $headers .= "From: info@renault71.ru\r\n";

    $to = 'moskvich-0@mail.ru';
    $subject = 'Вопрос';

    $message = '
    <p>Заполнена форма "Задать вопрос"</p>
    <p><b>Отправитель: </b>'.$_POST["userName"].'</p>
    <p><b>Телефон: </b>'.$_POST["userPhone"].'</p>
    <p><b>Вопрос: </b>'.$_POST["userQuestion"].'</p>
    ';

    if(mail($to, $subject, html_entity_decode($message), $headers)) {
        echo '<span class="correctMess">Спасибо, Вас вопрос отправлен.<br/>В ближайшее время наш менеджер свяжется с Вами</span>';
    }
    else {
        echo '<span class="errMess">Ошибка, попробуйте позднее</span>'; 
    }
?>