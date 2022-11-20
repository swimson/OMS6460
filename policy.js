function random_motion_policy() {
    let action = agent.actions[Math.floor(Math.random() * agent.actions.length)];
    execute_action(action)
}

function q_learning_policy(){
    let prev_state = get_state(agent.pos.x, agent.pos.y)
    let best_action = choose_best_action(prev_state)['action']
    let reward = execute_action(best_action)
    let cur_state = get_state(agent.pos.x, agent.pos.y)
    let alpha = .1
    let gamma = .6
    let epsilon = .1

    let prev_q = Q[prev_state][best_action]
    let next_max = choose_best_action(cur_state)['q']
    Q[prev_state][best_action] = (1 - alpha) * prev_q + alpha * (reward + gamma * next_max)
}

function choose_best_action(state){
    let qmax = -10000000
    let qmax_action = null
    for(let i=0; i<= agent.actions.length; i++){
        let action = agent.actions[i]
        if(Q[state][action] > qmax){
            qmax = Q[state][action]
            qmax_action = action
        }
    }
    return {'action': qmax_action, 'q': qmax}
}

function save_policy_state(){
    // save Q table
    console.log('SAVING Q table...')
    Q_json = JSON.stringify(Q)
    window.localStorage.setItem('q_learning', Q_json)
}

//timer = setInterval(q_learning_policy, 10)

// q_learning_policy()