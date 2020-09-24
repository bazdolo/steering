var font
var vehicles = []

function preload() {
    font = loadFont('AvenirNextLTPro-Regular.otf')
}

function setup() {
    createCanvas(1200, 300)
    background(51)
    // textFont(font)
    // textSize(192)
    // // fill(255)
    // // noStroke()
    // // text('Source', 100, 200)

    var points = font.textToPoints('Zsofia', 100, 200, 192, )
    console.log(points)

    for (let i = 0; i < points.length; i++) {
        var pt = points[i]
        var vehicle = new Vehicle(pt.x, pt.y)
        vehicles.push(vehicle)
    }
}

function draw() {
    background(51)
    for (let i = 0; i < vehicles.length; i++) {
        v = vehicles[i]
        v.behaviors()
        v.update()
        v.show()
    }
}