/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

DevMagno_-_-_-_Desarollo del Challenge 'Amigo secreto' */

// Declarando variables
const amigos = []; //array que contendrá los nombres de los amigos
let numeroAmigoSorteado = 0; //variable que contendrá el número de item del amigo sorteado
let amigoSorteado = '';  //variable que contendrá el nombre del amigo sorteado
/*
-
-
-
-
-
*/
//Creación de una función para limpiar el texto luego de guardar el nombre del amigo al array
function limpiarTexto(){
    document.querySelector('#amigo').value = '';
}


//Creación de una función para agregar un amigo al array y mostrarlo en la lista utilizando el botón "Añadir"
function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value;//Seleccionamos el valor del input que contiene el nombre del amigo
    
    //Mediante una condición verificamos si el campo está vacío
    if (nombreAmigo.trim() === ''){
        alert('Debes ingresar un nombre para continuar');
        return;
    }else{  //Si el campo no está vacío, se agrega el nombre al array y se muestra en la lista
        
        amigos.push(nombreAmigo);
        console.table(amigos);
        limpiarTexto();
        document.getElementById('amigo').focus();//Colocamos el foco en el input para que el usuario pueda seguir ingresando nombres
        
        let listaAmigos = document.querySelector('#listaAmigos'); //Obtenemos la lista del documento html
        limpiarLista();//llamamos a la funcion de limpieza de la lista existente para evitar duplicados
        
        amigos.forEach((amigo) => {
            const item = document.createElement('li'); //Creamos un elemento de lista
            item.textContent = amigo; //Agregamos el nombre del amigo a la lista
            listaAmigos.appendChild(item); //Agregamos el item a la lista 
        }
        

        );
        return;
    }
}

//Creando la función que me permitirá sortear un amigo de la lista generada y mostrarlo en el documento.
function sortearAmigo(){
    limpiarLista();
    deshabilitarBoton();
   
    //document.querySelector('#anadirNombre').setAttribute('disabled', 'false');
    //Validamos que la lista amigos no este vacío
    if (amigos.length === 0){
        alert('Hola, debes agregar al menos un amigo para poder jugar');
        return;
    }else{
        numeroAmigoSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[numeroAmigoSorteado];
        console.log(amigoSorteado);

        let elementoHTML = document.querySelector('#resultado');
        elementoHTML.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
        document.getElementById('nuevoJuego').style.display = 'block';
        
        return;
    }
}

//Creando la función que me permitirá limpiar la lista de amigos que se haya generado
function limpiarLista(){
    listaAmigos.innerHTML="";
    return;
}

//Creando la función que me permitirá iniciar un nuevo juego
function nuevoJuego(){
    amigos.length = 0;
    limpiarTexto();
    limpiarLista();
    document.querySelector('#resultado').textContent = '';
    document.getElementById('amigo').focus();
    //document.querySelector('#anadirNombre').setAttribute('disabled', 'true');
    document.getElementById('nuevoJuego').style.display = 'none';
    habilitarBoton();
    return;
}

//Creando la función que me permitirá habilitar o deshabilitar el botón "Nuevo juego"
function habilitarBoton(){
    const estadoBoton = document.getElementById("anadirNombre");
    estadoBoton.disabled = false;
 }

 function deshabilitarBoton(){
    const estadoBoton = document.getElementById("anadirNombre");
    estadoBoton.disabled = true;
 }


