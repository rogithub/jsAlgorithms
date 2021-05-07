

let ArrayList = function () {
    let array = [];
    this.insert = function (element) {
        array.push(element);
    }

    this.bubbleSort = function () {
        let length = array.lenght;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; i++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
    }

    this.toString = function () {
        return array.join();
    }
};


module.exports = ArrayList;


