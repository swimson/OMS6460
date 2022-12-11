function agent_think(phrase) {
    let words = phrase.split(' ')
    $('#agent_thoughts').html('')
    $('#agent_thoughts').html('...')
    words.forEach((item, index) => {
        setTimeout( () => {
            let prior = $('#agent_thoughts').html()
            console.log(prior)
            $('#agent_thoughts').html(prior + ' ' + item)
        }, 350 * (index+1))
    })
}

function init_agent_perspective() {
    agent_think('Where should I go?')
}