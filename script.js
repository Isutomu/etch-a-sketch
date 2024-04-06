function createCube(width) {
    const cube = document.createElement('div');
    cube.classList.add('cube');
    cube.style.minWidth = `${width}%`;
    cube.style.backgroundColor = 'white';
    cube.style.opacity = 1;
    cube.addEventListener('mouseover', (e) => {
        if (e.target.style.backgroundColor!=='white') {
            e.target.style.opacity = String(Number(e.target.style.opacity) - 0.1);
        }
        else {
            e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        }
    });
    return cube;
}

function addCubes(cubesPerLine, container) {
    const cubeBaseWidth = Math.floor(100/cubesPerLine);
    for (let i=0; i<cubesPerLine**2; i++) {
        container.appendChild(createCube(cubeBaseWidth));
    }
}

const container = document.querySelector('.container');
let cubesPerLine = 16;
addCubes(cubesPerLine, container);

const buttonRequestInput = document.querySelector('.requestInput');
buttonRequestInput.addEventListener('click', () => {
    cubesPerLine = prompt('How many cubes per line?', '16');
    cubesPerLine = cubesPerLine>100 ? 100 : cubesPerLine;
    container.innerHTML = '';
    addCubes(cubesPerLine, container);
});