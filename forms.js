preSubmitIds = [
    'pre-submit-name',
    'pre-submit-1',
    'pre-submit-2',
    'pre-submit-3',
    'pre-submit-4',
    'pre-submit-5',
    'pre-submit-6',
    'pre-submit-7'
]

if ($('#pre-assessment-form').length) {
    $('#pre-assessment-form').submit(function () {
        preSubmitIds.forEach(id => {
            localStorage.setItem(id, $('#' + id).val())
        })
        setTimeout(function () {
            location.href = '2-intro.html'
        }, 200)
        return false
    })

    preSubmitIds.forEach(id => {
        let val = localStorage.getItem(id)
        if (val !== null) {
            $('#' + id).val(val)
        }
    })
}

///////////////////////////////////////////////////

introIds = [
    'intro-form-1'
]

if ($('#intro-form').length) {
    $('#intro-form').submit(function () {
        introIds.forEach(id => {
            localStorage.setItem(id, $('#' + id).val())
        })
        setTimeout(function () {
            location.href = '3-sim1.html'
        }, 200)
        return false
    })

    introIds.forEach(id => {
        let val = localStorage.getItem(id)
        if (val !== null) {
            $('#' + id).val(val)
        }
    })
}

//////////////////////////////////////////////////////////

deepDiveIds = [
    'deep-dive-form-1',
    'deep-dive-form-2'
]

if ($('#deep-dive-form').length) {
    $('#deep-dive-form').submit(function () {
        deepDiveIds.forEach(id => {
            localStorage.setItem(id, $('#' + id).val())
        })
        setTimeout(function () {
            location.href = '5-sim2.html'
        }, 200)
        return false
    })

    deepDiveIds.forEach(id => {
        let val = localStorage.getItem(id)
        if (val !== null) {
            $('#' + id).val(val)
        }
    })
}

///////////////////////////////////////////////

debriefIds = [
    'debrief-form-1',
    'debrief-form-2'
]

if ($('#debrief-form').length) {
    $('#debrief-form').submit(function () {
        debriefIds.forEach(id => {
            localStorage.setItem(id, $('#' + id).val())
        })
        setTimeout(function () {
            location.href = '7-post-assessment.html'
        }, 200)
        return false
    })

    debriefIds.forEach(id => {
        let val = localStorage.getItem(id)
        if (val !== null) {
            $('#' + id).val(val)
        }
    })
}

//////////////////////////////////////////////////////////

postSubmitIds = [
    'post-submit-name',
    'post-submit-1',
    'post-submit-2',
    'post-submit-3',
    'post-submit-4',
    'post-submit-5',
    'post-submit-6',
    'post-submit-7'
]

if($('#post-assessment-form').length){
    preSubmitIds.forEach(id => {
        let key = id+'-response'
        let val = localStorage.getItem(id)
        console.log(val)
        if (val !== null) {
            $('#' + key).html(val)
        }
    })

    $('#post-assessment-form').submit(function () {
        postSubmitIds.forEach(id => {
            localStorage.setItem(id, $('#' + id).val())
        })
        setTimeout(function () {
            location.href = '0-index.html'
        }, 200)
        return false
    })

    postSubmitIds.forEach(id => {
        let val = localStorage.getItem(id)
        if (val !== null) {
            $('#' + id).val(val)
        }
    })
}