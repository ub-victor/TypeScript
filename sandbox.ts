var character = 'victor';
console.log(`Hello, ${character}!`);
var inputs = document.querySelectorAll('input');
console.log(inputs);


inputs.forEach(input => {
  console.log(input);
});


const circ = (diameter: number) => {
  return Math.PI * diameter;
};
console.log(circ(10)); 