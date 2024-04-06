function createCube(width) {
    const cube = document.createElement('div');
    cube.classList.add('cube');
    cube.style.minWidth = `${width}%`;
    cube.addEventListener('mouseover', (e) => e.target.classList.add('hover'));
    return cube;
}

function addCubes(cubesPerLine, container) {
    const cubeBaseWidth = Math.floor(100/cubesPerLine);
    for (let i=0; i<cubesPerLine**2; i++) {
        container.appendChild(createCube(cubeBaseWidth));
    }
}

const container = document.querySelector('.container');
var cubesPerLine = 16;
addCubes(cubesPerLine, container);

const buttonRequestInput = document.querySelector('.requestInput');
buttonRequestInput.addEventListener('click', () => {
    cubesPerLine = prompt('How many cubes per line?', '16');
    cubesPerLine = cubesPerLine>100 ? 100 : cubesPerLine;
    container.innerHTML = '';
    addCubes(cubesPerLine, container);
});