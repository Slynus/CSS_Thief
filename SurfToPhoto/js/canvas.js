const dots = [];

const maxFrames = 2;
const needToStopAtMaxFrames = true;
let requestId;
let canvas = document.getElementById('main-canvas');
const aboutHeigth = document.getElementById('about-p').clientHeight;

// canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
// Set the values from CSS setting. TO DO update this when using requestAnimationFrame for dynamic resizing
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
let ctx = canvas.getContext('2d');

window.canvas = canvas;
window.ctx = ctx;

function start() {
    if (!requestId) {
        requestId = window.requestAnimationFrame(refresh);
        if (needToStopAtMaxFrames && (requestId > maxFrames)) {
            stop();
        }
    }
}

function stop() {
    if (requestId) {
        window.cancelAnimationFrame(requestId);
        requestId = undefined;
    }
}

function refresh() {
    requestId = undefined;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    console.log(`${canvas.width} x ${canvas.height}`);


    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(0, 0, 64, 64);


    // drawBezier();
    drawTest();
    drawBezierAnim();
    start();
}

function drawTest() {
    console.log(aboutHeigth);
    ctx.lineWidth = aboutHeigth / 8;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const startX = 100;
    const startY = 100

    ctx.beginPath();
    ctx.lineTo(startX + 130, startY + 200);
    ctx.lineTo(startX + 160, startY + 200);
    ctx.lineTo(startX + 190, startY + 250);
    ctx.stroke();


}



function drawBezier() {

    // Define the points as {x, y}
    let start = { x: 40, y: 20 };
    let cp1 = { x: -130, y: 100 };
    let cp2 = { x: 320, y: 90 };
    let end = { x: 30, y: 0 };

    let shiftX = 200;
    let shiftY = 200;

    let sizeMult = 2;

    start = { x: (start.x * sizeMult) + shiftX, y: (start.y * sizeMult) + shiftY };
    cp1 = { x: (cp1.x * sizeMult) + shiftX, y: (cp1.y * sizeMult) + shiftY };
    cp2 = { x: (cp2.x * sizeMult) + shiftX, y: (cp2.y * sizeMult) + shiftY };
    end = { x: (end.x * sizeMult) + shiftX, y: (end.y * sizeMult) + shiftY };

    // Cubic Bézier curve
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
    ctx.stroke();

    // Start and end points
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(shiftX, shiftY, 5, 0, 2 * Math.PI); // Start point
    ctx.fill();

    // Start and end points
    ctx.fillStyle = 'cyan';
    ctx.beginPath();
    ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI); // Start point
    ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI); // End point
    ctx.fill();

    // Control points
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // Control point one
    ctx.fill();

    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); // Control point two
    ctx.fill();
}

function drawBezierAnim() {
    // Define the points as {x, y}
    let start = { x: 40, y: 20 };
    let cp1 = { x: -130, y: 100 };
    let cp2 = { x: 320, y: 90 };
    let end = { x: 30, y: 0 };

    let shiftX = 200;
    let shiftY = 200;

    let sizeMult = 2;

    start = { x: (start.x * sizeMult) + shiftX, y: (start.y * sizeMult) + shiftY };
    cp1 = { x: (cp1.x * sizeMult) + shiftX, y: (cp1.y * sizeMult) + shiftY };
    cp2 = { x: (cp2.x * sizeMult) + shiftX, y: (cp2.y * sizeMult) + shiftY };
    end = { x: (end.x * sizeMult) + shiftX, y: (end.y * sizeMult) + shiftY };

    ctx.beginPath();
    // ctx.translate(0.5, 0.5);
    ctx.moveTo(start.x, start.y);

    for (let index = 0; index < 1; index += 0.00001) {

        let oT = 1 - index;
        let compX = (Math.pow(oT, 3) * start.x) + (3 * Math.pow(oT, 2) * index * cp1.x) + (3 * oT * Math.pow(index, 2) * cp2.x) + (Math.pow(index, 3) * end.x);
        let compY = (Math.pow(oT, 3) * start.y) + (3 * Math.pow(oT, 2) * index * cp1.y) + (3 * oT * Math.pow(index, 2) * cp2.y) + (Math.pow(index, 3) * end.y);

        ctx.lineTo(compX, compY);


        drawPoint(compX, compY);
    }

    ctx.stroke();

    function drawPoint(x, y) {
        // Start and end points
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI); // Start point
        ctx.fill();
    }

}

export { start, stop };