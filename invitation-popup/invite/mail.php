<?php
$email = isset($_POST['emailInput']) ? $_POST['emailInput'] : false;

if($email != false)
{
    $yourEmail = "mailinglist@rubeun.com";.
    $subject = "Subscribe Test";
    $message = "New Email Subscription for email: " + $email ;
    $success = sendMail($email, $yourEmail, $subject, $message);
}

?>