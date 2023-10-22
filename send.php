<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "info@nicoyaxpress.com"; // Reemplaza con tu dirección de correo electrónico
    $contenido = "Nombre: $nombre\nCorreo: $correo\nTeléfono: $telefono\nAsunto: $asunto\nMensaje:\n$mensaje";
    $encabezados = "From: $nombre <$correo>";

    if (mail($destinatario, $asunto, $contenido, $encabezados)) {
        echo "Mensaje enviado con éxito. ¡Gracias por contactarnos!";
    } else {
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>
