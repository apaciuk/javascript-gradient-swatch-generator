// Global variables & listeners
const colorone = document.getElementById('colorone');
const colortwo = document.getElementById('colortwo');
const gradient = document.getElementById('bodybg');
const showdata = document.getElementById('showvalue');
const showCBtn = document.getElementById('copyBtn');
colorone.addEventListener('input', setbgColor);
colortwo.addEventListener('input', setbgColor);

// Create new elements for swatch
function createSwatch () {
    showdata.textContent = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    let gradient = showdata.textContent;
    let range = document.createRange();
    range.selectNode(document.getElementById("showvalue"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    let newDiv = document.createElement('div');
    newDiv.classList.add("col-md-3", "bg-gradient");
    let newSwatch = document.querySelector('.row');
    newSwatch.appendChild(newDiv);
}

// Pick and Set the BG Gradient
function setbgColor () {
    bodybg.style.background = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    showdata.style.display = "none";
    showCBtn.style.display = "block";
}

// Copy the  value to the swatch
function copyToSwatch () {
    showdata.textContent = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    let gradient = showdata.textContent;
    let range = document.createRange();
    range.selectNode(document.getElementById("showvalue"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    //window.getSelection().removeAllRanges();// to deselect
    swal(`${gradient}`);
    }