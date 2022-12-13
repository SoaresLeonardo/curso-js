// let x = 0

// while(x <= 10) {
//     console.log(x)
//     x++
// }

// // let x = 0
// // let nome = 'Leonardo'

// // while(x < nome.length) {
// //     console.log(nome[x])
// //     x++
// // }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

let rand = random(1, 50);

while (rand !== 10) {
  rand = random(1, 50);
  console.log(rand);
}
