<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $telephone = $_POST["telephone"];
  $message = $_POST["message"];

  // Configurer les paramètres de l'e-mail
  $destinataire = "jean-christophe.matti@epitech.eu";
  $sujet = "Nouveau message de formulaire de contact";
  $corpsMessage = "Nom: " . $nom . "\n" .
                  "Email: " . $email . "\n" .
                  "Téléphone: " . $telephone . "\n" .
                  "Message: " . $message;

  // Envoyer l'e-mail
  $envoi = mail($destinataire, $sujet, $corpsMessage);

  if ($envoi) {
    echo "Votre message a été envoyé avec succès.";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du message.";
  }
}
?>
