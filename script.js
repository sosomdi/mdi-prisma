// script.js

// Fragen und Antworten
const flow = {
  start: {
    question: "Waren Sie schon einmal hier?",
    yes: "Willkommen zurück! Wie können wir Ihnen helfen?",
    no: "Willkommen! Hier sind einige Informationen für neue Gäste.",
  },
  followUp: {
    question: "Möchten Sie ein Formular ausfüllen?",
    yes: "Super! Das Formular ist bereit.",
    no: "Kein Problem! Genießen Sie Ihren Besuch.",
  },
};

// Aktueller Schritt im Ablauf
let currentStep = "start";

// Funktion zur Verarbeitung der Antwort
function handleAnswer(answer) {
  const questionElement = document.getElementById("question");
  const infoElement = document.getElementById("info");

  if (currentStep === "start") {
    if (answer === "yes") {
      questionElement.innerText = flow.followUp.question;
      infoElement.innerText = flow.start.yes;
      currentStep = "followUp";
    } else {
      questionElement.innerText = "";
      infoElement.innerText = flow.start.no;
      document.getElementById("buttons").style.display = "none";
    }
  } else if (currentStep === "followUp") {
    infoElement.innerText = answer === "yes" ? flow.followUp.yes : flow.followUp.no;
    document.getElementById("buttons").style.display = "none";
  }
}
