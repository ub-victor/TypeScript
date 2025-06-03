var character = 'victor';
console.log("Hello, ".concat(character, "!"));
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return Math.PI * diameter;
};
console.log(circ(10));
