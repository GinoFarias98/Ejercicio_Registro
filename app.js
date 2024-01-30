const readlinesync = require("readline-sync");
const {calcularPromedio} = require("./calcularPromedio");
const registroEstudiantes = () => {
  let cantEstudiantes = readlinesync.question(
    "Ingresar cantidad de estudiantes que desea calcular el promedio: "
  );

  console.log("Cantidad de estudiantes registrados: " + cantEstudiantes);

  let numeros = []; //aca se guardan los estudiantes con sus propiedades.

  //iterador para agregar estudiantes.

  for (let i = 0; i < cantEstudiantes; i++) {
    let g = i + 1;

    let nombreEst = readlinesync.question("Nombre del estudiante " + g + ": ");

    let edadEst = readlinesync.question("Edad del estudiante: ");

    let listaNotas = []; //aca se guardan las notas elegidas.

    let cantNotaEst = readlinesync.question(
      "Seleccione cantidad de notas para el estudiante " + g + ": "
    );

    //en este iterador se selecciona la cantidad de notas que se desea guardar en el array que esta arriba(listaNotas).

    for (let j = 0; j < cantNotaEst; j++) {
      let h = j + 1;

      let nota = readlinesync.question("Digite nota(1 a 10) " + h + ": ");

      listaNotas.push(nota);

      // if(!isNaN(nota)&& nota>=1 && nota//<=10)
      //{
      //listaNotas.push(nota);
      //}
      //else
      //{
      //   alert("Por favor digite una nota //del 1 al 10");
      //    break;
      // }
      //EN ESTE CASO INTENTE QUE SOLO SE PUDIERAN INTRODUCIR NUMEROS DEL 1 AL 10
      // Y NO LETRAS PERO EL BREAK NO FUNCIONÓ COMO ESPERABA.
    }

    let estudiante = {
      nombre: nombreEst,

      edad: edadEst,

      notas: listaNotas, //array con notas
    };

    numeros.push(estudiante);
  }

  return numeros;
};

//metodo o funcion para imprimir los datos

calcularPromedio;

//metodos en accion.

let registro = registroEstudiantes();

calcularPromedio(registro);
