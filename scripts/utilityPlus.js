// array
let seats = [];
let select = ['select-1', 'select-2', 'select-3', 'select-4'];
let seat = ['seat-1', 'seat-2', 'seat-3', 'seat-4'];
// variables
let totalPrice = 0;
let grandTotal = 0;

// selecting seats for buying ticket
function play(id) {
    const availableSeat = readIntById('available-seat');
    const selectedSeat = readIntById('selected');

    // checking the already exist or not
    let isExist = false;
    let index;
    for (let i = 0; i < 4; i++) {
        if (id === seats[i]) {
            isExist = true
            index = i;
        }
    }

    // if exist
    if (isExist) {
        const available = availableSeat + 1;
        const selected = selectedSeat - 1;

        updateIntById('available-seat', available);
        updateIntById('selected', selected);

        recoverBackgroundColor(id);

        seats.splice(index, 1);
        let price = 0;

        for (let i = 0; i < 4; i++) {
            if (seats.length > i) {
                let showId = select[i];
                let sId = seat[i];
                let id = seats[i];

                displayElementByIdTicket(showId, id, sId);
                price = price + 550;
            } 
            else {
                let showId = select[i];
                hideElementById(showId)
            }
        }

        totalPrice = price;
        updateIntById('total-price', totalPrice);

        if (totalPrice >= 2200) {
            enableById('apply-coupon');
        }

        grandTotal = totalPrice;
        updateIntById('grand-total', grandTotal);
    }

    // if not exist
    else if (selectedSeat < 4) {
        const available = availableSeat - 1;
        const selected = selectedSeat + 1;

        updateIntById('available-seat', available);
        updateIntById('selected', selected);

        removeBackgroundColorById(id);
        addBackgroundColorById(id);

        seats.push(id);
        let price = 0;

        for (let i = 0; i < 4; i++) {
            if (seats.length > i) {
                let showId = select[i];
                let sId = seat[i];
                let id = seats[i];

                displayElementByIdTicket(showId, id, sId);
                price = price + 550;
            }
        }

        totalPrice = price;
        updateIntById('total-price', totalPrice);

        if (totalPrice >= 2200) {
            enableById('apply-coupon');
        }

        grandTotal = totalPrice;
        updateIntById('grand-total', grandTotal);
    }
    // more than 4 selected
    else {
        alert("you can buy maximum 4 ticket at a time.");
    }
}

// functions for apply promo code
function applyCoupon() {
    const coupon = inputValueById('enter-coupon');

    let grandPrice = grandTotal;
    let discountPrice = 0;

    if (coupon === 'NEW15') {
        grandPrice = grandPrice - (totalPrice * (15 / 100));
        grandTotal = grandPrice;
        discountPrice = totalPrice * (15 / 100);
    }
    else if (coupon === 'Couple 20') {
        grandPrice = grandPrice - (totalPrice * (20 / 100));
        grandTotal = grandPrice;
        discountPrice = totalPrice * (20 / 100);
    }
    else {
        alert("Enter a valid coupon.");
    }

    updateIntById('grand-total', grandTotal);

    hideElementById('apply-coupon-box');
    displayElementById('discount-box');
    displayElementById('discount-text');
    updateIntById('discount-amount', discountPrice);
}
