const avgText = document.querySelector("#avg")

let ran
setInterval(graph, 2000);
setInterval(chart1, 2000);



var xValues = ["","","","","","","","","","","",""];
var yValues = [];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {

      yAxes: [{ticks: {min: 0, max:50}}],
      
    }
  }
});

function chart1() {
  if (yValues.length > 0) {
    avgText.textContent = (yValues.reduce((a, b) => a + b, 0) / yValues.length).toFixed(2)
}
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {

      yAxes: [{ticks: {min: 0, max:50}}],
      
    }
  }
});
}

function graph() {
  
    ran = Math.ceil(Math.random() * 50)
  
    yValues.push(ran)
    if (yValues.length == 13) {
        yValues.shift()
    }
  }