function visualize_q() {
    for (let x = 1; x < environ.width; x++) {
        for (let y = 1; y < environ.height; y++) {
            let cell_props = get_cell_props(x,y)
            if(cell_props.empty){
                visualize_cell(x,y)
            }
        }
    }
}

function visualize_cell(x,y){
    let cell_state = get_state(x,y)
    let best_action = choose_best_action(cell_state)
    $('#' + get_cell_id(x, y)).html(environ.icons.arrow)
    $('#' + get_cell_id(x,y) + ' svg').attr('class', "env-vis env-vis-action-"+best_action.action)
}