let titulo = document.getElementById("tituloPortada");
let subtitulo = document.getElementById("subtituloPortada");
let parrafoInscripciones = document.getElementById("parrafoInscripciones");
let portada = document.getElementById("portada");
/* let nombreEstudiante = document.getElementById("nombreRespuesta"); */
/* let nombreResultado = document.getElementById("nombreRespuesta"); */

/* let fichaInscripcion = document.querySelector(".fichaInscripcion")  */



//microbit
let tarjetaMicrobit = document.getElementById("cardMicrobit");
tarjetaMicrobit.addEventListener("click", () => {
  console.log("inscripcion microbit");
  titulo.innerHTML = "Microbit";
  cards.remove();
  parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
  document.formulario.append(formularioInscripcion);
});

//videojuegos 
let tarjetaVideojuegos = document.getElementById("cardVideojuegos");
tarjetaVideojuegos.addEventListener("click", () => {
  console.log("inscripcion Videojuegos");
  titulo.innerHTML = "Videojuegos";
  subtitulo.innerHTML =
    "Tus primeros pasos en la ideación y programación por bloques";
  cards.remove();
  parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
});

//Arduino
let tarjetaArduino = document.getElementById("cardArduino");
tarjetaArduino.addEventListener("click", () => {
  console.log("inscripcion Arduino");
  titulo.innerHTML = "Arduino";
  subtitulo.innerHTML =
    "Tus primeros pasos en la construcción y programacion de circuitos";
  cards.remove();
  parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dorso de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*"
});






/* function inscripcionArduino() {
  console.log("inscripcion Arduino");
  titulo.innerHTML = "Arduino";
  subtitulo.innerHTML =
    "Tus primeros pasos en la construcción y programacion de circuitos";
    cards.remove();
    parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
}
let tarjetaArduino = document.getElementById("cardArduino");
tarjetaArduino.addEventListener("click", inscripcionArduino); */


//la otra manera seria:

/* let tarjetaMicrobit = document.getElementById("cardMicrobit");
tarjetaMicrobit.addEventListener("click", ()=>){
    console.log("inscripcion microbit");
  titulo.innerHTML = "Microbit";
  cards.remove();
  parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
  document.formulario.append(formularioInscripcion);
});
 */


/* let nombreEstudianteIngresado = document.getElementById("nombreRegistro").value */
/* 
let nombreEstudianteIngresado = document.setElementById("nombreRegistro").value;
let nombreEstudianteRegistrado = localStorage.getItem("nombreEstudiante");
console.log(nombreEstudiante);
let nombreRespuesta = document.getElementById("nombreEstudianteRegistrado ");
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  console.log("nombreEstudinteRegistrado",nombreEstudinteRegistrado );
  nombreRespuesta.innerHTML = nombreEstudianteIngresado  ;
  cards.remove();
  formReg.remove();
}); */

window.onload = iniciar;

function iniciar() {

  let btnInscribirme = document.getElementById("inscribirme");
  btnInscribirme.addEventListener("click", clickInscribirme);
  event.preventDefault();

}

function clickInscribirme() {

  let nombreIngresado = document.getElementById("nombreEstudiante"); //mete el nombre en una variable
  let estudiante = []; //inventa un arreglo con esa variable
  estudiante.push(nombreIngresado.value); //ingresa datos en el arreglo
  localStorage.estudiante = JSON.stringify(estudiante); //mete variable a storage y lo convierte en string
  localStorage.nombreEstudiante = nombreEstudiante.value;
  portada.remove();


  
  let fichaInscripcion = document.getElementById("fichaInscripcion");
  fichaInscripcion.innerHTML = 
  `<h2> Ficha de inscripcion</h2>
   <h4>Nombre de estudiante: ${estudiante} </h4>`;
  mostrarFicha();
}

function mostrarFicha() {
  let estudiante = JSON.parse(localStorage.estudiante); //texto

  //let respuestaNombre = document.getElementById("respuesta"); SIRVE
  //respuestaNombre.innerHTML =  localStorage.nombreEstudiante ; SIRVE

  /* let fichaInscripcion = document.getElementById(fichaInscripcion);
  fichaInscripcion.innerHTML = ` <h4>Nombre de estudiante: ${nombreIngresado} </h4>`; */ --> //quizas no va acá
  alert(localStorage.nombreEstudiante);
  click.preventDefault();

}