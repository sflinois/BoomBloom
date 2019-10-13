function renderChart(datasets, labels, name) {
    var ctx = document.getElementById(name).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets
        },
    });
}

renderChart([], [], "chart");
