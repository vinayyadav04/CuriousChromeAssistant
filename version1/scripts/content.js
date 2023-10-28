let body = document.querySelector("body");

let btncurious = document.createElement("button");
btncurious.setAttribute("id", "btncurious");
btncurious.addEventListener("click", doSomething);
body.appendChild(btncurious);

let speechRecognition = new webkitSpeechRecognition(); 
speechRecognition.continuous = true;
speechRecognition.interimResults = true;
speechRecognition.lang = "en-US";

let transcript = "";
speechRecognition.onresult = function(event) {
    transcript = "";
    for (let i = 0; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
    }
};

document.addEventListener('keypress', handlekbd);

function handlekbd(event){
    if(event.shiftKey && event.altKey && event.code==='KeyQ'){
        btncurious.click();
    }
}

function doSomething() {
    if (btncurious.hasAttribute("listening")===false) {
        btncurious.setAttribute("listening", true);
        speechRecognition.start();
    } else {
        btncurious.removeAttribute("listening");
        speechRecognition.stop();
        const mypopup= new Popup({
            id:"my-popup",
            title:"here is what you said ",
            content:transcript
        });
        mypopup.show()
        
    }
}