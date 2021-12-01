const fs = require('fs');

const lines = fs.readFileSync('day1.txt', {encoding: 'utf8'}).split('\n').filter(x => x).map(x => parseInt(x));

console.log(lines);

let a = 1;
for (let i = 0; i < lines.length; i++) {
		if(lines[i] < lines[i+1]) {
			console.log(a++);
		}
}

