


/******  YARMIN ******/
/*** agrego este codigo javascript porque en la user history dice que se debe poder generar una reserva desde el boton booking aunque en la tarea solo dice de agregar el boton me parecio necesario agregar este detalle  ***/
function mostrarDivTurno() {
  
    document.getElementById("DivModalReserva").style.display = "block";
  }

  function confirmarTurno() {
    
    const controlfecha = document.getElementById("fechaInput");

    const fechaelegida = controlfecha.value;

    /** aqui deberia ir alguna logica para la fecha pero como hay mucho detalle dejo fijo solo un mensajito con la fecha seleccionada ***/
    
    alert("Su reserva ha sido confirmada para la fecha: " + fechaelegida);

    const divmodal = document.getElementById("DivModalReserva");


    divmodal.style.display = "none";
  }

  /******  YARMIN ******/