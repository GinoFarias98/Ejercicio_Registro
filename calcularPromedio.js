const calcularPromedio = (numeros) => {
    console.log("Lista");
  
    for (let i = 0; i < numeros.length; i++) {
      let numeroActual = numeros[i];
  
      //aca abajo calculo la suma de los datos dentro del array listaNotas
  
      let suma = numeroActual.notas.reduce(
        (acumulador, nota) => acumulador + parseFloat(nota),
        0
      ); //ese 0 es el valor al que inicializo mi acumulador es decir suma=0 ademas agrego parseFloat para volver los datos a flotante y que el programa no se rompa, si no los toma como cadena. reduce es un metodo para sumar
  
      let promedio = suma / numeroActual.notas.length; //calculo el promedio y mas abajo imprimo todo.
  
      console.log(
        "Nombre: " +
          numeroActual.nombre +
          ", Edad: " +
          numeroActual.edad +
          ", Notas: " +
          numeroActual.notas +
          ", Promedio: " +
          promedio
      );
    }
  };

  module.exports = {calcularPromedio};