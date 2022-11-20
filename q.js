let Q = {}

function get_state(x, y) {
    return x + (y - 1) * environ.width
}

function init_q() {
    if(window.localStorage.getItem('q_learning') !== null){
        Q = JSON.parse(window.localStorage.getItem('q_learning'))
        return
    }
    for (y = 1; y <= environ.height; y++) {
        for (let x = 1; x <= environ.width; x++) {
            for (let i = 0; i < agent.actions.length; i++) {
                let action = agent.actions[i]
                let state = get_state(x,y)
                if(Q[state] === undefined){
                    Q[state] = {}
                }
                Q[get_state(x, y)][action] = Math.random()
            }
        }
    }
}

init_q()