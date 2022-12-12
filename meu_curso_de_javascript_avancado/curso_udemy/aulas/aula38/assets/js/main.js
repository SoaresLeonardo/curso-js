const parafragos = document.querySelector(".paragrafos");

const ps = parafragos.querySelectorAll("p");

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
for (let p of ps) {
  console.log(p);
  p.style.color = "white";
  p.style.backgroundColor = backgroundColorBody;
}
