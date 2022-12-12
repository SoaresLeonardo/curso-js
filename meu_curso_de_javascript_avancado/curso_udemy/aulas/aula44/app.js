// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('NaoExisto não existe')
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x ou y precisam ser números!");
  }

  return x + y;
}

try {
  console.log(soma(3, 3));
  console.log(soma("3", 3));
} catch (err) {
  console.log(err);
}
