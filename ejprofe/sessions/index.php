<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Session</title>
    </head>
    <body>
        <form action="" method="post">
            <input type="text" name="nom">
            <input type="submit" value="Guardar">
        </form>

        <?php
            $mensaje = "Martín";

            if(isset($_POST['nom'])){
                $_SESSION['nombre'] = $_POST['nom'];
            }
            
            /*else{
                $_SESSION['nombre'] = $mensaje;
            } */
           
            echo @$_SESSION["nombre"];

            //echo "<a href='otro.php?nombre=$mensaje'>Enviar</a>";
            //Header("Location:otro.php?nombre=$mensaje");
        ?>

        <a href='otro.php'>Enviar</a>
    </body>
</html>