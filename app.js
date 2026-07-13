const majorArcana = [
  ["El Loco", "RWS_Tarot_00_Fool.jpg", "Un salto de fe, apertura y libertad. La carta invita a comenzar sin exigir tenerlo todo resuelto."],
  ["El Mago", "RWS_Tarot_01_Magician.jpg", "Voluntad, recursos y accion enfocada. Lo que buscas necesita manos, palabra e intencion."],
  ["La Sacerdotisa", "RWS_Tarot_02_High_Priestess.jpg", "Intuicion, misterio y escucha interna. Hay informacion que se revela mejor en silencio."],
  ["La Emperatriz", "RWS_Tarot_03_Empress.jpg", "Cuidado, creatividad y crecimiento. Nutre lo que ya esta vivo antes de forzarlo."],
  ["El Emperador", "RWS_Tarot_04_Emperor.jpg", "Estructura, limites y direccion. Un marco claro puede darte mas libertad, no menos."],
  ["El Hierofante", "RWS_Tarot_05_Hierophant.jpg", "Tradicion, aprendizaje y guia. Pregunta que regla te sostiene y cual ya no necesitas."],
  ["Los Enamorados", "RWS_Tarot_06_Lovers.jpg", "Eleccion, alianza y coherencia. Decide desde tus valores, no solo desde el deseo inmediato."],
  ["El Carro", "RWS_Tarot_07_Chariot.jpg", "Avance, disciplina y control emocional. La energia esta, toca dirigirla."],
  ["La Fuerza", "RWS_Tarot_08_Strength.jpg", "Coraje sereno y dominio suave. La firmeza no necesita endurecerte."],
  ["El Ermitaño", "RWS_Tarot_09_Hermit.jpg", "Retiro, sabiduria y busqueda interior. Baja el ruido para distinguir tu propia luz."],
  ["La Rueda de la Fortuna", "RWS_Tarot_10_Wheel_of_Fortune.jpg", "Cambio de ciclo y movimiento. Acompana el giro sin intentar congelar la vida."],
  ["La Justicia", "RWS_Tarot_11_Justice.jpg", "Claridad, balance y consecuencias. Mira los hechos con honestidad antes de decidir."],
  ["El Colgado", "RWS_Tarot_12_Hanged_Man.jpg", "Pausa y nueva perspectiva. Soltar el control puede mostrar una salida distinta."],
  ["La Muerte", "RWS_Tarot_13_Death.jpg", "Cierre, transformacion y limpieza. Algo termina para que la energia vuelva a circular."],
  ["La Templanza", "RWS_Tarot_14_Temperance.jpg", "Armonia, paciencia y mezcla sabia. Integra opuestos sin apresurar el resultado."],
  ["El Diablo", "RWS_Tarot_15_Devil.jpg", "Apego, deseo y sombra. Observa que te ata sin entregarle el volante."],
  ["La Torre", "RWS_Tarot_16_Tower.jpg", "Ruptura, verdad y liberacion. Lo falso cae rapido, pero deja aire nuevo."],
  ["La Estrella", "RWS_Tarot_17_Star.jpg", "Esperanza, reparacion y confianza. Vuelve a lo simple: agua, calma, horizonte."],
  ["La Luna", "RWS_Tarot_18_Moon.jpg", "Incertidumbre, suenos y sensibilidad. No todo miedo es senal; algunas sombras solo piden luz."],
  ["El Sol", "RWS_Tarot_19_Sun.jpg", "Vitalidad, alegria y evidencia. Permite que lo bueno sea facil de reconocer."],
  ["El Juicio", "RWS_Tarot_20_Judgement.jpg", "Llamado, despertar y revision. Algo en ti esta listo para responder de otra manera."],
  ["El Mundo", "RWS_Tarot_21_World.jpg", "Culminacion, integracion y logro. Cierra el ciclo honrando todo lo que ya aprendiste."],
].map(([name, image, meaning]) => ({
  name,
  image: imageUrl(image),
  meaning,
  type: "major",
  label: "Arcano mayor",
}));

const suits = [
  ["Bastos", "Wands", "energia, impulso creativo y voluntad"],
  ["Copas", "Cups", "emociones, vinculos e intuicion"],
  ["Espadas", "Swords", "mente, verdad y decisiones"],
  ["Oros", "Pents", "materia, trabajo y estabilidad"],
];

const ranks = [
  ["As", "01", "inicio claro y potencial concentrado"],
  ["Dos", "02", "balance, eleccion y tension productiva"],
  ["Tres", "03", "expansion, colaboracion y primeros frutos"],
  ["Cuatro", "04", "pausa, base y necesidad de ordenar"],
  ["Cinco", "05", "friccion, aprendizaje y reajuste"],
  ["Seis", "06", "movimiento hacia mayor armonia"],
  ["Siete", "07", "prueba, estrategia y defensa de lo propio"],
  ["Ocho", "08", "ritmo, practica y avance sostenido"],
  ["Nueve", "09", "madurez, resistencia y cierre cercano"],
  ["Diez", "10", "culminacion del ciclo y peso acumulado"],
  ["Sota", "11", "curiosidad, mensaje y aprendizaje"],
  ["Caballero", "12", "accion, busqueda y direccion"],
  ["Reina", "13", "receptividad madura y dominio interno"],
  ["Rey", "14", "autoridad, vision y gestion consciente"],
];

const minorArcana = suits.flatMap(([suitEs, suitFile, suitMeaning]) =>
  ranks.map(([rankEs, rankNumber, rankMeaning]) => ({
    name: `${rankEs} de ${suitEs}`,
    image: imageUrl(`${suitFile}${rankNumber}.jpg`),
    meaning: `Habla de ${suitMeaning}: ${rankMeaning}. Mira donde esta energia pide atencion hoy.`,
    type: "minor",
    label: "Arcano menor",
  })),
);

