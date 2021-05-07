

module.exports = (arr) => {

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
