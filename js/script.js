const emailButton = document.getElementById('email-button')
const doneButton = document.getElementById('done-button')
let email="", type=""

$('#email-button').click(()=>{
    email = $('#email').val()
    if(validateEmail(email)) {
        showOptions()
    } else {
        alert("Please enter a valid email address")
    }
})

$('#done-button').click(()=>{
    type = $('input[name="type"]:checked').val();
    sendRequest(showFinalPage);
})

function showOptions() {
    $('#sub-content-1').fadeOut( "", function() {
        $('#sub-content-1').addClass("hidden")
        $('#sub-content-2').fadeIn().removeClass("hidden")
    })    
}

function showFinalPage() {
    $('#content-1').fadeOut( "", function() {
        $('#content-1').addClass("hidden")
        $('#content-2').fadeIn().removeClass("hidden")
    })
}

function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function sendRequest(successCallback){
    const apiKey = "$2y$10$kvyRe67FHwglsIhoz4oype0nsC0GKSwTycBrVniR49bSCthrCBgby"
    const url = "http://platform.bantu.life/api/v1/addEmail?apikey=" + apiKey
    var request = $.post( url, { email: email, option: type } , function() {
        successCallback()
    })
    .done(function() {
        
    })
    .fail(function() {
        
    })
    .always(function() {

    });
}
