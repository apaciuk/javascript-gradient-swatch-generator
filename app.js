// Global variables, listeners & buttons
const colorone = document.getElementById('colorone');
const colortwo = document.getElementById('colortwo');
const gradient = document.getElementById('bodybg');
const showdata = document.getElementById('showvalue');
// Swatch elements, a col-md-3 and two divs
let newSwatch = document.createElement('div');
let gradDiv = document.createElement('div');
let textDiv = document.createElement('div');
 // Create the swatch elements.
 newSwatch.classList.add("col-md-3");
 // Add the gradient div
 newSwatch.appendChild(gradDiv);
 // Set the id to dradient div
 gradDiv.setAttribute("id", "bg-gradient");
 // Add the info text div
 newSwatch.appendChild(textDiv);
 // Set the id to info div
 textDiv.setAttribute("id", "info");
// Buttons to create, edit and delete swatch
const createBtn = document.getElementById('createBtn');
const editBtn = document.createElement("button");
const delBtn = document.createElement("button");
// Button to edit swatch
editBtn.classList.add('btn', 'btn-warning', 'btn-sm');
editBtn.innerHtml = 'Edit';
editBtn.addEventListener('click', editSwatch());
// Button to delete swatch
delBtn.classList.add('btn', 'btn-danger', 'btn-sm');
delBtn.innerHtml = 'Del';
delBtn.addEventListener('click', deleteSwatch());
//Listens & Sets the BG Gradient from inputs in setbgColor function
colorone.addEventListener('input', setbgColor);
colortwo.addEventListener('input', setbgColor);
// Pick and Set the BG Gradient to main div
function setbgColor () {
    bodybg.style.background = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    showdata.style.display = "none";
    createBtn.style.display = "block";
}
// Add Title to the swatch
function addTitle() {
    swal({
        title: "Give Your Swatch A Name!",
        content: "input",
        buttons: {
            cancel: true,
            confirm: true,
        },
        preConfirm: function() {
            return new Promise((resolve, reject) => {
                // get input val
                resolve({
                    Title: $('input').val()
                });
            });
        }
    }).then((data) => {
        swal(`Great, This One's Called: ${data}`)
        // your input data object will be usable from here
        let title = data;
        console.log(title);
    });
}
//  Copy gradient, Create new elements for swatch and add to swatch
    function createSwatch () {
    showdata.textContent = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    // Set the actual css style value/statement for the gradient
    let gradient = showdata.textContent;
    // Get just the hex values to display/user copy
    let hexValues = `${colorone.value}, ${colortwo.value}`;
    // Select the inputed value/statement to copy
    let range = document.createRange();
    range.selectNode(document.getElementById("showvalue"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    // Copy the css statement
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    // Set the swatch title
    addTitle()
    swatch = document.querySelector('.row');
    swatch.appendChild(newSwatch);
    let grad = document.getElementById("bg-gradient");
    grad.style.backgroundImage = gradient;
    textDiv.innerHTML = `<h5>Title</h5><p>${hexValues}</p>`;

    // Conditional statement to check if swatch exists before insertion

    // FIX THIS BIT
}
function deleteSwatch(elementId) {
    console.log('Edit Works');
   // const element = document.getElementById('bg-gradient');
    //element.parentNode.removeChild(this.element);
}
function editSwatch() {
    console.log('Edit Works');
}



