function cargarDatos(){
    fetch('controller/TraerClase.php')
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
            
            
            `;
            tablaDatos.appendChild(tr);
            
        });
    });
}
cargarDatos()
function eliminarClase(id){
    fetch('./controller/eliminarController.php?id='+id)
    .then(response=>response.text())
    .then(data=>{
        alert(data);
    });

}


cargarDatos();