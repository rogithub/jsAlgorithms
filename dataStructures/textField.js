"use strict";

let of = (description, string) => {
    description: description, // this is a dataphrase
    value: value, // this can be any type, is generic. It might be a functor Maybe!
    validator: fn, // function returning promise<bool> (can it be a monad?)
    preRequisite: fn // function returning promise<bool> (can it be a monad?)
    fields: [field] //recursive set of field objects

};


module.exports = of;


// Monads
// Field Maybe monad
// Description adds string to a value (field)
// TextCode adds textcode to a Descriptor
// Prerequisite adds function returning promise<bool> to a Field
// Validator adds function returning promise<bool> to a Field
