let requestId;
let canvas = document.getElementById('about-canvas');

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
        console.log(requestId);
        if (requestId > 500) {
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

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, 64, 64);
    start();
}


export { start, stop };