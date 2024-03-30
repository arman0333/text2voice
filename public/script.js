let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        voices.forEach((voice,i) => (
            voiceSelect.options[i] = new Option(voice.name,i)
        ))};
voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})


document.querySelector("button").addEventListener("click", ()=>
{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}
)
// // let speech = new SpeechSynthesisUtterance();
// // // let voices = [];
// // // let voiceSelect = document.querySelector("select");

// // // window.speechSynthesis.onvoiceschanged = () => {
// // //     voices = window.speechSynthesis.getVoices();
// // //     speech.voice = voices[0];
// // //     voices.forEach((voice, i) => {
// // //         voiceSelect.options[i] = new Option(voice.name, i);
// // //     });
// // // };

// // // voiceSelect.addEventListener("change", () => {
// // //     speech.voice = voices[voiceSelect.value];
// // // });

// // // document.querySelector("button").addEventListener("click", () => {
// // //     speech.text = document.querySelector("textarea").value;
// // //     window.speechSynthesis.speak(speech);
// // // });
// // document.addEventListener("DOMContentLoaded", function() {
// //     let speech = new SpeechSynthesisUtterance();
// //     let voices = [];
// //     let voiceSelect = document.getElementById("select");

// //     function populateVoiceList() {
// //         voices = window.speechSynthesis.getVoices();
// //         voiceSelect.innerHTML = ''; // Clear existing options

// //         // Create the first option with the text content 'Selected Voice'
// //         let firstOption = document.createElement('option');
// //         firstOption.textContent = 'Selected Voice'; // Initial label text
// //         firstOption.disabled = true;
// //         firstOption.selected = true;
// //         voiceSelect.appendChild(firstOption);

// //         voices.forEach((voice, i) => {
// //             let option = document.createElement('option');
// //             option.textContent = voice.name;
// //             option.value = i;
// //             voiceSelect.appendChild(option);
// //         });
// //     }

// //     populateVoiceList(); // Populate options initially

// //     window.speechSynthesis.onvoiceschanged = () => {
// //         setTimeout(populateVoiceList, 100); // Delay to ensure voices are loaded
// //     };

// //     voiceSelect.addEventListener("change", () => {
// //         speech.voice = voices[voiceSelect.value];
// //     });

// //     document.querySelector("button").addEventListener("click", () => {
// //         speech.text = document.querySelector("textarea").value;
// //         window.speechSynthesis.speak(speech);
// //     });
// // });
// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = function() {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];
//     voices.forEach((voice, i) => {
//         let option = new Option(voice.name, i);
//         voiceSelect.appendChild(option);
//     });
// };

// voiceSelect.addEventListener("change", () => {
//     speech.voice = voices[voiceSelect.value];
// });

// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });

// // Trigger the voiceschanged event manually
// window.speechSynthesis.getVoices();
