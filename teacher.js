student_name = localStorage.getItem('pre-submit-name')

fieldIds = [
    'pre-submit-1',
    'pre-submit-2',
    'pre-submit-3',
    'pre-submit-4',
    'pre-submit-5',
    'pre-submit-6',
    'pre-submit-7',
    'intro-form-1',
    'deep-dive-form-1',
    'deep-dive-form-2',
    'debrief-form-1',
    'debrief-form-2',
    'post-submit-1',
    'post-submit-2',
    'post-submit-3',
    'post-submit-4',
    'post-submit-5',
    'post-submit-6',
    'post-submit-7',
]

if(student_name !== null){
    $('#no-student-responses').hide()
    $('#student-responses').show()
    $('#student-list').append(
        $('<option>'+student_name+'</option>')
    );
    fieldIds.forEach((id)=> {
        let val = localStorage.getItem(id)
        if(val !== null){
            $('#'+id).html(val)
        }

    })
} else {

}