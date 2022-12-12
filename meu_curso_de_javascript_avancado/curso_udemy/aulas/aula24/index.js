const hora = 13;
// Estou falando para a linguagem executar a ação caso a minha hora for de 0 até 12
// If pode ser usado sozinho
if (hora <= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora > 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Erro");
}
