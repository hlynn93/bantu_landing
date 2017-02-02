(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-84287073-1', 'auto');
ga('send', 'pageview');


var email="", type=""
$('#email-button').click(function(){
  email = $('#email').val()
  if(validateEmail(email)) {
    showOptions()
  } else {
    swal({
      title: "Invalid email!",
      text: "Please enter a valid email address!",
      confirmButtonColor: "#EB6D47",
      type: "error",
      confirmButtonText: "Got it"
    });
  }
})

$('#done-button').click(function(){
  type = $('input[name="type"]:checked').val() + ":" + $('input[name="relationship"]:checked').val();
  sendRequest(showFinalPage);
})

$("#button").click(function() {
  $('html, body').animate({
    scrollTop: $("#myDiv").offset().top
  }, 1000);
});

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

$.ajaxSetup({
    crossDomain: true,
});


function sendRequest(successCallback){
  const apiKey = "$2y$10$kvyRe67FHwglsIhoz4oype0nsC0GKSwTycBrVniR49bSCthrCBgby"
  const url = "https://platform.bantu.life/api/v1/addEmail?apikey=" + apiKey
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


window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
heap.load("2678028164");
