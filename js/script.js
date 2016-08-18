const emailButton = document.getElementById('email-button')
const doneButton = document.getElementById('done-button')
let email="", type=""

$('#email-button').click(()=>{
    email = $('#email').val()
    console.warn(email);
    if(validateEmail(email)) {
        $('#sub-content-1').fadeOut( "", function() {
            $('#sub-content-1').addClass("hidden")
            $('#sub-content-2').fadeIn().removeClass("hidden")
        })    
    } else {
        alert("Please enter a valid email address")
    }
})

$('#done-button').click(()=>{
    type = $('input[name="type"]:checked').val();
    console.warn(type);
    $('#content-1').fadeOut( "", function() {
        $('#content-1').addClass("hidden")
        $('#content-2').fadeIn().removeClass("hidden")
    })
})

function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}