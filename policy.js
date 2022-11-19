function random_motion_policy() {
    let items = ['N', 'S', 'E', 'W']
    let dir = items[Math.floor(Math.random() * items.length)];
    move_agent(dir)
}

timer = setInterval(random_motion_policy, 50)