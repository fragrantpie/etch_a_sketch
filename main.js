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

function clearGrid() {
    let grid_container = document.getElementsByClassName("grid-container")[0]

    while (grid_container.hasChildNodes()) {
        grid_container.removeChild(grid_container.firstChild);
    }
}

function validateGridSize() {

    let size = document.getElementById("size_input").value;
    size = parseInt(size);
    if (!size || size < 16 || size > 64) {
        alert("Please provide a valid grid size.");
    }
    else {
        clearGrid();
        createGrid(size);
    }
}

function addListenerToCell() {
    let grid_items = document.getElementsByClassName("grid-item");
    for (var i = grid_items.length - 1; i >= 0; i-- ) {
        let grid_item = grid_items[i];
        grid_item.addEventListener("mouseover", () => {
            console.log("hover over cell!");
            grid_item.style.backgroundColor = "rgba(51, 51, 51, 0.5)";
        });
    }
}

function initializeGrid() {
    validateGridSize();
    addListenerToCell();
}

// Listener for grid size button.
document.getElementById("size_button").addEventListener("click", () => {
    initializeGrid();
});

// Listener for reset button.
document.getElementById("reset_grid").addEventListener("click", () => {
    initializeGrid();
});

// Start Grid when page is refreshed or first loaded.
createGrid(16);
addListenerToCell();


