// Global variables & listeners
const colorone = document.getElementById('colorone');
const colortwo = document.getElementById('colortwo');
const gradient = document.getElementById('bodybg');
const showdata = document.getElementById('showvalue');
const showCBtn = document.getElementById('copyBtn');
const delBtn = document.createElement("button");
delBtn.classList.add('btn', 'btn-danger');
delBtn.innerHtml = 'Delete';
delBtn.addEventListener('click', deleteSwatch());

colorone.addEventListener('input', setbgColor);
colortwo.addEventListener('input', setbgColor);

// Pick and Set the BG Gradient
function setbgColor () {
    bodybg.style.background = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    showdata.style.display = "none";
    showCBtn.style.display = "block";
}
// Copy gradient, Create new elements for swatch and add to swatch
function createSwatch () {
    showdata.textContent = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    let gradient = showdata.textContent;
    let range = document.createRange();
    range.selectNode(document.getElementById("showvalue"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    swal(`${gradient}`);
    let newDiv = document.createElement('div');
    newDiv.classList.add("col-md-3");
    newDiv.setAttribute("id", "bg-gradient");
    let newSwatch = document.querySelector('.row');
    newSwatch.appendChild(newDiv);
    let swatch = document.getElementById("bg-gradient");
    swatch.style.backgroundImage = gradient;
    console.log(gradient);
}
function deleteSwatch() {
    console.log("Delete Works");
}



