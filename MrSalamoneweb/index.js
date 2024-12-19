function respondToText() {
    const text = document.getElementById('textInput').value.toLowerCase();
    let response = '';
let img = document.getElementById("img");
img.src="173414510354621430.png";

    // Define responses based on input text
   if (text.includes('hello')) {
        response = 'Hello Hello Hello there Mortal';
        document.getElementById("p1").textContent = 'Hello there Mortal'
    } else if (text.includes('how are you')) {
        response = 'I I I I I I am Mr Salamone I dont feel';
        document.getElementById("p1").textContent = 'I am Mr. Salamone I dont feel'
    } else if (text.includes('your name')) {
        response = 'I I I I I I go by lots of names: Some call me a menace, while others call me the sigma ';
        document.getElementById("p1").textContent = 'I go by lots of names: Some call me a menace, while others call me the sigma'
    } else if (text.includes('favorite food')){
        response = 'Tidily Tidily Tidily Winks';
        document.getElementById("p1").textContent = 'Tidily Winks'
    }
 else if (text.includes(' favorite student')){
        response = 'My My MY My My favorite students is life';
        document.getElementById("p1").textContent = 'My favorite student is life'
    }else if (text.includes('quiz')){
        response = 'Your Your Your Your  Your life is a quiz';
        document.getElementById("p1").textContent = 'Your life is a quiz'
    }
    else if (text.includes('ill stop talking')){
        response = 'talk talk talk talk to me human';
        document.getElementById("p1").textContent = 'Talk to me human';
    }
    else if (text.includes('devious')){
        response = 'I I I I I I am not you are just soft';
        document.getElementById("p1").textContent = 'I am not, you are just soft'
    }
    else if (text.includes('bad grade')){
        response = 'I II I I  I iI I will leap over there and eat you';
        document.getElementById("p1").textContent = 'I will leap over there and eat you'
    }
    else if (text.includes('favorite teacher')){
        response = 'life life life life is my favorite teacher';
        document.getElementById("p1").textContent = 'Life is my favorite teacher'
    }
    else if (text.includes('can you round my grade')){
        response = 'you you you you you can round yourself into a ball and roll out of here';
        document.getElementById("p1").textContent = 'You can round yourself into a ball and roll out of here'
    }
    else if (text.includes('goodbye')){
        response = 'leave le leave leave now or be destroyed';
        document.getElementById("p1").textContent = 'Leave now or be destroyed'
    }
    else if (text.includes('grade')){
        response = ' grades grades grades  are temporary but knowledge is for ever';
        document.getElementById("p1").textContent = 'grades are temporary but knowledge is for ever'
    }
    else{ 
        response = 'hahahahahahahahahahaha';
        document.getElementById("p1").textContent = 'HAHAHAHAHAHAHA'
    }
    console.log(response);

     //Use the Web Speech API to read the response
    const speech = new SpeechSynthesisUtterance(response);
   window.speechSynthesis.speak(speech);
   }
   const button1 = document.getElementById("button1");
button1.addEventListener("click",function(){window.open("index2.html","blank");});
   
const graderBtn = document.getElementById("graderBtn");
 graderBtn.addEventListener("click",function(){window.open("percent.html","blank");});


 const frenchBtn = document.getElementById("frenchBtn");
 frenchBtn.addEventListener("click",function(){window.open("french.html","blank");});