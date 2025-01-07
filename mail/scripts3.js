document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    try {
        // Send form data to the backend
        const response = await fetch('/mail/sendMail.php', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Redirect to success page
            window.location.href = 'success.html';
        } else {
            // Redirect to error page
            window.location.href = 'error.html';
        }
    } catch (error) {
        console.error('Error occurred:', error);
        // Redirect to error page in case of an exception
        window.location.href = 'error.html';
    }
});
