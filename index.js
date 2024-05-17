function cargarDatos(){
    fetch('./controller/TraerClase.php')
    .then(response=>response.json())
    .then(data=>{
        const tablaDatos=document.getElementById('TablaDatos');
        tablaDatos.innerHTML='';
        data.forEach(row => {
            const tr=document.createElement('tr');
            tr.innerHTML=`
            <td>${row.id}</td>
            <td>${row.nombre}</td>
            <td>${row.email}</td>
            <td>${row.telefono}</td>
            <td>${row.direccion}</td>
            <td><button id='eliminar' onClick='eliminarClase(${row.id})'>Eliminar</button></td>
            <button type="button" onclick='TraerDatos(${row.id})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
            
            
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

function guardarClase(id,nombre,email,telefono,direccion){
    fetch('./controller/guardarController.php?id='+id+'&nombre='+nombre+'&email'+email+'&telefono'+telefono+'&direccion'+direccion)
    .then(response=>response.text())
    .then(data=>{
        limpiarFormulario();
        cargarDatos();
    });

}

function eliminarClase(id){
    fetch('./controller/eliminarController.php?id='+id)
    .then(response=>response.text())
    .then(data=>{
        alert(data);
    });

}
// ,${row.nombre},${row.email},${row.telefono},${row.direccion}
// +'&nombre='+nombre+'&email'+email+'&telefono'+telefono+'&direccion'+direccion
// ,nombre,email,telefono,direccion
function TraerDatos(id){
    fetch('./controller/TraerClasePlural.php?id='+id)
    .then(response=>response.json())
    .then(data=>{
        var inputNombre=document.getElementById("nombre");
        var inputEmail=document.getElementById("email");
        var inputTelefono=document.getElementById("telefono");
        var inputDireccion=document.getElementById("direccion");
        inputNombre.value=data['nombre'];
        inputEmail.value=data['email'];
        inputTelefono.value=data['telefono'];
        inputDireccion.value=data['direccion'];
       
        
    });
    var boton=document.getElementById("guardar");

    boton.onclick=function(){
        var inputNombre=document.getElementById("nombre");
        var inputEmail=document.getElementById("email");
        var inputTelefono=document.getElementById("telefono");
        var inputDireccion=document.getElementById("direccion");
        var inputIdClase=document.getElementById("id")
        var valNombre=inputNombre.value;
        var valEmail=inputEmail.value;
        var valTelefono=inputTelefono;
        var valDireccion=inputDireccion;
        var valid=inputIdClase.value;
        
        guardarClase(valid,valNombre,valEmail,valTelefono,valDireccion);

       


        
    }

}
cargarDatos();