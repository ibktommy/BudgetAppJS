const chart = document.querySelector('.chart')
const canvas = document.createElement('canvas')

// Set Canvas Dimension
canvas.height = 120
canvas.width = 120

chart.appendChild(canvas)

// Initializing a 2D context
const context2D = canvas.getContext('2d')
context2D.lineWidth = 10
const radius = 50

// Function to Draw a Circle
function drawCircle(color, ratio, anticlockwise) {
  context2D.strokeStyle = color
  context2D.beginPath()
  context2D.arc(60, 60, radius, 0, ratio * Math.PI * 2, anticlockwise)
  context2D.stroke()
}

// Function to Update Circle Based on Input Values
function updateChart(income, outcome) {
  context2D.clearRect(0, 0, canvas.width, canvas.height)
  let ratio = income / (income + outcome)

  drawCircle('yellowgreen', -ratio, true)
  drawCircle('red', 1 - ratio, false)
}