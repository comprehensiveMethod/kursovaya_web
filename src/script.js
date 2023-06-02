function createDiagram() {
    // Get the number of parts from the input field
    const numParts = parseInt(document.getElementById('numParts').value);

    // Get the data for each part
    const data = [];
    const labels = [];
    for (let i = 0; i < numParts; i++) {
        const partName = prompt(`Введите название части №${i + 1}:`);
        let value = parseFloat(prompt(`Введите значение для части №${i + 1}:`));

        // Validate the input value
        while (isNaN(value)) {
            value = parseFloat(prompt(`Неверное значение для части №${i + 1}. Введите цифровое значение:`));
        }

        labels.push(partName);
        data.push(value);
    }

    // Generate random background colors for the diagram parts
    const backgroundColors = [];
    for (let i = 0; i < numParts; i++) {
        backgroundColors.push(getRandomColor());
    }

    // Create the chart
    const ctx = document.getElementById('diagramCanvas').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColors
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
