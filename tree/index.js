
treeToArrays = (arr) => {

    let lists = [];

    let i = 0;
    let size = 1;
    while (i < arr.length) {
        let list = [];
        for (let y = 0; y < size; y++) {
            list.push(arr[i]);
            i++;
        }
        lists.push(list);
        size *= 2;
    }

    return lists;
}


let print = (arr) => {
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


let inArray = (arr, index) => index > -1 && index < arr.length;
let getParent = index => Math.floor((index - 1) / 2);

let getHeight = index => {
    let counter = 1;
    for (let i = index; i > 0; i = getParent(i)) {
        counter++;
    }
    return counter;
}

let traverseForward = (arr, fn, index) => {
    index = index || 0;
    if (inArray(arr, index) === false) return;

    let parent = getParent(index);
    let amILeft = parent === getParent(index + 1);
    let amIFirst = index === 0;

    fn({
        i: index,
        parent: amIFirst ? 0 : parent,
        left: amIFirst ? 0 : amILeft ? index : index - 1,
        right: amIFirst ? 0 : amILeft ? index + 1 : index,
    });

    traverseForward(arr, fn, index + 1);
};

let traverseBackward = (arr, fn, index) => {
    index = index || arr.length - 1;
    if (inArray(arr, index) === false) return;

    let parent = getParent(index);
    let amILeft = parent === getParent(index + 1);
    let amIFirst = index === 0;

    fn({
        i: index,
        parent: amIFirst ? 0 : parent,
        left: amIFirst ? 0 : amILeft ? index : index - 1,
        right: amIFirst ? 0 : amILeft ? index + 1 : index,
    });

    traverseBackward(arr, fn, index - 1);
};

module.exports = {
    inArray,
    getParent,
    traverseForward,
    print,
    getHeight
}

