// get int from element by id
function readIntById(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const elementNumbers = parseInt(elementText);
    
    return elementNumbers;
}

// get element by id
function getElementById(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;

    return elementText;
}

// update int for element by id
function updateIntById(id, n){
    const element = document.getElementById(id);
    element.innerText = n;
}

// disable button by id
function disableById(id){
    const button = document.getElementById(id);
    button.disabled = true;
}

// enable button by id
function enableById(id){
    const button = document.getElementById(id);
    button.disabled = false;
}

// remove background color by id
function removeBackgroundColorById(id){
    const element = document.getElementById(id);
    element.classList.remove('bg-[#f7f8f8]');
}

// add background color by id
function addBackgroundColorById(id){
    const element = document.getElementById(id);
    element.classList.add('bg-[#1dd100]');
}

// display element by id for ticket of seat
function displayElementByIdTicket(showId, id, sId){
    const element = document.getElementById(showId);
    element.classList.remove('hidden');

    const getElement = getElementById(id);

    updateIntById(sId, getElement);
}

// hide element by id 
function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

// display element by id
function displayElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

// get value of input field by id
function inputValueById(id){
    const inputValue = document.getElementById(id);
    const inputText = inputValue.innerText;

    return inputText;
}
