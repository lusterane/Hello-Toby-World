<?php

    // store info from user
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'portfoliowebsite@hellotobyworld.com';

    $email_subject = "Portfolio Website Message";

    $email_body = "User Name: $name\n".
    "User Email: $visitor_email\n".
    "User Message: \n$message";

    $to = "tobychow98@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    // send the email
    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>