$(document).ready(function() {
    $('.boton').click(function(e) {
      e.preventDefault();
      $('.popup').fadeIn();
    });
  
    $('.popup .cerrar').click(function() {
      $('.popup').fadeOut();
    });
});

$(document).ready(function() {
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  
    $('#contactame').click(function(e) {
        e.preventDefault();
        var nombreApellidos = $('#nombreApellidos').val();
        var email = $('#email').val();
        var telefono = $('#telefono').val();
    
        setCookie("nombreApellidos", nombreApellidos, 1);
        setCookie("email", email, 1);
        setCookie("telefono", telefono, 1);
    
        $('.popup').fadeOut();
        window.location.href = "datosEnviados.html";
    });
  
    var nombreApellidos = getCookie("nombreApellidos");
    var email = getCookie("email");
    var telefono = getCookie("telefono");
  
    if (nombreApellidos != "") {
      $('#nombreApellidos').val(nombreApellidos);
    }
    if (email != "") {
      $('#email').val(email);
    }
    if (telefono != "") {
      $('#telefono').val(telefono);
    }
});