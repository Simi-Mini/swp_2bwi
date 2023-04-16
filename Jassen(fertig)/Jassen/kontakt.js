const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (event) => {
  e.preventDefault();

  const gender = form.gender.value;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // E-Mail-Nachricht erstellen
  const subject = `Kontaktformularanfrage von ${name}`;
  const body = `Geschlecht: ${gender}\n\nName: ${name}\n\nE-Mail: ${email}\n\nNachricht:\n${message}`;

  // E-Mail-Link erstellen
  const mailtoLink = `mailto:stesl.noah06@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // E-Mail-Link öffnen
  window.location.href = mailtoLink;

  // Formular zurücksetzen
  form.reset();
  
  // Bestätigungsnachricht ausgeben
  alert("Vielen Dank für Ihre Nachricht!");
});
