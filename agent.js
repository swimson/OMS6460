let agent = {
    random_action: true,
    random_action_pct: .5,
    random_action_cutoff: 5000,
    render: true,
    render_hist: true,
    refresh_find_goal: true,
    actions: ['N', 'S', 'E', 'W'],
    pos: {
        x: 28,
        y: 11,
    },
    action: 'S',
    hist: [],
    icon: '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="45.342px" height="45.342px" viewBox="0 0 45.342 45.342" style="enable-background:new 0 0 45.342 45.342;"xml:space="preserve"> <g> <path d="M40.462,19.193H39.13v-1.872c0-3.021-2.476-5.458-5.496-5.458h-8.975v-4.49c1.18-0.683,1.973-1.959,1.973-3.423c0-2.182-1.771-3.95-3.951-3.95c-2.183,0-3.963,1.769-3.963,3.95c0,1.464,0.785,2.74,1.965,3.423v4.49h-8.961c-3.021,0-5.448,2.437-5.448,5.458v1.872H4.893c-1.701,0-3.091,1.407-3.091,3.108v6.653c0,1.7,1.39,3.095,3.091,3.095h1.381v1.887c0,3.021,2.427,5.442,5.448,5.442h2.564v2.884c0,1.701,1.393,3.08,3.094,3.08h10.596c1.701,0,3.08-1.379,3.08-3.08v-2.883h2.578c3.021,0,5.496-2.422,5.496-5.443V32.05h1.332c1.701,0,3.078-1.394,3.078-3.095v-6.653C43.54,20.601,42.165,19.193,40.462,19.193zM10.681,21.271c0-1.999,1.621-3.618,3.619-3.618c1.998,0,3.617,1.619,3.617,3.618c0,1.999-1.619,3.618-3.617,3.618C12.302,24.889,10.681,23.27,10.681,21.271z M27.606,34.473H17.75c-1.633,0-2.957-1.316-2.957-2.951c0-1.633,1.324-2.949,2.957-2.949h9.857c1.633,0,2.957,1.316,2.957,2.949S29.239,34.473,27.606,34.473z M31.056,24.889c-1.998,0-3.618-1.619-3.618-3.618c0-1.999,1.62-3.618,3.618-3.618c1.999,0,3.619,1.619,3.619,3.618C34.675,23.27,33.055,24.889,31.056,24.889z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> \</g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
    cum_reward: 0,
    timer: null,
    timer_interval: 200,
    timer_interval_options: [20, 50, 100, 200, 500, 1000],
    save_q: true,
    save_q_epochs: false,
    visualize_q: false
}

function init_agent() {
    let itter = 0
    let found_empty = false
    let random_x = 28
    let random_y = 10
    while (found_empty === false && itter < 1000) {
        random_x = Math.floor(Math.random() * environ.width) + 1;
        random_y = Math.floor(Math.random() * environ.height) + 1;

        let props = get_cell_props(random_x, random_y)
        if (props.empty) {
            found_empty = true
        }
        itter = itter + 1
    }
    agent.pos.x = random_x
    agent.pos.y = random_y
}

function render_agent() {
    if (agent.render === false) {
        return
    }
    $('#env-agent').remove()
    $('#' + get_cell_id(agent.pos.x, agent.pos.y)).html(agent.icon)
    $('#' + get_cell_id(agent.pos.x, agent.pos.y) + ' svg').attr('id', "env-agent")
}

function append_history(x, y, action, reward) {
    let hist_item = {x: x, y: y, action: action, reward}
    agent.hist.push(hist_item)
    if (agent.hist.length % 100 === 0) {
        save_policy_state()
    }
}

function render_history() {
    if (agent.render_hist === false) {
        return
    }
    $('.hist_seg_final').remove()
    if (agent.hist.length > 1) {
        print_hist_line(agent.hist[agent.hist.length - 2], false)
    }

    print_hist_line(agent.hist[agent.hist.length - 1], true)
}

function print_hist_line(item, final) {
    let el = document.getElementById(get_cell_id(item.x, item.y))
    let el_bb = el.getBoundingClientRect()

    let length = environ.cell_size
    if (final) {
        length = environ.cell_size / 2
    }

    let x = 0, y = 0, angle = 0
    let x_center = (el_bb.left + el_bb.right) / 2
    let y_center = (el_bb.top + el_bb.bottom) / 2

    if (item.action === 'S') {
        x = x_center - (length / 2)
        y = y_center + (length / 2)/**/
        angle = 90
    } else if (item.action === 'W') {
        x = x_center - (length)
        y = y_center
        angle = 0
    } else if (item.action === 'E') {
        x = x_center
        y = y_center
        angle = 0
    } else if (item.action === 'N') {
        x = x_center - (length / 2)
        y = y_center - (length / 2)
        angle = 90
    }

    var line = document.createElement("div");
    var styles = 'border: 1px solid #bb1111;; '
        + 'width: ' + length + 'px; '
        + 'height: 0px; '
        + '-moz-transform: rotate(' + angle + 'deg); '
        + '-webkit-transform: rotate(' + angle + 'deg); '
        + '-o-transform: rotate(' + angle + 'deg); '
        + '-ms-transform: rotate(' + angle + 'deg); '
        + 'position: absolute; '
        + 'top: ' + y + 'px; '
        + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    line.classList.add('hist_seg')
    if (final) {
        line.classList.add('hist_seg_final')
    }
    document.body.appendChild(line);
}

function execute_action(action) {
    // save for history
    let hist_x = agent.pos.x
    let hist_y = agent.pos.y

    // start moving agent
    agent.action = action
    let new_x = agent.pos.x
    let new_y = agent.pos.y
    switch (action) {
        case 'N':
            new_y = agent.pos.y + 1
            break
        case 'S':
            new_y = agent.pos.y - 1
            break
        case 'E':
            new_x = agent.pos.x + 1
            break
        case 'W':
            new_x = agent.pos.x - 1
            break
    }

    // check if can move to the new cell
    let props = get_cell_props(new_x, new_y)
    if (props.passable) {
        agent.pos.x = new_x
        agent.pos.y = new_y
    }
    if (props.goal) {
        execute_found_goal()
    }
    if (props.icon === 'brick') {
        update_environ(new_x, new_y, 'fire')
    }

    append_history(hist_x, hist_y, action, props.reward)
    agent.cum_reward = agent.cum_reward + props.reward
    $('#cum_reward').val(agent.cum_reward)
    render_history()
    render_agent()
    return props.reward
}

function execute_found_goal() {
    // clear timer
    if (typeof agent.timer !== null) {
        clearInterval(agent.timer)
    }
    // save policy state
    save_policy_state()

    if (agent.refresh_find_goal) {
        setTimeout(() => {
            location.reload()
        }, 200)
    }
}
