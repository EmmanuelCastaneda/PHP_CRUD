<?php
include ('../conexiones/conexion.php');

class claseDAO {
  public $id;
  public $nombre;
  public $email;
  public $telefono;
  public $direccion;

  function __construct($id = null, $nombreC = null, $emailC = null, $telefonoC = null, $direccionC = null) {
    $this->id = $id;
    $this->nombre = $nombreC;
    $this->email = $emailC;
    $this->telefono = $telefonoC;
    $this->direccion = $direccionC;
  }

  function TraerClases() {
    $conexion = new Conexion('localhost', 'root', '', 'pruebabasephp');

    try {
      $conn = $conexion->Conectar();
      $stmt = $conn->query('SELECT * FROM usuario'); // Assuming "usuario" is your table
      $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
      return $rows; 
      $conexion->cerrarConexion();// This line returns an array
    } catch (PDOException $e) {
      echo "Error al conectar a la base de datos ======>" . $e->getMessage();
    }
  }
  function TraerClase($id) { // Function name changed to singular for clarity
    $conexion = new Conexion('localhost', 'root', '', 'pruebabasephp');

    try {
      $conn = $conexion->Conectar();
      $stmt = $conn->prepare("SELECT * FROM usuario WHERE id=:id"); // Using prepared statement to prevent SQL injection
      $stmt->bindParam(':id', $id); // Bind the parameter
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
      return $row; // This line returns a single object
    } catch (PDOException $e) {
      echo "Error al conectar a la base de datos ======>" . $e->getMessage();
    }
  }

  

  function eliminarClase($id) {
    $conexion = new Conexion('localhost', 'root', '', 'pruebabasephp');

    try {
      $conn = $conexion->Conectar();
      $stmt = $conn->prepare("DELETE FROM usuario WHERE id=:id"); // Using prepared statement for security
      $stmt->bindParam(':id', $id);
      $stmt->execute();
      $conexion->cerrarConexion(); // Ensure connection is closed
    } catch (PDOException $e) {
      echo "Error al conectar a la base de datos ======>" . $e->getMessage();
    }
  }
  
  // function guardarClase($nombre,$email,$telefono,$direccion) {
  //   $conexion = new Conexion('localhost', 'root', '', 'pruebabasephp');

  //   try {
  //     $conn = $conexion->Conectar();
  //     $query = "INSERT INTO usuario (id,nombre,email,telefono,direccion) VALUES ('{$nombre}','{$email}','{$telefono}','{$direccion}')";
  //     $stmt->$conn->prepare($query);
  //     $stmt->execute();
  //     return "exito, se agrego un nuevo registro"

  //   } catch (PDOException $e) {
  //     echo "Error al conectar a la base de datos ======>" . $e->getMessage();
  //   }
  // }

  function actualizarClase($id,$nombre,$email,$telefono,$direccion) {
    $conexion = new Conexion('localhost', 'root', '', 'pruebabasephp');

    try {
      $conn = $conexion->Conectar();
	    $query="UPDATE usuario SET nombre='$nombre',email='$email',telefono='$telefono',direccion='$direccion' WHERE id=$id";
      $stmt = $conn->prepare($query); 
      $stmt->execute();
	    return "Se actulizo Correctamente";
    } catch (PDOException $e) {
      echo "Error al conectar a la base de datos ======>" . $e->getMessage();
    }
  }
}

