// ESTABLECER LOS COLORES DESDE EL JSON DE COLORES
var xhr = new XMLHttpRequest();

xhr.open("GET", "datos_horario/colores.json", true);

xhr.onreadystatechange = function() {

  if (xhr.readyState === 4 && xhr.status === 200) {

    // Almacenamos los colores del JSON
    var colores = JSON.parse(xhr.responseText);

    // ESTABLECER LOS DATOS Y COLORES CORRESPONDIENTES
    var xhr2 = new XMLHttpRequest();

    xhr2.open("GET", "datos_horario/horario.json", true);

    xhr2.onreadystatechange = function() {

      if (xhr2.readyState === 4 && xhr2.status === 200) {
        var datos = JSON.parse(xhr2.responseText);

        for (var i = 0; i < datos.length; i++) {
          var item = datos[i];

          for (var key in item) {
            if (item.hasOwnProperty(key)) {

              var celda = document.getElementById(key);
              celda.innerHTML = item[key];
              celda.style.backgroundColor = colores[item[key]] || "#fff"; 
              
            }
          }
        }
      }
    };
    xhr2.send();
  }
};
xhr.send();