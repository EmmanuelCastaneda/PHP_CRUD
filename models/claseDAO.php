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
      return $rows; // This line returns an array
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
}

