var wins = 100; // Atualize com a quantidade de vitórias desejada
var defals = 0; // Atualize com a quantidade de derrotas desejada

function rankeamento(wins, defals) {
  var dif = wins - defals;
  var nivel;
  var saldoVitorias = wins;

  if (dif <= 10) {
    nivel = "Ferro";
  } else if (dif <= 20) {
    nivel = "Bronze";
  } else if (dif <= 50) {
    nivel = "Prata";
  } else if (dif <= 80) {
    nivel = "Ouro";
  } else if (dif <= 90) {
    nivel = "Diamante";
  } else if (dif < 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  console.log(`Você é um herói com um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`);
}

rankeamento(wins, defals);
