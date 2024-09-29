var texto = document.getElementById('texto');
var vozSelect = document.getElementById('voz');
var volumenInput = document.getElementById('volumen');
var velocidadInput = document.getElementById('velocidad');
var tonoInput = document.getElementById('tono');
var leerBoton = document.getElementById('leer');

var voices = [];

function modificarVoces() {
    voices = speechSynthesis.getVoices();
    vozSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        vozSelect.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = modificarVoces;

leerBoton.addEventListener('click', () => {
    
    var utterance = new SpeechSynthesisUtterance(texto.value);
    utterance.voice = voices[vozSelect.value];
    utterance.volume = volumenInput.value;
    utterance.rate = velocidadInput.value;
    utterance.pitch = tonoInput.value;
    speechSynthesis.speak(utterance);
});

modificarVoces();
