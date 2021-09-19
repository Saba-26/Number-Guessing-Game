const msg=document.getElementById('msg');

const randomNumber=getRandomNumber();

console.log('Number:',randomNumber);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognization= new window.SpeechRecognition();

recognization.start();

//Speech
function speech(e){
    const msg=e.results[0][0].transcript;

    writeMessage(msg);
    checkNumber(msg);
}