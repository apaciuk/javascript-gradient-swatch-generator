 // Conditional statement to check if swatch exists before insertion
 if(!swatch.hasOwnProperty(column)) {
    console.log("Ready To Go!");
    let grad = document.getElementById("bg-gradient");
    grad.style.backgroundImage = gradient;
    addTitle();
} else {
    console.log("No Good");
}