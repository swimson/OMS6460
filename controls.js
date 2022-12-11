let controlState = {
    running: true
}

function init_controls(){
    if (agent.timer === null) {
        agent.timer = setInterval(q_learning_policy, agent.timer_interval)
    }
    let currentSpeed = localStorage.getItem('agent_speed')
    agent.timer_interval = agent.timer_interval_options[currentSpeed]
    let visualize_q_val = localStorage.getItem('visualize_q')
    if(visualize_q_val === 'true'){
        agent.visualize_q=true
    }
    if(agent.visualize_q){
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

function stop_running(){
    controlState.running = false
    clearInterval(agent.timer)
    agent.timer = null
    render_controls()
}

$('#control_stop').click(function () {
    stop_running()
})

$('#control_start').click(function () {
    controlState.running = true
    render_controls()
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

$('#control_visualization').click(function(){
    if($('#control_visualization').prop('checked')){
        agent.visualize_q = true
    } else {
        agent.visualize_q = false
    }
    render_controls()
    setTimeout(() => {
        location.reload()
    }, 200)
})

$('#see_robot_perspective').click(function(){
    stop_running()
    $('#environ-container').hide()
    $('#agent_perspective').show()
    $('.hist_seg').remove()
    init_agent_perspective()
})