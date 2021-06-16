export const memAddressIncrement = ( currentAddress ) => {
    let address = "";
    if (parseInt(currentAddress, 16) + 1 < 16) {
        address = "0" + (parseInt(currentPCValue, 16) + 1).toString(16).toUpperCase()
    } else {
        address = (parseInt(currentAddress, 16) + 1).toString(16).toUpperCase()
    } 
    return address;
}