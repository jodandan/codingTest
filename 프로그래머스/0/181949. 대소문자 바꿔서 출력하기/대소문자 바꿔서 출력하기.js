const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    let strArray = [...str];
    
    let answerinput = [];
    strArray.map(a => {
        if(a === a.toUpperCase()) { 
             answerinput.push(a.toLowerCase());
            } else { 
             answerinput.push(a.toUpperCase());
            }
        }
    )
            console.log(answerinput.join(""));
});