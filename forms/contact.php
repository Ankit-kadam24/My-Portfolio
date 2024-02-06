<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace 'your_email@example.com' with your actual email address
    $receiving_email_address = 'your_email@example.com';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Create the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message";

    // Send email
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($receiving_email_address, $subject, $email_message, $headers);

    // You can also add additional logic here, such as redirecting the user to a thank-you page
    // header('Location: thank-you.html');
    // exit;
}
?>
