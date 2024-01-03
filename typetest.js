let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let quoteInputEl = document.getElementById("quoteInput");
let spinnerIdEl = document.getElementById("spinnerId");

let paraText = null;
spinnerIdEl.classList.remove("dd-none");
quoteDisplayEl.classList.add("dd-none");

function getText() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return (response.json());
        })
        .then(function(jsonData) {
            paraText = jsonData.content;
            spinnerIdEl.classList.add("dd-none");
            quoteDisplayEl.classList.remove("dd-none");
            quoteDisplayEl.textContent = paraText;
        });
}
getText();

let id = null;
let valuesd = null;

function getTimer() {
    let a = 0;
    if (id === null) {
        id = setInterval(function() {
            timerEl.textContent = a + " " + "seconds";
            a = a + 1;
            valuesd = a;
        }, 1000);
    }
}
getTimer();

submitBtnEl.onclick = function() {
    clearInterval(id);
    //console.log(paraText);
    //console.log(quoteInputEl.value);
    //console.log (paraText === quoteInputEl.value);
    if (paraText === quoteInputEl.value) {
        resultEl.textContent = "You did it in " + valuesd + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentece";
    }
};

resetBtnEl.onclick = function() {
    clearInterval(id);
    id = null;
    getText();
    getTimer();
    quoteInputEl.value = "";
    resultEl.textContent = "";
};