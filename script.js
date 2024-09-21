var body = document.body;
body.style.backgroundColor = "white";

var img = document.getElementById("changeImgColor");
img.style.backgroundColor = "white";
img.style.border = "2px solid rgb(86, 255, 67)"
var paragraph = document.getElementById('text-of-theme');
paragraph.style.color = 'black';
paragraph.textContent = 'Light Mode'

function toggleTheme() {
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        img.style.backgroundColor = 'rgb(86, 255, 67)';
        paragraph.style.color = 'white';
        paragraph.textContent = 'Dark Mode'
    } else {
        body.style.backgroundColor = 'white';
        img.style.backgroundColor = "white";
        img.style.border = "2px solid rgb(86, 255, 67)"
        paragraph.style.color = 'black';
        paragraph.textContent = 'Light Mode';
}
}

