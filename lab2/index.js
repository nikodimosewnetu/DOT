document.addEventListener('DOMContentLoaded', () => {
    const removeCharBtn = document.getElementById('removeCharBtn');
    const output = document.getElementById('output');

    removeCharBtn.addEventListener('click', () => {
        const inputString = document.getElementById('in').value;
        const modifiedString = removeFirstAndLastChar(inputString);
        output.innerText = `Modified String: ${modifiedString}`;
    });
});

function turnOn() {
    var img1 = document.getElementById("imge");
    img1.src = 'image.png';
}

function turnOff() {
    var Imgs = document.getElementById("imge");
    Imgs.src = "image copy.png";
}

function time() {
    var da = new Date();
    var Nt = da.toLocaleTimeString();
    alert(Nt);
}

function removeFirstAndLastChar(str) {
    return str.substring(1, str.length - 1);
}
