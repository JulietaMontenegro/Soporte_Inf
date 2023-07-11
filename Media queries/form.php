<?php
	$dni= $_GET["dni"];
	$nombre = $_GET["nombre"];
    $apellido= $_GET["apellido"];
    $telefono = $_GET["telefono"];
    $correo = $_GET["correo"];
    $fecha = $_GET["fecha"];
    $producto= $_GET["producto"];
    $cantidad= $_GET["cantidad"];
    $servername = "127.0.0.1";
    $database = "paginaweb";
    $username = "alumno";
    $password = "alumnoipm";
    
    $conexion = mysqli_connect($servername, $username, $password, $database); // se crea la conexion


    if (!$conexion) {
        die("Conexion fallida: " . mysqli_connect_error());
    }
    else{
        $resultado = mysqli_query($conexion,"select max(idPedido) as idPedido from Pedido;");
        $fila=mysqli_fetch_assoc($resultado);
        $idPedido=$fila['idPedido'];   
        if ($idPedido != null){
            $idPedido= $idPedido + 1;
        }else{
            $idPedido= 1;
        }
        header('Location: http://localhost:8000/');    
        $resultado=mysqli_query($conexion,"insert into Pedido values('$idPedido', '$producto', '$dni', '$nombre', '$apellido', '$telefono', '$correo', '$fecha' );");
        $resultado=mysqli_query($conexion,"insert into Detalle values('$idPedido','$producto', '$cantidad');");
    }
    
    echo $_GET['producto'];
    mysqli_close($conexion);
?>
