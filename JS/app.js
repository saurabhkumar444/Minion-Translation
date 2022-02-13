var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTraslationURL(input) {
    return serverURL + '?' + "text=" + input;
}

function handelError() {
    txtOutput.innerText = "Limit Reached! Something wrong with server !"
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTraslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated + "   BANANAAAAAA !!!!!";
            txtOutput.innerHTML = translatedText;
        })
        .catch(handelError)
}
btnTranslate.addEventListener("click", clickHandler)