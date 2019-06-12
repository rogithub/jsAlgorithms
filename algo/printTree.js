"use strict";

module.exports = (lists) => {
    let l = `\n`;
    let text = '';
    let print = (i) => i === undefined ? '-' : i.toString();
    let spaces = (i) => Array(i).join(" ");
    let max = 64;
    
    
    for (let i = 0; i < lists.length; i++) {
	for (let j = 0; j < lists[i].length; j++) {
	    text += spaces(max) + print(lists[i][j]) + spaces(max);
	}
	max = max / 2;
	text += `${l}`
    }

    return text;
}
