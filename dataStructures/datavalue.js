"use strict";
const { Map } = require('immutable');

let DataValue = {};

DataValue.of = function (datacode, value) {
    return new DataValue.fn.init(datacode, value);
}


DataValue.fn = DataValue.prototype = {
    init: function(datacode, value) {
	let obj = { datacode: datacode, value: value};
	this.val = Map(obj);
    },

    map: function(fn) {
	let datacode = this.val.get("datacode");
	let value = fn(this.val.get("value"));
	return DataValue.of(datacode, value);
    }
};

DataValue.fn.init.prototype = DataValue.fn;

module.exports = DataValue;
