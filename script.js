let ctx = document.getElementById("myChart");

let dados = {
    datasets: [{
        data: [45, 59, 61, 77, 82, 92],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)', 'rgb(0, 128, 0)', 'rgb(28,28,28)', 'rgb(128,128,128)']
    }],
    labels: ['Temperatura-Pontiac em °C', 'Temperatura-Mercedes-Benz em °C', 'Temperatura-Jeep em °C', 'Temperatura-Toyota em °C', 'Temperatura-Volkswagen em °C', 'Temperatura-Audi em °C']
};
let opcoes = {
    cutoutPercentage: 40
};
let meuDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: dados,
    options: opcoes
});
