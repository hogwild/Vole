import { memAddressIncrement } from "./memAddressIncrement.js";

export const load = () => {
    let input = document.getElementById("code").value;
    let code = parseProgram(input);
    let memAddress = "A0";
    for(let i=0; i<code.length; i++){
        document.getElementById("mem"+memAddress).value = code[i].slice(0, 2);
        memAddress = memAddressIncrement(memAddress);
        document.getElementById("mem"+memAddress).value = code[i].slice(2, 4); 
        memAddress = memAddressIncrement(memAddress); 
    };
};

const parseProgram = (str) => {
    let p = str.split('\n')
        .filter(w => {
            if(w.length === 0 || w[0] === '#'){
                return false
            }
            return true
        }).map(w => {
            return w.substr(0, 4)
        });
    // let q = p.map(w => {
    //    return w.substr(0, 4)
    // });
    //console.log(p);
    return p;
};