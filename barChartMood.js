/* Bar Chart for Mood Tracker*/

let barChart = document.getElementById('barChart').getContext('2d');
let moodData = document.getElementById('amount').value;
let stressData = document.getElementById('amount2').value;

console.log(stressData);

let chartData = new Chart(barChart, {
    type: 'bar',
    data:{
        labels: ['Imbalance', 'Stress', 'Depression' , 'Elevated', 'Anxiety', 'Irritability'],
        datasets: [{
            label: 'Mood level',
            data:[
                5,
                5,
                4,
                3,
                2,
                3
            ],
            backgroundColor: ['#b17a79','#bce4cc','#679886','#8a7e43','#a2b8ad', '#8b3d3d']
        }]
    },
    options:{}
});
