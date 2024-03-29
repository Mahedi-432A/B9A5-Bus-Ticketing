// see all offers function
function seeAll() {
    alert("No other offers available now.");
};

// select seats function
function selectSeat() {
    const availableSeat = readIntById('available-seat');
    console.log(availableSeat);

    updateIntById('selected', 4);
}

// select seats for buying ticket
function A1() {
    const call = play('A1');
}

function A2() {
    const call = play('A2');
}

function A3() {
    const call = play('A3');
}

function A4() {
    const call = play('A4');
}

function B1() {
    const call = play('B1');
}

function B2() {
    const call = play('B2');
}

function B3() {
    const call = play('B3');
}

function B4() {
    const call = play('B4');
}

function C1() {
    const call = play('C1');
}

function C2() {
    const call = play('C2');
}

function C3() {
    const call = play('C3');
}

function C4() {
    const call = play('C4');
}

function D1() {
    const call = play('D1');
}

function D2() {
    const call = play('D2');
}

function D3() {
    const call = play('D3');
}

function D4() {
    const call = play('D4');
}

function E1() {
    const call = play('E1');
}

function E2() {
    const call = play('E2');
}

function E3() {
    const call = play('E3');
}

function E4() {
    const call = play('E4');
}

function F1() {
    const call = play('F1');
}

function F2() {
    const call = play('F2');
}

function F3() {
    const call = play('F3');
}

function F4() {
    const call = play('F4');
}

function G1() {
    const call = play('G1');
}

function G2() {
    const call = play('G2');
}

function G3() {
    const call = play('G3');
}

function G4() {
    const call = play('G4');
}

function H1() {
    const call = play('H1');
}

function H2() {
    const call = play('H2');
}

function H3() {
    const call = play('H3');
}

function H4() {
    const call = play('H4');
}

function I1() {
    const call = play('I1');
}

function I2() {
    const call = play('I2');
}

function I3() {
    const call = play('I3');
}

function I4() {
    const call = play('I4');
}

function J1() {
    const call = play('J1');
}

function J2() {
    const call = play('J2');
}

function J3() {
    const call = play('J3');
}

function J4() {
    const call = play('J4');
}



// Apply coupon code to get reward
function promo(){
    const discount = applyCoupon('apply-coupon');
}

// ready to confirm and enable next button
// functions of input field to confirm buying 
function fillInputToBuy(){
    const pName = inputValueById('passenger-name');
    const phoneNumber = inputValueById('phone-number');

    if(pName && phoneNumber && seats.length >= 1){
        enableById('confirm-next');
    }
}

// confirm and pressed next button
function confirmedAndNext(){
    hideElementById('header');
    hideElementById('section-1');
    hideElementById('section-2');
    hideElementById('footer');
    displayElementById('success-popup');

    // remove values
    updateIntById('selected', 0);
    updateIntById('total-price', 0);
    updateIntById('grand-total', 0);
    updateIntById('discount-amount', 0);

    // remove values input field
    setInputValueById('enter-coupon','');
    setInputValueById('passenger-name','');
    setInputValueById('phone-number','');
    setInputValueById('email','');

    // hide and show
    hideElementById('discount-box');
    hideElementById('discount-text');
    displayElementById('apply-coupon-box');
    disableById('apply-coupon')

    // loops
    let sit = seat;
    let elect = select;
    let booked = seats;
    for(let i of sit){
        updateIntById(i, 'NA');
    }
    for(let j of elect){
        hideElementById(j);
    }
    for(let k of booked){
        disableById(k);
    }
}

// continue and buy again
function continueAndBuyAgain(){
    displayElementById('header');
    displayElementById('section-1');
    displayElementById('section-2');
    displayElementById('footer');

    hideElementById('success-popup');
    disableById('confirm-next');

    // clear selected seats
    seats = [];
}