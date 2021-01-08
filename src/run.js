/*functions for processing the instructions
1. loading the program into main memory (put the instructions into the main memory where stores instructions)
2. loading an instruction from the main memory (Program counter)
3. decoding input instruction which is a string (Instruction register)
4. handling different instructions
    (1) finding the register by its id
    (2) finding the memory cell by its address
    (3) changing the color of the specified register/memory cell
    (4) changing the value of the specified reigister/memory cell
*/

export function run (prgm) {
    let p = parseProgram(prgm);
    // let p = parseProgram(prgm);
    // p.filter(w => {

    // })

}

function decodeInstruction(str) {
   
}

function parseProgram(str) {
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
    console.log(p);
    return p;
}