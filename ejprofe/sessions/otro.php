<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sesiones</title>
    </head>
    <body>
        <?php
            echo $_SESSION["nombre"];
        ?>
        <a href='index.php'>Volver</a>
        <a href="logout.php">Destuir sesión</a>
    </body>
</html>