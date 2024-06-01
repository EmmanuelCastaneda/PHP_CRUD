// function cargarDatos(){
//     fetch('./controller/TraerClase.php')
//     .then(response=>response.json())
//     .then(data=>{
//         const tablaDatos=document.getElementById('TablaDatos');
//         tablaDatos.innerHTML='';
//         data.forEach(row => {
//             const tr=document.createElement('tr');
//             tr.innerHTML=`
//             <td>${row.id}</td>
//             <td>${row.nombre}</td>
//             <td>${row.email}</td>
//             <td>${row.telefono}</td>
//             <td>${row.direccion}</td>
//             <td><button id='eliminar' onClick='eliminarClase(${row.id})'>Eliminar</button></td>
//             <td><button type="button" onclick='TraerDatos(${row.id})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Actualizar</button></td>
            
            
//             `;
//             tablaDatos.appendChild(tr);
            
//         });
//     });
// }
function cargarDatos() {
    fetch("./controller/TraerClase.php")
      .then((response) => response.json())
      .then((data) => {
        const tablaDatos=document.getElementById('TablaDatos');
        tablaDatos.innerHTML="";
        data.forEach((row) => {
            const tr=document.createElement('tr');
            tr.innerHTML=`
            <td>${row.id}</td>
            <td>${row.nombre}</td>
            <td>${row.email}</td>
            <td>${row.telefono}</td>
            <td>${row.direccion}</td>
          <td>
          <button onclick='traerDatos(${row.id})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Actualizar</button>
          </td>
          <td>
              <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmModal-${row.id}">Eliminar</button>
              <div class="modal fade" id="confirmModal-${row.id}" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel-${row.id}" aria-hidden="true">
              <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="confirmModalLabel">Deseas eliminar este registro</h5>
                            </div>
                            <div class="modal-body">
                              ¿Estás seguro de que deseas continuar?
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                              <button class="btn btn-danger" data-dismiss="modal" onClick='eliminarClase(${row.id})'>Eliminar</button>
                            </div>
                          </div>
                        </div>
              </div>
          </td>
      `;
        tablaDatos.appendChild(tr);
        });
      });
  }


function limpiarFormulario(){
    var inputIdClase=document.getElementById("id")
    var inputNombre=document.getElementById("nombre");
    var inputEmail=document.getElementById("email");
    var inputTelefono=document.getElementById("telefono");
    var inputDireccion=document.getElementById("direccion");
    inputIdClase.value="";
    inputNombre.value="";
    inputEmail.value="";
    inputTelefono.value="";
    inputDireccion.value="";
}

function guardarClase(id, nombre, email ,telefono , direccion) {
    fetch(
      `./controller/guardarController.php?id=${id}&nombre=${nombre}&email=${email}&telefono=${telefono}&direccion=${direccion}`,
    )
      .then((response) => response.text())
      .then((data) => {
        limpiarFormulario();
        cargarDatos();
        mostrarAlerta(data);
      });
  }



// function guardarClase(id,nombre,email,telefono,direccion){
//     fetch('./controller/guardarController.php?id='+id+'&nombre='+nombre+'&email'+email+'&telefono'+telefono+'&direccion'+direccion)
//     .then(response=>response.text())
//     .then((data)=>{
//         limpiarFormulario();
//         cargarDatos();
//     });

// }

// function eliminarClase(id){
//     fetch('./controller/eliminarController.php?id='+id)
//     .then(response=>response.text())
//     .then((data)=>{
//         console.log(data);
//         cargarDatos();
//     });

// }

function eliminarClase(id) {
    fetch("./controller/eliminarController.php?id=" + id)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        cargarDatos();
        mostrarAlerta("Se elimino con exito")
      });
  }
// ,${row.nombre},${row.email},${row.telefono},${row.direccion}
// +'&nombre='+nombre+'&email'+email+'&telefono'+telefono+'&direccion'+direccion
// ,nombre,email,telefono,direccion

function agregarClase() {
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
  
    fetch(
      `./controller/agregarController.php?id=${id}&nombre=${nombre}&email=${email}&telefono=${telefono}&direccion=${direccion}`
    )
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        cargarDatos();
        
        console.log(data);
        document.getElementById("id").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("direccion").value = "";
      });
  }

function TraerDatos(id){
    fetch(`./controller/TraerClasePlural.php?id=${id}`)
    .then(response=>response.json())
    .then((data)=>{
        var inputIdClase=document.getElementById("id");
        var inputNombre=document.getElementById("nombre");
        var inputEmail=document.getElementById("email");
        var inputTelefono=document.getElementById("telefono");
        var inputDireccion=document.getElementById("direccion");
        inputIdClase.value=data["id"]
        inputNombre.value=data["nombre"];
        inputEmail.value=data["email"];
        inputTelefono.value=data["telefono"];
        inputDireccion.value=data["direccion"];
    });
    var boton=document.getElementById("Guardar");

    boton.onclick=function(){
        var inputIdClase=document.getElementById("id")
        var inputNombre=document.getElementById("nombre");
        var inputEmail=document.getElementById("email");
        var inputTelefono=document.getElementById("telefono");
        var inputDireccion=document.getElementById("direccion");
        var valNombre=inputNombre.value;
        var valEmail=inputEmail.value;
        var valTelefono=inputTelefono;
        var valDireccion=inputDireccion;
        var valid=inputIdClase.value;
        limpiarFormulario();

        guardarClase(valid,valNombre,valEmail,valTelefono,valDireccion);

       


        
    }
    // function traerDatos(id) {
    //     fetch(`./Controller/traerClaseController.php?id=${id}`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         var inputCodigo = document.getElementById("id");
    //         var inputNombre = document.getElementById("nombre");
    //         var inputDescripcion = document.getElementById("descripcion");
    //         inputCodigo.value = data["id"];
    //         inputNombre.value = data["nombre"];
    //         inputDescripcion.value = data["descripcion"];
    //       });
      
    //     var boton = document.getElementById("Guardar");
    //     boton.onclick = function () {
    //       var inputCodigo = document.getElementById("id");
    //       var inputNombre = document.getElementById("nombre");
    //       var inputDescripcion = document.getElementById("descripcion");
    //       var valId = inputCodigo.value;
    //       var valNombre = inputNombre.value;
    //       var valDescripcion = inputDescripcion.value;
    //       limpiarFormulario();
    //       guardarClase(valId, valNombre, valDescripcion);
        
    //     };
    //   }

    function mostrarAlerta(mensaje) {
        var alerta = document.getElementById("alerMessange");
        alerta.innerHTML = mensaje;
        alerta.hidden = false;
      
        setTimeout(function() {
          alerta.hidden = true;
        }, 1000); 
      }

}
cargarDatos();