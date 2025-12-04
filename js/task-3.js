function checkForSpam(message) {
    const lowerCase = message.toLowerCase();
    const haveSpam = lowerCase.includes("spam");
    const haveSale = lowerCase.includes("sale")
    if (haveSale || haveSpam) {
        return true;
    } else {
        return false;
    }
}