const cards = {
  major: majorArcana,
  minor: minorArcana,
  all: [...majorArcana, ...minorArcana],
};

const appShell = document.querySelector(".app-shell");
const cardButton = document.querySelector("#card-button");
const drawButton = document.querySelector("#draw-button");
const cardInfo = document.querySelector("#card-info");
const cardKind = document.querySelector("#card-kind");
const cardName = document.querySelector("#card-name");
const cardMeaning = document.querySelector("#card-meaning");
const cardImage = document.querySelector("#card-image");
const imageWrap = document.querySelector(".image-wrap");
const imageFallback = document.querySelector("#image-fallback");
const hint = document.querySelector("#hint");
const deckInputs = document.querySelectorAll("input[name='deck-type']");
const questionForm = document.querySelector("#question-form");
const questionInput = document.querySelector("#question-input");
const interpretButton = document.querySelector("#interpret-button");
const interpretationStatus = document.querySelector("#interpretation-status");
const aiReading = document.querySelector("#ai-reading");
const aiReadingText = document.querySelector("#ai-reading-text");
const interpretationEndpoint = appShell.dataset.interpretationEndpoint;

let selectedDeck = "major";
let currentCard = null;
let isRevealed = false;
let isRequestingInterpretation = false;

deckInputs.forEach((input) => {
  input.addEventListener("change", () => {
    selectedDeck = input.value;
    resetReading();
  });
});

cardButton.addEventListener("click", () => {
  if (!currentCard) {
    drawCard();
    return;
  }

  revealCard();
});

drawButton.addEventListener("click", drawCard);
questionInput.addEventListener("input", updateInterpretButton);
questionForm.addEventListener("submit", requestContextualReading);

function drawCard() {
  const deck = cards[selectedDeck];
  currentCard = deck[Math.floor(Math.random() * deck.length)];
  isRevealed = false;
  cardButton.classList.remove("is-revealed");
  imageWrap.classList.remove("has-error");
  cardImage.src = currentCard.image;
  cardImage.alt = `Ilustracion Rider-Waite de ${currentCard.name}`;
  imageFallback.textContent = currentCard.name;
  cardKind.textContent = currentCard.label;
  cardName.textContent = currentCard.name;
  cardMeaning.textContent = currentCard.meaning;
  cardInfo.hidden = true;
  aiReading.hidden = true;
  aiReadingText.textContent = "";
  setInterpretationStatus("Revela la carta antes de pedir una lectura contextual.");
  hint.textContent = "Carta lista. Haz click sobre ella para revelar el mensaje.";
  cardButton.setAttribute("aria-label", `Voltear ${currentCard.name}`);
  updateInterpretButton();
}

function revealCard() {
  if (isRevealed) return;
  isRevealed = true;
  cardButton.classList.add("is-revealed");
  cardInfo.hidden = false;
  setInterpretationStatus("Escribe tu pregunta y pide una interpretacion en contexto.");
  hint.textContent = "Puedes sacar otra carta cuando quieras.";
  updateInterpretButton();
}

function resetReading() {
  currentCard = null;
  isRevealed = false;
  isRequestingInterpretation = false;
  cardButton.classList.remove("is-revealed");
  cardInfo.hidden = true;
  aiReading.hidden = true;
  aiReadingText.textContent = "";
  cardImage.removeAttribute("src");
  cardImage.removeAttribute("alt");
  imageWrap.classList.remove("has-error");
  imageFallback.textContent = "";
  setInterpretationStatus("Revela una carta y escribe tu pregunta para pedir una lectura contextual.");
  hint.textContent = "Elige un mazo y pulsa la carta o el boton para revelar tu tirada.";
  cardButton.setAttribute("aria-label", "Voltear carta");
  updateInterpretButton();
}

function imageUrl(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
}

async function requestContextualReading(event) {
  event.preventDefault();

  const question = questionInput.value.trim();
  if (!currentCard || !isRevealed || !question || isRequestingInterpretation) {
    updateInterpretButton();
    return;
  }

  isRequestingInterpretation = true;
  aiReading.hidden = true;
  aiReadingText.textContent = "";
  setInterpretationStatus("Consultando el microservicio...");
  updateInterpretButton();

  try {
    const response = await fetch(interpretationEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        deckType: selectedDeck,
        card: {
          name: currentCard.name,
          type: currentCard.type,
          label: currentCard.label,
          baseMeaning: currentCard.meaning,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const interpretation = data.interpretation || data.message || data.text;
    if (!interpretation) {
      throw new Error("Respuesta sin interpretacion");
    }

    aiReadingText.textContent = interpretation;
    aiReading.hidden = false;
    setInterpretationStatus("Lectura recibida.");
  } catch (error) {
    setInterpretationStatus(
      "El microservicio todavia no respondio. Cuando exista, debe aceptar POST /api/tarot/interpretations.",
      true,
    );
  } finally {
    isRequestingInterpretation = false;
    updateInterpretButton();
  }
}

function updateInterpretButton() {
  const hasQuestion = questionInput.value.trim().length > 0;
  interpretButton.disabled = !currentCard || !isRevealed || !hasQuestion || isRequestingInterpretation;
  interpretButton.textContent = isRequestingInterpretation ? "Leyendo..." : "Interpretar";
}

function setInterpretationStatus(message, isError = false) {
  interpretationStatus.textContent = message;
  interpretationStatus.classList.toggle("is-error", isError);
}

cardImage.addEventListener("error", () => {
  imageWrap.classList.add("has-error");
});
