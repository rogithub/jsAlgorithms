let treeToArrays = require('./treeToArrays');

module.exports = (arr) => {
    let lists = treeToArrays(arr);
    let l = `\n`;
    let text = '';
    let spaces = (i) => Array(i).join(" ");

    let pad = lists[0][0].toString().length;
    let max = lists[lists.length - 1].length;
    let print = (i) => i === undefined ? '*'.padStart(pad) : i.toString().padStart(pad);
    max = max * 2; // 2 width ratio ( it can be increased by 2 multiples 2, 4, 8, etc.)

    for (let i = 0; i < lists.length; i++) {
        for (let j = 0; j < lists[i].length; j++) {
            text += spaces(max) + print(lists[i][j]) + spaces(max);
        }
        max = max / 2;
        text += l;
    }

    console.log(text);

    return text;
}
