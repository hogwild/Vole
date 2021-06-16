import { memAddressIncrement } from "./memAddressIncrement.js";


const getPCValue = () => {
    const PC = document.getElementById("PC");
    // console.log(typeof(PC.value));
    return PC.value;
};

const setPCValue = (value) => {
    const PC = document.getElementById("PC");
    PC.value = value;
};

const getIRValue = () => {
    const IR = document.getElementById("IR");
    // console.log(IR.value);
    return IR.value;
};

const setIRValue = (value) => {
    const IR = document.getElementById("IR");
    IR.value = value;
};

const getRegisterValue = (idx) => {
    const register = document.getElementById('reg'+idx);
    return register.value;
};

const setRegisterValue = (idx, value) => {
    const register = document.getElementById('reg'+idx);
    register.value = value;
};

const getMemoryValue = (idx) => {
    const memoryCell = document.getElementById('mem'+idx);
    return memoryCell.value;
};

const setMemoryValue = (idx, value) => {
    const memoryCell = document.getElementById('mem'+idx);
    memoryCell.value = value;
};

// const memAddressIncrement = ( currentPCValue ) => {
//     let address = "";
//     if (parseInt(currentPCValue, 16) + 1 < 16) {
//         address = "0" + (parseInt(currentPCValue, 16) + 1).toString(16).toUpperCase()
//     } else {
//         address = (parseInt(currentPCValue, 16) + 1).toString(16).toUpperCase()
//     } 
//     return address;
// }

function convert2base(value, base = 2) {
    var [integer, fraction = ''] = value.toString().split('.');

    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction
        .split('')
        .reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
};
function changeBackgroundColor(elementId){
    let id = "mem"+elementId;
    document.getElementById(id).style.backgroundColor="red";
    setTimeout(()=>{
        document.getElementById(id).style.backgroundColor="yellow";
    }, 300);
};
export const fetch = () => {
    let memAddress1 = getPCValue();
    let memAddress2 = memAddressIncrement(memAddress1)
    let IRValue = getMemoryValue(memAddress1) + getMemoryValue(memAddress2);
    setIRValue(IRValue);
    // console.log(memAddress2);
    changeBackgroundColor(memAddress1);
    changeBackgroundColor(memAddress2);
    //document.getElementById("mem"+memAddress1).style.backgroundColor="red";
    // console.log(element1);
    if (memAddress2 === "FF") {
        window.alert("Out of memory! Don't forget to add a halt instruction!");
    }
    setPCValue(memAddressIncrement(memAddress2));
    return IRValue;
};

