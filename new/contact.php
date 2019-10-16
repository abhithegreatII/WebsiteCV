<?php

if($_POST["submit"]) {
    $recipient="abhishek013@yahoo.com";
    $subject="Response to Abhishek CV";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    if(mail($recipient, $subject, $mailBody, $sender))
    {
        echo "<script>alert('Mail was sent !');</script>";
        echo "<script>document.location.href='index.html'</script>";
    }

}

?>
