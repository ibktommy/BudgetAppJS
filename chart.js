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

drawCircle('red', 0.25, false)
drawCircle('yellowgreen', 0.25, true)