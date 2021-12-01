const fs = require('fs');

const lines = fs.readFileSync('day1.txt', {encoding: 'utf8'}).split('\n').filter(x => x).map(x => parseInt(x));

console.log(lines);

let a = 1;
for (let j = 0; j < lines.length; j++) {
    let finalA = lines[j] + lines[j+1] + lines[j+2];
    let finalB = lines[j+1] + lines[j+2] + lines[j+3];
    if(finalA < finalB){
    console.log(a++);}
}

