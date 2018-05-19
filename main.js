console.log("Welcome to ETCH-a-Sketch!")

function createGrid(size) {
    let grid_container = document.getElementsByClassName("grid-container")[0];
    grid_container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    
    for (var i = size*size; i > 0; i--) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        
        grid_container.appendChild(cell);
    }
}

createGrid(16);
