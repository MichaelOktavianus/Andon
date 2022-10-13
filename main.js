const avgText = document.querySelector("#avg")
const totalText = document.querySelector("#total")
const durText = document.querySelector("#dur")

let ran
let tota = 0
let firstDur 
setInterval(graph, 5000);
setInterval(chart1, 5000);



var xValues = [];
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
      xAxes: [{ticks: {min: 1, max:10}}],
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
  let today = new Date()
  let ti = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  xValues.push(ti)

  if (firstDur == undefined) {
    firstDur = ti
  }
  durText.textContent = `${firstDur}  ~  ${ti}`
  if (xValues.length == 11) {
    xValues.shift()
}
    ran = Math.ceil(Math.random() * 50)
    tota = tota + ran
    totalText.textContent = tota
  
    yValues.push(ran)
    if (yValues.length == 11) {
        yValues.shift()
    }
  }