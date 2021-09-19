const message=document.getElementById('msg');

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

//user speech
function userMessage(msg){
    message.innerHTML=`<div>You said: </div>
    <span class="box">${msg}</span>
  `;
}

//random Number

function randomNumber(msg){
    const number=+msg;

    if(Number.isNaN(num)){
        message.innerHTML+='<div> Please speak a valid number</div>';
        return;
    }

    // range
    if(number<1||number>100){
        message.innerHTML+='<div> Number must between 1 - 100</div>';
        return;
    }

    //number found

    if(number==randomNumber){
        document.body.innerHTML = `
      <h2>Congrats! You have guessed the number! <br><br>
      It was ${num}</h2>
      <button class="play-again" id="play-again">Well Done,Play Again</button>
    `;
    }else if(number>randomNumber){
        message.innerHTML+='<div>Almost near, Go lower</div>'
    }else{
        message.innerHTML+='<div>Almost near, Go Higher</div>'
    }
}

// Random number generator
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

//Speak Result
recognization.addEventListener('result',speech);