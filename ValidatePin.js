function validatePIN (pin) {
    let numPin = Number(pin)
    /* const numPin = (pin) => /^\d+$/.test(pin);
    if (pin.length == 4 || pin.length == 6) {
        console.log(true);
    } else {
        console.log(false);
    } */
    console.log(numPin.length);
}

validatePIN(1234)