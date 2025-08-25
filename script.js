
let recordatorios = [];


function ingresarRecordatorio() {
  let fecha = prompt("Ingrese la fecha del recordatorio (ej: 25/08/2025):");
  let texto = prompt("Ingrese el texto del recordatorio:");
  recordatorios.push({ fecha: fecha, texto: texto });
  alert(" Recordatorio agregado con éxito");
}


function eliminarRecordatorio() {
  if (recordatorios.length === 0) {
    alert(" No hay recordatorios para eliminar");
    return;
  }
  let indice = parseInt(prompt("Ingrese el número de recordatorio a eliminar (1 a " + recordatorios.length + "):")) - 1;
  if (indice >= 0 && indice < recordatorios.length) {
    let eliminado = recordatorios.splice(indice, 1);
    alert(" Se eliminó: " + eliminado[0].texto);
  } else {
    alert("Número inválido ");
  }
}


function mostrarRecordatorios() {
  if (recordatorios.length === 0) {
    alert("📭 No hay recordatorios");
    return;
  }
  console.log("=== LISTA DE RECORDATORIOS ===");
  let mensaje = "Tus recordatorios:\n";
  recordatorios.forEach((rec, index) => {
    mensaje += (index + 1) + ". [" + rec.fecha + "] " + rec.texto + "\n";
    console.log((index + 1) + ". [" + rec.fecha + "] " + rec.texto);
  });
  alert(mensaje);
}


function buscarRecordatorio() {
  let buscar = prompt("Ingrese la fecha a buscar (ej: 25/08/2025):");
  let encontrados = recordatorios.filter(r => r.fecha === buscar);
  if (encontrados.length > 0) {
    let mensaje = " Recordatorios en " + buscar + ":\n";
    encontrados.forEach(r => mensaje += "- " + r.texto + "\n");
    alert(mensaje);
  } else {
    alert(" No se encontraron recordatorios en esa fecha");
  }
}


function editarRecordatorio() {
  if (recordatorios.length === 0) {
    alert(" No hay recordatorios para editar");
    return;
  }
  let indice = parseInt(prompt("Ingrese el número de recordatorio a editar (1 a " + recordatorios.length + "):")) - 1;
  if (indice >= 0 && indice < recordatorios.length) {
    let nuevoTexto = prompt("Nuevo texto:", recordatorios[indice].texto);
    let nuevaFecha = prompt("Nueva fecha:", recordatorios[indice].fecha);
    recordatorios[indice].texto = nuevoTexto;
    recordatorios[indice].fecha = nuevaFecha;
    alert(" Recordatorio actualizado");
  } else {
    alert("Número inválido ");
  }
}



alert(" Bienvenido al simulador de recordatorios");

let continuar = true;

while (continuar) {
  let opcion = prompt(
    "Seleccione una opción:\n" +
    "1. Ingresar recordatorio\n" +
    "2. Eliminar recordatorio\n" +
    "3. Mostrar todos los recordatorios\n" +
    "4. Buscar recordatorio por fecha\n" +
    "5. Editar recordatorio\n" +
    "6. Salir"
  );

  switch (opcion) {
    case "1":
      ingresarRecordatorio();
      break;
    case "2":
      eliminarRecordatorio();
      break;
    case "3":
      mostrarRecordatorios();
      break;
    case "4":
      buscarRecordatorio();
      break;
    case "5":
      editarRecordatorio();
      break;
    case "6":
      continuar = false;
      alert(" Gracias por usar el simulador de recordatorios");
      break;
    default:
      alert(" Opción inválida, intente nuevamente");
  }
}