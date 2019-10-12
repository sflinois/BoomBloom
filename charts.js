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
        // data: {
        //     labels: labels,
        //     datasets: [{
        //         label: '# of Votes',
        //         data: data,
        //     }]
        // },
    });
}

data1 = {
    ndvi: [0.5, 0.4, 0.2, 0.6, 0.9, 0.6, 0.2, 0.4, 0.3, 0.1, 0.2, 0.4],
    infra : [0.4, 0.6, 0.5, 0.2, 0.3, 0.5, 0.7, 0.2, 0.3, 0.6, 0.5, 0.5]
};
data2 = {
    ndvi: [0.5, 0.4, 0.2, 0.6, 0.9, 0.6, 0.2, 0.4, 0.3, 0.1, 0.2, 0.4],
    infra : [0.4, 0.6, 0.5, 0.2, 0.3, 0.5, 0.7, 0.2, 0.3, 0.6, 0.5, 0.5]
};
labels =  ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
renderChart(data1, labels, "chart1");
renderChart(data2, labels, "chart2");

