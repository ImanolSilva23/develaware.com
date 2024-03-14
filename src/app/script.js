document.addEventListener('DOMContentLoaded', () => {
    const doubleClickButton = document.getElementById('doubleClickButton');
    const hoverButton = document.getElementById('hoverButton');
    const clickButton = document.getElementById('clickButton');
    const colorInput = document.getElementById('colorInput');
    const inputLabel = document.getElementById('inputLabel');

    doubleClickButton.addEventListener('dblclick', () => {
        alert('Double Clicked!');
    });

    hoverButton.addEventListener('mouseenter', () => {
        alert('Mouse Enter!');
    });

    clickButton.addEventListener('click', () => {
        alert('Clicked!');
    });

    colorInput.addEventListener('keydown', () => {
        // Cambia el color de fondo de inputLabel. Ajusta según necesites.
        inputLabel.style.backgroundColor = 'red'; // Ejemplo para demostración.
    });
});
