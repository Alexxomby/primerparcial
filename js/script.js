// Función para validar caracteres numéricos en los campos de entrada
function validarNumeros(input) {
    input.value = input.value.replace(/[^0-9\.]/g, '');
  }
  
  // Función para calcular el interés compuesto y generar la tabla de amortización
  function calcular() {
    // Validar los campos de entrada
    let capital = parseFloat(document.getElementById("capital").value);
    if (isNaN(capital) || capital <= 0 || capital > 10000000) {
      alert("El capital inicial debe ser un número entre 1 y 10000000.");
      return;
    }
    
    let tasa = parseFloat(document.getElementById("tasa").value);
    if (isNaN(tasa) || tasa <= 0 || tasa > 100) {
      alert("La tasa de interés debe ser un número entre 0.01 y 100.");
      return;
    }
  
    let tiempo = parseInt(document.getElementById("tiempo").value);
    if (isNaN(tiempo) || tiempo <= 0 || tiempo > 600) {
      alert("El tiempo debe ser un número entero entre 1 y 600.");
      return;
    }
  
    // Calcular el monto final y llenar la tabla de amortización
    let tabla = document.getElementById("tabla-resultados");
    let tbody = tabla.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    let monto = capital;
    let totalIntereses = 0;
    for (let i = 1; i <= tiempo; i++) {
      let intereses = monto * tasa / 100;
      totalIntereses += intereses;
      monto += intereses;
      tbody.innerHTML += "<tr><td>" + i + "</td><td>" + capital.toFixed(2) + "</td><td>" + intereses.toFixed(2) +
      "</td><td>" + monto.toFixed(2) + "</td></tr>";
    }
    tbody.innerHTML += "<tr><td>Total</td><td>" + capital.toFixed(2) + "</td><td>" + totalIntereses.toFixed(2) + "</td><td>" + monto.toFixed(2) + "</td></tr>";
  
    // Mostrar la tabla de resultados
    tabla.style.display = "table";
  }
  
  // Asignar la función validarNumeros al evento input de los campos de entrada
  document.getElementById("capital").addEventListener("input", function() {
    validarNumeros(this);
  });
  document.getElementById("tasa").addEventListener("input", function() {
    validarNumeros(this);
  });
  document.getElementById("tiempo").addEventListener("input", function() {
    validarNumeros(this);
  });
  