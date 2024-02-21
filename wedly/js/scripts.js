


/******  YARMIN ******/

function mostrarDivTurno() {
    
    document.getElementById("divTurno").style.display = "block";
  }

  function confirmarTurno() {
    
    var fechaSeleccionada = document.getElementById("fechaInput").value;

    
    alert("Su reserva ha sido confirmada para la fecha: " + fechaSeleccionada);

    
    document.getElementById("divTurno").style.display = "none";
  }

  /******  YARMIN ******/