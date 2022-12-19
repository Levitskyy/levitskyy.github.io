"use strict";
let langcont = document.getElementById("lang-cont");
let selection = document.getElementById("quest3");
let questBlock = document.getElementById("sports")
let addButton = document.getElementById("sportsButton");
let resultsContainer = document.getElementById("results-container");
let results = document.getElementById("results");
let closeButton;
let elem;
let count = 0;

let submitButton = document.getElementById("submit");

selection.onchange = function() {
    if (selection.value == 3) {
        elem = document.createElement("input");
        elem.setAttribute("type", "text");
        langcont.appendChild(elem);
    }
    else {
        langcont.removeChild(elem);
    }
}

addButton.onclick = function () {
    if (count >= 2) {
        return;
    }
    let container = document.createElement("div");
    container.setAttribute("class", "sum-quest");
    questBlock.appendChild(container);

    let textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("class", "sportsInput");

    let buttonInput = document.createElement("input");
    buttonInput.setAttribute("type", "button");
    buttonInput.setAttribute("value", "-");

    container.appendChild(textInput);
    container.appendChild(buttonInput);

    ++count;
    buttonInput.onclick = function() {
        --count;
        let container = buttonInput.parentNode;
        let child;
        for(child of container.children) {
            child.remove();
        }
        container.remove();
    }
}

submitButton.onclick = function() {
    let msg1, msg2, msg3, msg4;
    let language;
    msg1 = document.createElement("span");
    msg2 = document.createElement("span");
    msg3 = document.createElement("span");
    msg4 = document.createElement("span");

    resultsContainer.style.display = "flex";
    let msg1Content = document.getElementById("quest1").value;
    let msg2Content = document.getElementById("quest2").value;
    let msg4Content = document.getElementById("quest4").value;

    if(msg1Content == "" || msg2Content == "" || msg4Content == "" || !document.getElementById("quest2").checkValidity()) {
        msg1.textContent = "Заполните все поля правильно";
        results.appendChild(msg1);
        closeButton = document.createElement("input");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("value", "close");
        closeButton.setAttribute("id", "close-button");
        closeButton.onclick = onCloseButton;
        results.appendChild(closeButton);
        return;
    }

    msg1.textContent = "Your name is " + document.getElementById("quest1").value;
    msg2.textContent = "You are " + document.getElementById("quest2").value + " years old";

    if (selection.value != 3) {
        language = selection[selection.value].textContent;
    }
    else {
        language = elem.value;
        if (language == "") {
            msg1.textContent = "Заполните все поля правильно";
            results.appendChild(msg1);
            closeButton = document.createElement("input");
            closeButton.setAttribute("type", "button");
            closeButton.setAttribute("value", "close");
            closeButton.setAttribute("id", "close-button");
            closeButton.onclick = onCloseButton;
            results.appendChild(closeButton);
            return;
        }
    }
    msg3.textContent = "Your main language is " + language;
    msg4.textContent = "Your favourite sports: ";

    for (let element of document.getElementsByClassName("sportsInput")) {
        msg4.textContent += element.value + " ";
    }

    closeButton = document.createElement("input");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("value", "close");
    closeButton.setAttribute("id", "close-button");
    closeButton.onclick = onCloseButton;
    results.appendChild(msg1);
    results.appendChild(msg2);
    results.appendChild(msg3);
    results.appendChild(msg4);
    results.append(closeButton);

}



function onCloseButton() {
        results.innerHTML = "";
        resultsContainer.style.display = "none";
}

