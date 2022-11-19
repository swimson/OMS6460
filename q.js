let Q = {}

function get_state(x, y) {
    return x + (y - 1) * environ.width
}

function init_q() {
    for (y = 1; y <= environ.height; y++) {
        for (let x = 1; x <= environ.width; x++) {
            Q[get_state(x, y)] = Math.random()
        }
    }
}

init_q()