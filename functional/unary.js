"use strict";

module.exports = (fn) => {
    return fn.length === 1 ? fn : (arg) => fn(arg)
};


