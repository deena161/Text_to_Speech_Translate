const synth = window.speechSynthesis;
const inputText = document.getElementById('inputText');
const outputSection = document.getElementById('outputSection');
const outputText = document.getElementById('outputText');

const speakButton = document.getElementById("speakButton");
speakButton.addEventListener("click", () => {
    const textToSpeak = inputText.value;
    if (textToSpeak.trim() === "") {
        alert("Please enter some text to translate and speak.");
        return;
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.volume = document.getElementById("volumeSlider").value;
    utterance.pitch = 1;
    utterance.rate = 1;
    synth.speak(utterance);
    outputText.innerHTML = textToSpeak;
    outputSection.style.display = 'block';
});



document.getElementById("volumeSlider").addEventListener("input",()=>{
    var vol = document.getElementById("volumeSlider").value;
    if(vol>=0.4){
        document.getElementById("fa-volume-high").style.display='block';
        document.getElementById("fa-volume-low").style.display= 'none';
    }
    else if(vol<0.5){
        document.getElementById("fa-volume-high").style.display='none';
        document.getElementById("fa-volume-low").style.display= 'block';
    }
})
