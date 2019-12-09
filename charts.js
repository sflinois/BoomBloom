function renderChart(datasets, labels, name) {
    var ctx = document.getElementById(name).getContext('2d');
    if (myChart) myChart.clear();
    var myChart = new Chart(ctx, {
        type: name === 'chart-thematique' ? 'bar' : 'line',
        data: {
            labels,
            datasets
        },
    });
}

renderChart([], [], "chart-spectre");
renderChart([], [], "chart-physique");
renderChart([], [], "chart-thematique");
