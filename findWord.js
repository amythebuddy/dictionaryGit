document.getElementById("submit").addEventListener("click", findWord);
//the function will run when press enter
document.getElementById("word").addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        document.getElementById("submit").click();
    }
});
function findWord(){
    const input = document.getElementById("word").value;
    if(input == ""){ //if the input has nothing, alert the user
        alert("You need to type something!");
        return;
    }
    let container = document.createElement("div");
    container.classList.add("contain");
    let speech = document.createElement("p");
    let define = document.createElement("p");
    //make a storage for words
    const wordStorage = {
        yes : { 
            partOfSpeech: "noun", 
            definition: ["1. Used to give an affirmative response", "\n2. Used as a response to someone addressing one or otherwise trying to attract one's attention."]
        },
        panacea : { 
            partOfSpeech: "noun",
            definition: ["1. An answer or solution for all problems or difficulties."]
        },
        concatenation : {
            partOfSpeech: "noun",
            definition: ["1. A series of interconnected or interdependent things or events."]
        },
        saw : {
            partOfSpeech: "verb",
            definition: ["1. Cut (something) using a saw", "\n 2. Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
        },
        found : {
            partOfSpeech: "adjective",
            definition: ["1. Having been discovered by chance or unexpectedly.", "\n2. (of a ship) Equipped; Supplied."]
        },
        crane : {
            partOfSpeech: "adjective",
            definition: ["1. Stretch out one's body or neck in order to see something", "\n2. Move (a heavy object) with a crane."]
        },
        minute : {
            partOfSpeech: "noun",
            definition: ["1. A period of time equal to sixty seconds or a sixtieth of an hour", "\n2. A sixtieth of a degree of angular measurement (symbol: ʹ)"]
        },
        grotesque : { 
            partOfSpeech: "adjective",
            definition: ["1. Comically or repulsively ugly or distorted."]
        },
        label : { 
            partOfSpeech: "noun",
            definition:[ "1. A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
        },
        debacle : { 
            partOfSpeech: "noun",
            definition: ["1. A sudden and ignominious failure; a fiasco."]
        }
    };
    //this is for checking word only, doesn't affect the original value
    let checkWord = input.toLowerCase();
    if(wordStorage.hasOwnProperty(checkWord)){ // if the storage has the word, speech and define get the values
        speech.innerText = wordStorage[checkWord].partOfSpeech;
        define.innerText = wordStorage[checkWord].definition;
    } else{ //if not, return the original value with the same capitalization
        speech.innerText = input + " is not in the dictionary";
    }
    speech.classList.add("popUpText");
    define.classList.add("popUpText");

    document.body.appendChild(container);
    container.appendChild(speech);
    container.appendChild(define);
    document.getElementById("word").value = "";

    //if the user enter another word, the previous word will delete itself
    document.getElementById("submit").addEventListener("click", () => {
        document.body.removeChild(container);
    });

}