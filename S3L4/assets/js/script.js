
function generaCelle(i) {
    let cell = document.createElement('div');
    cell.className = "cellaTomb";
    tombola.appendChild(cell);
    cell.innerText = i;
}

function generateNumber() {
    let n = Math.floor(Math.random() * 76) + 1;
    let cell = document.getElementsByClassName("cellaTomb")[n-1];
    cell.classList.add("selected");
    console.log(n);
    
}

let tombola = document.getElementById("tombola");
for (let i=1; i<=76; i++) {
    generaCelle(i);
}

