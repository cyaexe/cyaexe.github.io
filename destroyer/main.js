document.getElementById("delete-webhook").addEventListener("click", function() {
    const webhookUrl = document.getElementById("webhook-url").value;
    if (!webhookUrl) {
        displayMessage("Please enter a webhook URL.", "error");
        return;
    }

    fetch(`/delete-webhook?url=${webhookUrl}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayMessage("Webhook deleted successfully.", "success");
        } else {
            displayMessage(`Error: ${data.error}`, "error");
        }
    })
    .catch(error => {
        displayMessage("An error occurred. Please try again.", "error");
    });
});

document.getElementById("spam-messages").addEventListener("click", function() {
    const webhookUrl = document.getElementById("webhook-url").value;
    if (!webhookUrl) {
        displayMessage("Please enter a webhook URL.", "error");
        return;
    }
    const message = prompt("Enter the message to spam:");
    const delay = prompt("Enter the delay between messages (seconds):");

    fetch(`/spam-messages?url=${webhookUrl}&message=${message}&delay=${delay}`, {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayMessage("Spamming started successfully.", "success");
        } else {
            displayMessage(`Error: ${data.error}`, "error");
        }
    })
    .catch(error => {
        displayMessage("An error occurred. Please try again.", "error");
    });
});

document.getElementById("edit-name").addEventListener("click", function() {
    const webhookUrl = document.getElementById("webhook-url").value;
    if (!webhookUrl) {
        displayMessage("Please enter a webhook URL.", "error");
        return;
    }
    const newName = prompt("Enter the new webhook name:");

    fetch(`/edit-name?url=${webhookUrl}&name=${newName}`, {
        method: "PATCH"
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayMessage("Webhook name changed successfully.", "success");
        } else {
            displayMessage(`Error: ${data.error}`, "error");
        }
    })
    .catch(error => {
        displayMessage("An error occurred. Please try again.", "error");
    });
});

function displayMessage(message, type) {
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = message;
    messageBox.style.color = type === "error" ? "red" : "green";
}
