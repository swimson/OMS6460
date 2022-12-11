agent_view_state = {
    execute_count: 0
}


function render_agent_view() {
    let el = document.getElementById('agent_pos')
    el.innerHTML = '(' + agent.pos.x + ',' + agent.pos.y + ')'
    let state = get_state(agent.pos.x, agent.pos.y)
    let q_state = Q[state]
    $('#agent_epoch').html(get_epoch())
    $('#q_action_N').html(Math.round(q_state['N'] * 10000) / 10000)
    $('#q_action_E').html(Math.round(q_state['E'] * 10000) / 10000)
    $('#q_action_S').html(Math.round(q_state['S'] * 10000) / 10000)
    $('#q_action_W').html(Math.round(q_state['W'] * 10000) / 10000)
    let best_action = choose_best_action(state)['action']
    for (let i = 0; i < agent.actions.length; i++) {
        let el_q_score = $('#q_action_' + agent.actions[i])
        let el_action_btn = $('#agent_action_' + agent.actions[i])

        el_q_score.removeClass('best_action').removeClass('not_best_action')
        if (agent.actions[i] !== best_action) {
            el_q_score.addClass('not_best_action')
            el_action_btn.prop("disabled", true).removeClass('agent_action_chosen')
        } else {
            el_action_btn.prop("disabled", false).addClass('agent_action_chosen')
        }
    }
    $('#q_action_' + best_action).addClass('best_action')
    $('#agent_step').html(agent.hist.length+1)
}

$('#agent_action_S').click(function () {
    execute_agent_view('S')
})

$('#agent_action_N').click(function () {
    execute_agent_view('N')
})

$('#agent_action_W').click(function () {
    execute_agent_view('W')
})

$('#agent_action_E').click(function () {
    execute_agent_view('E')
})

function execute_agent_view(action) {
    agent_view_state.execute_count++
    let prev_x = agent.pos.x
    let prev_y = agent.pos.y
    let reward = execute_action(action)
    render_agent_view()
    let hist_action = ''
    switch (action) {
        case 'N':
            hist_action = '&#8593'
            break
        case 'E':
            hist_action = '&#8594'
            break
        case 'W':
            hist_action = '&#8592'
            break
        case 'S':
            hist_action = '&#8595'
            break

    }
    let hist_q = ''
    if(reward < 0){
        hist_q = 'Q value: decreased for ('+prev_x+','+prev_y+','+hist_action+')'
    } else {
        hist_q = 'Q value: increased for ('+prev_x+','+prev_y+','+hist_action+')'
    }
    let hist_line = 'Moving: '+ hist_action + '<br>Reward received: ' + reward+'<br>'+hist_q
    agent_think(hist_line)
}

$('body').keydown(function (event) {
    if (event.keyCode === 40) {
        execute_agent_view('S')
    } else if (event.keyCode === 37) {
        execute_agent_view('W')
    } else if (event.keyCode === 38) {
        execute_agent_view('N')
    } else if (event.keyCode === 39) {
        execute_agent_view('E')
    }
})

function agent_think(phrase) {
    let words = phrase.split(' ')
    $('#agent_thoughts').html('')
    words.forEach((item, index) => {
        setTimeout( () => {
            let prior = $('#agent_thoughts').html()
            console.log(prior)
            $('#agent_thoughts').html(prior + ' ' + item)
        }, 250 * (index+1))
    })
}

function init_agent_perspective() {
    render_agent_view()
    agent_think('...Where should I go?')
}

$('#see_robot_perspective').click(function(){
    stop_running()
    $('#environ-container').hide()
    $('#agent_perspective').show()
    $('.hist_seg').hide()
    init_agent_perspective()
})

$('#see_environ_perspective').click(function(){
    $('#environ-container').show()
    $('#agent_perspective').hide()
    $('.hist_seg').show()
    start_running()
})