let environ = {
    render: true,
    height: 15,
    width: 30,
    cell_size: 30,
    objects: [
        // // batteries
        // {x: 7, y: 9,  icon: 'battery', passable: true, goal: false},
        // {x: 3, y: 3,  icon: 'battery', passable: true, goal: false},
        // {x: 8, y: 2,  icon: 'battery', passable: true, goal: false},
        // {x: 16, y: 3,  icon: 'battery', passable: true, goal: false},
        // {x: 20, y: 7,  icon: 'battery', passable: true, goal: false},

        // flags
        {x: 28, y: 13, icon: 'flag', passable: true, goal: true},


        // left wall
        {x: 1, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 2, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 3, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 4, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 6, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 8, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 9, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 12, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 13, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 14, icon: 'brick', passable: false, goal: false},
        {x: 1, y: 15, icon: 'brick', passable: false, goal: false},
        // bottom wall
        {x: 2, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 3, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 4, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 6, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 7, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 8, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 9, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 11, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 12, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 13, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 15, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 16, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 17, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 19, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 20, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 21, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 23, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 24, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 25, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 27, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 28, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 29, y: 1, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 1, icon: 'brick', passable: false, goal: false},
        // right wall
        {x: 30, y: 2, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 3, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 4, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 6, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 8, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 9, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 12, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 13, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 14, icon: 'brick', passable: false, goal: false},
        {x: 30, y: 15, icon: 'brick', passable: false, goal: false},
        // top wall
        {x: 2, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 3, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 4, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 6, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 7, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 8, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 9, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 11, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 12, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 13, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 15, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 16, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 17, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 19, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 20, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 21, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 23, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 24, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 25, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 27, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 28, y: 15, icon: 'brick', passable: false, goal: false},
        {x: 29, y: 15, icon: 'brick', passable: false, goal: false},
        // first left wall
        {x: 5, y: 2, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 3, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 4, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 8, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 9, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 5, y: 11, icon: 'brick', passable: false, goal: false},
        // first cross wall T
        {x: 6, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 7, y: 7, icon: 'brick', passable: false, goal: false},
        // second cross wall T
        {x: 6, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 6, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 7, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 8, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 9, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 11, icon: 'brick', passable: false, goal: false},
        // wall going down
        {x: 10, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 9, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 8, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 6, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 10, y: 4, icon: 'brick', passable: false, goal: false},
        // cross over
        {x: 9, y: 4, icon: 'brick', passable: false, goal: false},
        {x: 8, y: 4, icon: 'brick', passable: false, goal: false},
        {x: 7, y: 4, icon: 'brick', passable: false, goal: false},
        {x: 6, y: 4, icon: 'brick', passable: false, goal: false},
        // third wall going down
        {x: 14, y: 14, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 13, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 12, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 9, icon: 'brick', passable: false, goal: false},
        // L in the middle
        {x: 14, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 4, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 3, icon: 'brick', passable: false, goal: false},
        {x: 14, y: 2, icon: 'brick', passable: false, goal: false},
        {x: 15, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 16, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 17, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 19, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 20, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 21, y: 5, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 5, icon: 'brick', passable: false, goal: false},
        // T in the middle
        {x: 18, y: 6, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 8, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 9, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 18, y: 12, icon: 'brick', passable: false, goal: false},
        // second T in the middle
        {x: 22, y: 6, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 8, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 9, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 22, y: 12, icon: 'brick', passable: false, goal: false},
        // T from the ceiling
        {x: 26, y: 14, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 13, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 12, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 11, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 10, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 9, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 8, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 7, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 6, icon: 'brick', passable: false, goal: false},
        {x: 26, y: 5, icon: 'brick', passable: false, goal: false},
    ],
    icons: {
        brick: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bricks" viewBox="0 0 16 16">\n' +
            '  <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"/>\n' +
            '</svg>',
        battery: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery-charging" viewBox="0 0 16 16">\n' +
            '  <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>\n' +
            '  <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>\n' +
            '  <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z"/>\n' +
            '  <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>\n' +
            '</svg>',
        flag: '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.344 300.344" style="enable-background:new 0 0 300.344 300.344;" xml:space="preserve"><g><path d="M289.286,28.36c-6.773-3.386-14.885-2.655-20.945,1.892c-23.387,17.547-46.014,10.395-80.992-2.728c-34.281-12.859-76.942-28.861-119.047,2.728c-5.034,3.777-7.997,9.704-7.997,15.998v119.112c0,7.576,4.281,14.502,11.058,17.89s14.887,2.654,20.945-1.892c23.387-17.547,46.014-10.395,80.992,2.728c19.513,7.319,41.739,15.657,65.034,15.657c17.631,0,35.874-4.776,54.013-18.385c5.034-3.777,7.997-9.704,7.997-15.998V46.25C300.344,38.674,296.063,31.748,289.286,28.36z"/><path d="M20,7.819c-11.046,0-20,8.954-20,20v244.705c0,11.046,8.954,20,20,20s20-8.954,20-20V27.819C40,16.773,31.046,7.819,20,7.819z"/></g></svg>',
        arrow: '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"><g><path d="M437.2,178.7c12.8,12.8,12.8,33.4,0,46.2c-6.4,6.4-14.7,9.6-23.1,9.6s-16.7-3.2-23.1-9.6L277.7,111.5v345.8c0,18-14.6,32.7-32.7,32.7s-32.7-14.6-32.7-32.7V111.5L99,224.9c-12.8,12.8-33.4,12.8-46.2,0s-12.8-33.4,0-46.2L221.9,9.6C228,3.4,236.3,0,245,0c8.7,0,17,3.4,23.1,9.6L437.2,178.7z"/></svg>',
        fire: '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve"><circle style="fill:#FFD05B;" cx="254" cy="254" r="254"/><path style="fill:#FF7058;" d="M339.6,161.6c0.8,15.6-6.8,31.2-17.6,47.6c8.8-53.2-8.8-112.8-79.6-140.4c6,22.4-8.4,50-22.4,80c-8.4-9.6-18-18.8-29.6-27.6c5.6,74.4-157.6,148.8-25.2,276c0,0,8.8,5.6,24.4,11.2c-0.4-0.4-0.8-0.8-1.2-1.2l0,0c-28.4-30.8-44-94.4,10-136.4c-0.8,10.4,4.4,20.4,11.6,30.8c-5.6-34.4,5.6-73.2,51.6-91.2c-4,14.4,5.6,32.4,14.4,52c5.2-6.4,11.6-12.4,19.2-18c-2.8,39.6,70.8,80.4,44.4,140.8c5.2-4,10.4-8.4,15.2-13.6l0,0C398.4,324.4,422.4,226.4,339.6,161.6z"/></svg>',
    },
    rewards: {
        empty: -1,
        brick: -1000,
        battery: 10,
        flag: 1000000000
    }
}

