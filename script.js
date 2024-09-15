var body = document.body;
body.style.backgroundColor = "white";

var button = document.getElementById("changeButtonColor");
button.style.backgroundColor = "black";
button.style.color = "white";
button.textContent = "Switched to light Mode";

function toggleTheme() {
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.textContent = "Switched to Dark Mode";
    } else {
        body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.textContent = "Switched to light Mode";
    }
}

