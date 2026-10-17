
function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }

    document.body.style.backgroundColor = color;
    document.getElementById("color-box").style.backgroundColor = color;
    document.getElementById("color-code").textContent = color;
    document.getElementById("message").textContent =
        "New color generated successfully!";
}

async function copyColor() {
    const color = document.getElementById("color-code").textContent;
    const message = document.getElementById("message");

    try {
        await navigator.clipboard.writeText(color);
        message.textContent = color + " copied successfully!";
    } catch (error) {
        message.textContent =
            "Copy unavailable. Please copy " + color + " manually.";
    }
}
