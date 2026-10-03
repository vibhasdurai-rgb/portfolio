const messageForm = document.querySelector("form");

messageForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message-text").value;

    try {

        const response = await fetch("/message", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        const result = await response.json();

        if (result.success) {

            alert("Message sent successfully!");

            messageForm.reset();

        }

    } catch (error) {

        alert("Something went wrong. Please try again.");

        console.error(error);

    }

});