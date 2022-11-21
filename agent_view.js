agent_view_state = {
    execute_count: 0
}


function render_agent_view() {
    let el = document.getElementById('agent_pos')
    el.innerHTML = '(' + agent.pos.x + ',' + agent.pos.y + ')'
    let state = get_state(agent.pos.x, agent.pos.y)
    let q_state = Q[state]
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
            el_action_btn.prop("disabled", true)
        } else {
            el_action_btn.prop("disabled", false)
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
    let prev_state = get_state(agent.pos.x, agent.pos.y)
    let reward = execute_action(action)
    let cur_state = get_state(agent.pos.x, agent.pos.y)
    let q_resp = update_q_table(prev_state, cur_state, action, reward)
    let prev_q = Math.round(q_resp['prev_q']*1000)/1000
    let updated_q = Math.round(q_resp['updated_q']*1000)/1000
    render_agent_view()
    let el_history = $('#agent_view_history')
    let hist_action = ''
    switch (action) {
        case 'N':
            hist_action = 'Move Up'
            break
        case 'E':
            hist_action = 'Move Left'
            break
        case 'W':
            hist_action = 'Move Right'
            break
        case 'S':
            hist_action = 'Move Down'
            break

    }
    let hist_line = 'POSITION: (' + prev_x + ',' + prev_y + ') ACTION: ' + hist_action + '\nREWARD:' + reward + '\nQuality updated from '+prev_q+' --> '+updated_q+'\n'
    el_history.val(hist_line + '\n' + el_history.val())
    $('#agent_view_reward').html(reward)
    if(reward === environ.rewards.flag){
        $('#reward_explanation').html('Reached the goal!')
        agent.actions.forEach((item)=> {
            $('#agent_action_'+item).prop('disabled',true)
            $('#q_action_'+item).removeClass('best_action').addClass('not_best_action')
        })
        $('#agent_view_visualize').css('display','inherit')

    } else if(reward === environ.rewards.brick){
        $('#reward_explanation').html('...hit a wall...')
    } else {
        $('#reward_explanation').html('')
    }
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