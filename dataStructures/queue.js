

let Queue = function () {
    let items = [];
    this.enqueue = function (element) {
        items.push(element);
    }
    this.dequeue = function () {
        return items.shift();
    }

    this.isEmpty = function () {
        return items.length === 0;
    }
    this.size = function () {
        return items.length;
    }
    this.clear = function () {
        items = [];
    }
    this.print = function () {
        console.log(items.toString());
    }
};


module.exports = Queue;


