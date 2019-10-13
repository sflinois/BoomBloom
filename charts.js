function renderChart(data, labels, name) {
    var ctx = document.getElementById(name).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Indice NDVI',
                data: data.ndvi,
                backgroundColor: 'rgba(50, 205, 50, 0.2)',
                borderWidth: 1
            },
            {
                label: 'Indice Infra',
                data: data.infra,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1
            },]
        },
    });
}

renderChart([], [], "chart");
