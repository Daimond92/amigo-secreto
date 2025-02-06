// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", function () {
  // Declaración de variables
  let amigos = [];

  // Función para asignar texto y estilos a los elementos
  function asignarTextoElemento(elemento, texto, tamaño, color) {
    let elementoHTML = document.getElementById(elemento);
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
      limpiarCaja()
      return false; // Nombre no válido
    }
    return true; // Nombre válido
  }

  // Función para agregar amigo
  function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    // Agregar el nombre si es válido
    if (validarNombre()) {
      amigos.push(nombreAmigo);
      console.log("Amigos:", amigos); // Mostrar la lista de amigos en la consola

      // Limpiar caja
      limpiarCaja();
    }
  }

  // Función limpiar caja
  function limpiarCaja() {
    document.querySelector("#amigo").value = "";
  }

  // Agregar amigos
  document.getElementById("Agregar").addEventListener("click", agregarAmigo);
});
