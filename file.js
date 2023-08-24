const squareDiv = document.createElement('div');
const container = document.querySelector('.container')
squareDiv.classList.add('square');
squareDiv.style.background = 'black';
squareDiv.style.aspectRatio = '1 / 1';
squareDiv.style.flex = `1`;
let gridSize = 16;
let ratio = 1 / gridSize * 100;
squareDiv.style.flexBasis = `${ratio}%`;

createGrid()

function addColorToSquares()
{
    const squares = Array.from(document.querySelectorAll('.square'));

    squares.forEach(square => square.addEventListener('mouseover', (e) =>
    {
        e.target.style.background = drawRGBColor();
    }));
}

function createNewGrid()
{
    gridSize = parseInt(prompt("Choose new grid size between 1 and 100."));
    if (gridSize > 100 || gridSize < 1)
    {
        alert("Wrong size. Choose between 1 and 100.")
        createNewGrid();
    }
    refreshRatios();
    removeDivChilds(container);
    createGrid(gridSize);
}

function removeDivChilds(name)
{
    while (name.firstChild)
    {
        name.removeChild(name.firstChild);
    }
}

function createGrid()
{
    for (let i = 0; i < gridSize * gridSize; i++)
    {
        container.appendChild(squareDiv.cloneNode(true));
    }
    addColorToSquares();
}

function refreshRatios()
{
    ratio = 1 / gridSize * 100;
    squareDiv.style.flexBasis = `${ratio}%`;
}

function drawRGBColor()
{
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return "rgb(" + x + "," + y + "," + z + ")";
}