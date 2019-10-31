var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');

startBtn.onclick = function() {
  recognition.start();
  printStatus("Listening...");
}

/**
  The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  It has a getter so it can be accessed like an array
  The [last] returns the SpeechRecognitionResult at the last position.
  Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  These also have getters so they can be accessed like arrays.
  The [0] returns the SpeechRecognitionAlternative at position 0.
  We then return the transcript property of the SpeechRecognitionAlternative object
 */
recognition.onresult = function(event) {
  const last = event.results.length - 1;
  const result = event.results[last][0].transcript;
  const confidence = event.results[0][0].confidence;
  printResult(result, confidence);
  printStatus("Listening...");
}

recognition.onspeechend = function() {
  recognition.stop();
}

stopBtn.onclick = function() {
  recognition.stop();
  isListening = false;
  printStatus("STOPPED! Press START to begin again.");
}

recognition.onerror = function(event) {
  printStatus('Error occurred in recognition: ' + event.error);
}

const loggingArea = document.querySelector('#logging');
function printStatus(msg) {
  const divEl = document.createElement("div");
  divEl.innerText = msg;
  divEl.setAttribute("class", "status")
  loggingArea.append(divEl);
}

function printResult(msg, confidence) {
  const confDiv = document.createElement("div");
  confDiv.innerText = "Confidence: " + Math.round(confidence * 1000);
  confDiv.setAttribute("class", "confidence");

  const resultDiv = document.createElement("div");
  resultDiv.innerText = msg;
  resultDiv.setAttribute("class", "result"); 
  resultDiv.append(confDiv);

  loggingArea.append(resultDiv);
}