function get_cell_props(x, y) {
    let ret = {reward: environ.rewards.empty, passable: true, goal: false, empty: true, icon: null}
    environ.objects.forEach((item) => {
        if (item.x === x && item.y === y) {
            ret = {
                reward: environ.rewards[item.icon],
                passable: item.passable,
                goal: item.goal,
                empty: false,
                icon: item.icon
            }
        }
    })
    return ret
}

function update_environ(x, y, icon) {
    for (let i = 0; i < environ.objects.length; i++) {
        let item  = environ.objects[i]
        if(item.x === x && item.y === y){
            environ.objects[i].icon = icon
            $('#' + get_cell_id(item.x, item.y)).html(environ.icons[item.icon])
            return
        }
    }
}

function render_environ() {
    if(environ.render === false){
        return
    }
    let html = '<table>'
    for (let y = environ.height; y > 0; y--) {
        html = html + '<tr>'
        for (let x = 1; x <= environ.width; x++) {
            html = html + '<td id="' + get_cell_id(x, y) + '" class="env-cell"></td>'
        }
        html = html + '</tr>'
    }
    $('#environ').html(html)
    environ.objects.forEach(item => {
        $('#' + get_cell_id(item.x, item.y)).html(environ.icons[item.icon])
        $('#' + get_cell_id(item.x, item.y) + ' svg').addClass('env-obj').addClass('env-obj-' + item.icon)
    });
}