export const execute = (instruction) => {
    const opcode = instruction.slice(0,1);
    const oprand = instruction.slice(1,4);
    // console.log(opcode);
    let stop = false;
    switch(opcode) {
        case '1': 
            var reg = oprand.slice(0, 1);
            var memAddress = oprand.slice(1, 3);
            // console.log(memAddress);
            setRegisterValue(reg, getMemoryValue(memAddress));
            break;
        case '2': 
            var reg = oprand.slice(0, 1);
            var memAddress = oprand.slice(1, 3);
            setRegisterValue(reg, value);
            break;
        case '3': 
            var reg = oprand.slice(0, 1);
            var memAddress = oprand.slice(1, 3);
            setMemoryValue(memAddress, getRegisterValue(reg));
            break;
        case '4': 
            var reg1 = oprand.slice(1, 2);
            var reg2 = oprand.slice(2, 3);
            setRegisterValue(reg2, getRegisterValue(reg1));
            break;
        case '5':
            var reg1 = oprand.slice(0, 1); 
            var reg2 = oprand.slice(1, 2);
            var reg3 = oprand.slice(2, 3);
            var value2 = getRegisterValue(reg2);
            var value3 = getRegisterValue(reg3);
            if (parseInt(value2, 16) + parseInt(value3, 16) <16 ){
                var value1 = "0" + (parseInt(value2, 16) + parseInt(value3, 16)).toString(16).toUpperCase();
            } else {
                var value1 = (parseInt(value2, 16) + parseInt(value3, 16)).toString(16).toUpperCase();
            }
            setRegisterValue(reg1, value1);
            break;
        case '6': 
            var reg1 = oprand.slice(0, 1); 
            var reg2 = oprand.slice(1, 2);
            var reg3 = oprand.slice(2, 3);
            var value2 = convert2base(getRegisterValue(reg2), 16);
            var value3 = convert2base(getRegisterValue(reg3), 16);
            var value1 = (value2 + value3).toString(16).toUpperCase();
            //var value1 = (parseInt(value2, 16) + parseInt(value3, 16)).toString(16).toUpperCase();
            setRegisterValue(reg1, value1);
            break;
        case '7': 
            var reg1 = oprand.slice(0, 1); 
            var reg2 = oprand.slice(1, 2);
            var reg3 = oprand.slice(2, 3);
            var value2Binary = parseInt(getRegisterValue(reg2), 16).toString(2);
            var value3Binary = parseInt(getRegisterValue(reg3), 16).toString(2);
            var value1Binary = "";
            if (value2Binary.length >= value3Binary.length) {
                value3Binary = "0".repeat(value2Binary.length-value3Binary.length) + value3Binary;
            } else {
                value2Binary = "0".repeat(value3Binary.length-value2Binary.length) + value2Binary;
            }

            for (let i=0; i<value2Binary.length; i++){
                if(value2Binary[i] === "1" || value3Binary[i] === "1" ){
                    value1Binary += "1";
                }else {
                    value1Binary += "0";
                };
            }
            //var value1Binary = value1Binary.split("").reverse().join("");
            // console.log(value2Binary);
            // console.log(value3Binary);
            // console.log(value1Binary)
            var value1 = parseInt(value1Binary, 2).toString(16).toUpperCase();
            setRegisterValue(reg1, value1);
            break;
        case '8': 
            var reg1 = oprand.slice(0, 1); 
            var reg2 = oprand.slice(1, 2);
            var reg3 = oprand.slice(2, 3);
            var value2Binary = parseInt(getRegisterValue(reg2), 16).toString(2);
            var value3Binary = parseInt(getRegisterValue(reg3), 16).toString(2);
            var value1Binary = "";
            if (value2Binary.length >= value3Binary.length) {
                value3Binary = "0".repeat(value2Binary.length-value3Binary.length) + value3Binary;
            } else {
                value2Binary = "0".repeat(value3Binary.length-value2Binary.length) + value2Binary;
            }

            for (let i=0; i<value2Binary.length; i++){
                if(value2Binary[i] === "1" && value3Binary[i] === "1" ){
                    value1Binary += "1";
                }else {
                    value1Binary += "0";
                };
            }
            var value1 = parseInt(value1Binary, 2).toString(16).toUpperCase();
            setRegisterValue(reg1, value1);
            break;
        case '9': 
            var reg1 = oprand.slice(0, 1); 
            var reg2 = oprand.slice(1, 2);
            var reg3 = oprand.slice(2, 3);
            var value2Binary = parseInt(getRegisterValue(reg2), 16).toString(2);
            var value3Binary = parseInt(getRegisterValue(reg3), 16).toString(2);
            var value1Binary = "";
            if (value2Binary.length >= value3Binary.length) {
                value3Binary = "0".repeat(value2Binary.length-value3Binary.length) + value3Binary;
            } else {
                value2Binary = "0".repeat(value3Binary.length-value2Binary.length) + value2Binary;
            };
            for (let i=0; i<value2Binary.length; i++){
                if(value2Binary[i] === "1" && value3Binary[i] === "0" || value2Binary[i] === "0" && value3Binary[i] === "1" ){
                    value1Binary += "1";
                }else {
                    value1Binary += "0";
                };
            };
            // console.log(value2Binary);
            // console.log(value3Binary);
            // console.log(value1Binary);
            var value1 = parseInt(value1Binary, 2).toString(16).toUpperCase();
            setRegisterValue(reg1, value1);
            break;
        case 'A': 
            var reg = oprand[0]; 
            var length = oprand[2];
            var value = parseInt(getRegisterValue(reg), 16).toString(2);
            if(value.length < 8) {
                value = "0".repeat(8-value.length) + value;
            };
            value = value.split("").slice(-length).join("") + value.slice(0, value.length-length);
            setRegisterValue(reg, parseInt(value, 2).toString(16).toUpperCase());
            break;
            
        case 'B': 
            var reg1 = oprand[0];
            var memAddress = oprand.slice(1, 3);
            var value0 = getRegisterValue("0");
            var value1 = getRegisterValue(reg1);
            if (value0 === value1){
                setPCValue(memAddress);
            }
            break;
        case 'C': 
            stop = true;
            break;
    };
    return stop;
};
