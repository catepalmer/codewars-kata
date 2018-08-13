function validatePIN (pin) {
    return ((pin.length == 4 || pin.length == 6) && (pin.split('').every(char => /^\d+$/.test(char))))
}