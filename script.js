document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("send_message");

    if (sendButton) {
        sendButton.addEventListener("click", function () {
            let isValid = true;

            const name = document.getElementById("name");
            const mail = document.getElementById("mail");
            const para = document.getElementById("para");
            const message = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const mailError = document.getElementById("mailError");
            const subjectError = document.getElementById("subjectError");
            const messagetError = document.getElementById("messagetError");

            // Name validation
            if (!name.value.trim() || !/^[a-zA-Z ]+$/.test(name.value)) {
                name.classList.add("is-invalid");
                nameError.textContent = "Please enter a valid name.";
                nameError.classList.add("invalid-feedback");
                isValid = false;
            } else {
                name.classList.remove("is-invalid");
                nameError.textContent = "";
            }

            // Email validation
            if (!mail.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value)) {
                mail.classList.add("is-invalid");
                mailError.textContent = "Please enter a valid email.";
                mailError.classList.add("invalid-feedback");
                isValid = false;
            } else {
                mail.classList.remove("is-invalid");
                mailError.textContent = "";
            }

            // Subject validation
            if (!para.value.trim()) {
                para.classList.add("is-invalid");
                subjectError.textContent = "Subject is required.";
                subjectError.classList.add("invalid-feedback");
                isValid = false;
            } else {
                para.classList.remove("is-invalid");
                subjectError.textContent = "";
            }

            // Message validation
            if (!message.value.trim()) {
                message.classList.add("is-invalid");
                messagetError.textContent = "Message cannot be empty.";
                messagetError.classList.add("invalid-feedback");
                isValid = false;
            } else {
                message.classList.remove("is-invalid");
                messagetError.textContent = "";
            }

            if (isValid) {
                alert("Thank you! Your message has been sent.");
                document.getElementById("myForm").reset();
            }
        });
    }

    // Buy Now buttons
    document.querySelectorAll("#buyNow_button1, #buy_button3").forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });

    // View More buttons
    document.querySelectorAll("#view_button2").forEach(button => {
        button.addEventListener("click", () => {
            alert("More details will be available soon!");
        });
    });
});
