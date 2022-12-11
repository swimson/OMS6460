function random_motion_policy() {
    return agent.actions[Math.floor(Math.random() * agent.actions.length)];
}

function q_learning_policy() {
    let prev_state = get_state(agent.pos.x, agent.pos.y)
    let action = choose_best_action(prev_state)['action']
    if (agent.random_action === true) {
        let epoch = window.localStorage.getItem('q_learning_epoch')
        if (epoch == null) {
            epoch = 1
        }
        let r = (1 - epoch / agent.random_action_cutoff) * .5
        if (epoch <= agent.random_action_cutoff && Math.random() < r) {
            if (epoch % 20 === 0) {
                console.log(r)
            }
            action = random_motion_policy()
        }
    }

    let reward = execute_action(action)
    let cur_state = get_state(agent.pos.x, agent.pos.y)
    update_q_table(prev_state, cur_state, action, reward)
}

function update_q_table(prev_state, cur_state, action, reward) {
    let alpha = .1
    let gamma = .6
    let prev_q = Q[prev_state][action]
    let next_max = choose_best_action(cur_state)['q']
    Q[prev_state][action] = (1 - alpha) * prev_q + alpha * (reward + gamma * next_max)
    return {'prev_q': prev_q, 'updated_q': Q[prev_state][action]}
}

function choose_best_action(state) {
    let qmax = -10000000
    let qmax_action = null
    for (let i = 0; i <= agent.actions.length; i++) {
        let action = agent.actions[i]
        if (Q[state][action] > qmax) {
            qmax = Q[state][action]
            qmax_action = action
        }
    }
    return {'action': qmax_action, 'q': qmax}
}

function get_epoch(){
    let epoch = window.localStorage.getItem('q_learning_epoch')
    if (epoch == null) {
        epoch = 0
    }
    epoch = parseInt(epoch)
    return epoch
}

function save_policy_state() {
    let Q_json = JSON.stringify(Q)
    let epoch = get_epoch()
    epoch = parseInt(epoch) + 1
    $('#control_epoch').val('Epoch = ' + epoch)
    if (agent.save_q) {
        // save Q table
        console.log('SAVING Q table...')
        window.localStorage.setItem('q_learning', Q_json)
        window.localStorage.setItem('q_learning_epoch', epoch)

        if(agent.save_q_epochs === true){
            if (epoch < 5) {
                window.localStorage.setItem('q_learning_' + epoch, Q_json)
            }
            if (epoch < 1000 && epoch % 100 === 0) {
                window.localStorage.setItem('q_learning_' + epoch, Q_json)
            }
            if (epoch > 1000 && epoch % 1000 === 0) {
                window.localStorage.setItem('q_learning_' + epoch, Q_json)
            }
        }
    }
}