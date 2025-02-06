// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//
document.addEventListener("DOMContentLoaded", function () {
  // Declaración de variables
  let amigos = [];
  let caja = document.querySelector("#amigo");
  let listaHTML = document.getElementById("listaAmigos");

  // Función para asignar texto y estilos a los elementos
  function asignarTextoElemento(elemento, texto, tamaño, color) {
    let elementoHTML = document.getElementById(elemento);

    //Parametros para el texto seleccionado
    if (elementoHTML) {
      elementoHTML.innerHTML = texto;
      elementoHTML.style.fontSize = tamaño;
      elementoHTML.style.color = color;
    } else {
      console.error(`No se encontró el elemento: ${elemento}`);
    }
  }

  // Validar si ingresó un nombre válido
  function validarNombre() {
    let nombre = document.getElementById("amigo").value;

    // Constante de solo letras del alfabeto
    const regex = /^[A-Za-z]+$/;

    // Validar si el nombre contiene solo letras
    if (!regex.test(nombre)) {
      // Mensaje de error
      asignarTextoElemento(
        "mensaje",
        "Nombre ingresado no válido!",
        "16px",
        "#d01111"
      );
      limpiarCajaLista(caja);
      return false; // Nombre no válido
    }
    return true; // Nombre válido
  }

  // Función para agregar amigo
  function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim(); // Eliminar espacios en blanco
    nombreAmigo = capitalizarNombre(nombreAmigo); // Capitalizar el nombre

    // Verificar si el nombre ya existe en la lista (duplicados)
    if (amigos.includes(nombreAmigo)) {
      // Mostrar mensaje de error si el nombre ya está en la lista
      asignarTextoElemento(
        "mensaje",
        "Lo siento, este amigo ya ha sido agregado!",
        "16px",
        "#9e1faf"
      );

      limpiarCajaLista(caja); // Limpiar el campo de texto
      return; // No agregar el amigo
    }

    // Agregar el nombre si es válido
    if (validarNombre()) {
      amigos.push(nombreAmigo);

      asignarTextoElemento(
        "mensaje",
        "Nombre ingresado correctamente!",
        "16px",
        "#2ec819"
      );

      console.log("Amigos:", amigos); // Mostrar la lista de amigos en la consola

      // Limpiar caja
      limpiarCajaLista(caja);
    }
    return amigos;
  }

  // Función limpiar caja o Lista
  function limpiarCajaLista(elemento) {
    if (elemento === caja) {
      // Limpiar la caja
      elemento.value = "";
    } else if (elemento === listaHTML) {
      // Limpiar la lista antes de agregar nuevos elementos
      listaHTML.innerHTML = "";
    }
  }

  // Función para que la primera letra sea mayuscula
  function capitalizarNombre(nombre) {
    // Asegurarse de que la primera letra sea mayúscula y el resto minúsculas
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  }

  // Función para actualizar la lista de amigos en el HTML
  function actualizarListaAmigos() {
    //Limpiar lista
    limpiarCajaLista(listaHTML);

    // Recorrer el array amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
      let li = document.createElement("li"); // Crear un nuevo elemento <li>
      li.textContent = amigos[i]; // Asignar el texto al <li>
      listaHTML.appendChild(li); // Agregar el <li> a la lista HTML
    }
  }

  // Agregar amigos al hacer click en el botón
  document.getElementById("Agregar").addEventListener("click", function () {
    agregarAmigo();
    actualizarListaAmigos();
  });
});
