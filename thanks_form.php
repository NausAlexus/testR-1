<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    if (isset($_POST["privacypolicy"])) {
        $to = "support@" . $_SERVER['HTTP_HOST'];
        $subject = "New Contact Form Submission";
        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Message: $message\n";
        $body .= "Message: The user has agreed to the Privacy Policy.\n";
        
        $headers = "From: $to \r\n";

        if (mail($to, $subject, $body, $headers)) {
            header("Location: thanks/");
            exit();
        } else {

            echo "An error occurred while sending the email.";
        }
    } else {

        echo "You must agree to the Privacy Policy before submitting the form.";
    }
}
?>