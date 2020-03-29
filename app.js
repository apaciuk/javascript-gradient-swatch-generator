// Global variables, listeners & buttons
const colorone = document.getElementById('colorone');
const colortwo = document.getElementById('colortwo');
const gradient = document.getElementById('bodybg');
const newDiv = document.createElement('div');

// Button to create swatch
const showdata = document.getElementById('showvalue');
const createBtn = document.getElementById('createBtn');
const editBtn = document.createElement("button");
const delBtn = document.createElement("button");

// Button to edit swatch
editBtn.classList.add('btn', 'btn-warning');
editBtn.innerHtml = 'Edit';
//editBtn.addEventListener('click', editSwatch());
// Button to delete swatch
delBtn.classList.add('btn', 'btn-danger');
delBtn.innerHtml = 'Delete';
//delBtn.addEventListener('click', deleteSwatch());
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
        swal(`Cool, its called: ${data}`)
        // your input data object will be usable from here
        //console.log(data);
        return value;
    });
}
//  Copy gradient, Create new elements for swatch and add to swatch
function createSwatch () {
    showdata.textContent = `linear-gradient(to right, ${colorone.value}, ${colortwo.value})`;
    // Set the actual css style value/statement for the gradient
    let gradient = showdata.textContent;
    // Get just the hex values to display/user copy
    let hexValues = `${colorone.value} - ${colortwo.value}`;
    // Select the inputed value/statement to copy
    let range = document.createRange();
    range.selectNode(document.getElementById("showvalue"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    // Copy the css statement
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    //console.log(data);
    //let swatchValue = swal.value;
    //console.log(swatchValue);
    // Create the swatch elements, starting with the class and id
    newDiv.classList.add("col-md-3");
    newDiv.setAttribute("id", "bg-gradient");
    // Add the user input to give swatch a title, with the hex values, and edit/delete buttons
    newDiv.innerHTML = `<h5><input type='text' onclick='add_text()' value='Set Title' /></h5><br />${hexValues}`;
    // Conditional statement to check if swatch exists before insertion
    let newSwatch = document.querySelector('.row');
    // FIX THIS BIT
    newSwatch.appendChild(newDiv);
    let swatch = document.getElementById("bg-gradient");
    swatch.style.backgroundImage = gradient;
    //console.log(gradient);
}
/*function deleteSwatch(elementId) {
    const element = document.getElementById('bg-gradient');
    element.parentNode.removeChild(this.element);
}
function editSwatch() {
    console.log('Edit Works');
}*/



