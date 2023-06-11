<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $telephone = $_POST["telephone"];
  $message = $_POST["message"];

  $destinataire = "jean-christophe.matti@epitech.eu";
  $sujet = "Nouveau message de contact";
  $contenu = "Nom: $nom\n";
  $contenu .= "Email: $email\n";
  $contenu .= "Téléphone: $telephone\n";
  $contenu .= "Message: $message\n";

  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($destinataire, $sujet, $contenu, $headers)) {
    echo "Votre message a été envoyé avec succès.";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du message.";
  }
}
?>
