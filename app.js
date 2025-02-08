/*
----------------------------------------------------------------------------------
Esta web fue desarrolado por David Malaver como challenge en el curso Alura Latam
----------------------------------------------------------------------------------
*/

// Se asegura que el código solo se ejecute hasta que el DOM este construido
document.addEventListener("DOMContentLoaded", function () {
  // Declaración de variables
  let amigos = [];
  let caja = document.querySelector("#amigo");
  let listaHTML = document.getElementById("listaAmigos");
  let agregar = document.getElementById("amigo");
  let sortear = document.getElementById("btnSortear");

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

      //console.log("Amigos:", amigos); // Mostrar la lista de amigos en la consola

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

  // Función para generar el indice d ela lista
  function generarIndiceAleatorio() {
    let indice = Math.floor(Math.random() * amigos.length);
    //console.log(indice);
    return { indiceAleatorio: indice };
  }

  // Función para sortear el amigo secreto
  function sortearAmigo() {
    // Verificar si no hay amigos en la lista
    if (amigos.length === 0) {
      asignarTextoElemento(
        "mensaje",
        "¡No has ingresado amigos para sortear!",
        "16px",
        "#9e0433"
      );
      reiniciarLista();
      mostrarLista();
      return; // No continuar si la lista está vacía
    }

    // Generar un índice aleatorio para seleccionar un amigo
    let indice = generarIndiceAleatorio().indiceAleatorio;
    let amigoSorteado = amigos[indice];

    // Mostrar el amigo secreto sorteado
    if (amigos.length > 0) {
      asignarTextoElemento(
        "mensaje",
        `Tu amigo secreto es ${amigoSorteado}`,
        "16px",
        "#1d2ac4"
      );

      // Eliminar el amigo sorteado de la lista para evitar repetirlo
      amigos.splice(indice, 1);
      //console.log(amigos, amigos.length);
      return;
    }

    // Verificar si ya no hay más amigos para sortear
    /*if (amigos.length === 0) {
      asignarTextoElemento(
        "mensaje",
        "¡Ya no hay más amigos disponibles para sortear!",
        "16px",
        "#d01111"
      );
      return;
      mostrarLista(); // Mostrar la lista vacía
    }*/

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
  }

  // Función para ocultar la lista de amigos
  function ocultarLista() {
    listaHTML.style.display = "none"; // Ocultar la lista de amigos
  }

  // Función para mostrar la lista de amigos
  function mostrarLista() {
    listaHTML.style.display = "block"; // Mostrar la lista de amigos
  }

  // Función para reiniciar la lista de amigos
  function reiniciarLista() {
    listaHTML.innerHTML = ""; // Mostrar la lista de amigos
  }

  function condicionesIniciales() {
    // Agregar amigos al presionar Enter en el campo de texto
    agregar.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        // Comprobar si la tecla presionada es Enter
        agregarAmigo(); // Llamar a la función para agregar el amigo
        actualizarListaAmigos(); // Actualizar la lista de amigos en la página
        event.preventDefault(); // Evitar el comportamiento por defecto de la tecla Enter (como saltar de campo)
      }
    });

    // Añadir el event listener para el botón "Agregar"
    document.getElementById("Agregar").addEventListener("click", function () {
      agregarAmigo(); // Llama a la función para agregar el amigo
      actualizarListaAmigos(); // Actualiza la lista de amigos en la página
    });

    // Al hacer click en el botón "Sortear amigo"
    sortear.addEventListener("click", function () {
      ocultarLista(); // Ocultar la lista antes de sortear
      sortearAmigo(); // Sortear amigo
    });

    // Al presionar Enter en el botón "Sortear amigo"
    sortear.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        ocultarLista(); // Ocultar la lista antes de sortear
        sortearAmigo(); // Sortear amigo
        event.preventDefault(); // Evitar el comportamiento por defecto de la tecla Enter
      }
    });
  }

  condicionesIniciales();
});
