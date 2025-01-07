<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $fullName = htmlspecialchars($_POST['fullName']);
    $email = htmlspecialchars($_POST['email']);
    $phoneNumber = htmlspecialchars($_POST['phoneNumber']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email settings
    $to = "arafataraf0@gmail.com"; // Replace with your email address
    $emailSubject = "New Contact Form Message: " . $subject;
    $emailBody = "You have received a new message from your contact form.\n\n";
    $emailBody .= "Name: $fullName\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Phone Number: $phoneNumber\n\n";
    $emailBody .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        // Redirect to success page
        header("Location: success.html");
        exit();
    } else {
        // Redirect to error page
        header("Location: error.html");
        exit();
    }
}
?>
