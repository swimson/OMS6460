let controlState = {
    running: true
}

function init_controls() {
    if (agent.timer === null) {
        agent.timer = setInterval(q_learning_policy, agent.timer_interval)
    }
    let currentSpeed = localStorage.getItem('agent_speed')
    if (currentSpeed !== null) {
        agent.timer_interval = agent.timer_interval_options[currentSpeed]
    }
    let visualize_q_val = localStorage.getItem('visualize_q')
    if (visualize_q_val === 'true') {
        agent.visualize_q = true
    }
    if (agent.visualize_q) {
        $('#control_visualization').prop('checked', true)
        visualize_q()
    }
    $('#control_epoch').val('Epoch = ' + get_epoch())
}

function render_controls() {
    if (controlState.running) {
        reset_timer()
        $('#control_start').prop('disabled', true)
        $('#control_stop').prop('disabled', false)
        if (get_current_speed_index() === 0) {
            $('#control_slower').prop('disabled', false)
            $('#control_faster').prop('disabled', true)
        } else if (get_current_speed_index() + 1 < agent.timer_interval_options.length) {
            $('#control_slower').prop('disabled', false)
            $('#control_faster').prop('disabled', false)
        } else {
            $('#control_slower').prop('disabled', true)
            $('#control_faster').prop('disabled', false)
        }
        localStorage.setItem('agent_speed', get_current_speed_index())
        localStorage.setItem('visualize_q', agent.visualize_q)
    } else {
        $('#control_start').prop('disabled', false)
        $('#control_stop').prop('disabled', true)
    }

    let epoch_index = get_current_epoch_index()
    if ((epoch_index) >= 9) {
        $('#control_jump_ahead').prop('disabled', true)
    } else {
        $('#control_jump_ahead').prop('disabled', false)
    }
    if ((epoch_index) <= 0) {
        $('#control_jump_back').prop('disabled', true)
    } else {
        $('#control_jump_back').prop('disabled', false)
    }
    $('#control_epoch').val('Epoch = ' + get_epoch())
}

function reset_timer() {
    if (agent.timer !== null) {
        clearInterval(agent.timer)
    }
    if (controlState.running) {
        agent.timer = setInterval(q_learning_policy, agent.timer_interval)
    }
}

function get_current_speed_index() {
    let currentSpeedIndex = agent.timer_interval_options.findIndex((item) => {
        return item >= agent.timer_interval
    })
    return currentSpeedIndex
}

function stop_running() {
    controlState.running = false
    clearInterval(agent.timer)
    agent.timer = null
    render_controls()
}

function start_running() {
    controlState.running = true
    render_controls()
}

$('#control_stop').click(function () {
    stop_running()
})

$('#control_start').click(function () {
    start_running()
})

$('#control_slower').click(function () {
    let currentSpeedIndex = agent.timer_interval_options.findIndex((item) => {
        return item >= agent.timer_interval
    })
    // at the end of the list
    if (currentSpeedIndex === agent.timer_interval_options.length) {
        return
    }
    agent.timer_interval = agent.timer_interval_options[currentSpeedIndex + 1]
    render_controls()
})

$('#control_faster').click(function () {
    let currentSpeedIndex = agent.timer_interval_options.findIndex((item) => {
        return item >= agent.timer_interval
    })
    // at the end of the list
    if (currentSpeedIndex === 0) {
        return
    }
    agent.timer_interval = agent.timer_interval_options[currentSpeedIndex - 1]
    render_controls()
})

$('#control_visualization').click(function () {
    if ($('#control_visualization').prop('checked')) {
        agent.visualize_q = true
    } else {
        agent.visualize_q = false
    }
    render_controls()
    setTimeout(() => {
        location.reload()
    }, 200)
})

function get_current_epoch_index() {
    let current_epoch = get_epoch()
    if (current_epoch < 4) {
        return 0
    } else if (current_epoch < 100) {
        return 1
    } else if (current_epoch < 500) {
        return 2
    } else if (current_epoch < 1000) {
        return 3
    } else if (current_epoch < 2000) {
        return 4
    } else if (current_epoch < 5000) {
        return 5
    } else if (current_epoch < 8000) {
        return 6
    } else if (current_epoch < 12000) {
        return 7
    } else if (current_epoch < 15000) {
        return 8
    } else {
        return 9
    }
}

$('#control_jump_ahead').click(function () {
    let current_epoch_index = get_current_epoch_index()
    if (current_epoch_index >= 9) {
        return
    }
    let new_epoch = environEpochs[current_epoch_index + 1]
    let new_q = environEpochData[new_epoch]
    window.localStorage.setItem('q_learning', JSON.stringify(new_q))
    window.localStorage.setItem('q_learning_epoch', new_epoch)
    Q = new_q
    setTimeout(() => {
        location.reload()
    }, 200)
})

$('#control_jump_back').click(function () {
    let current_epoch_index = get_current_epoch_index()
    if (current_epoch_index <= 0) {
        return
    }
    let new_epoch = environEpochs[current_epoch_index - 1]
    let new_q = environEpochData[new_epoch]
    window.localStorage.setItem('q_learning', JSON.stringify(new_q))
    window.localStorage.setItem('q_learning_epoch', new_epoch)
    Q = new_q
    setTimeout(() => {
        location.reload()
    }, 200)
})