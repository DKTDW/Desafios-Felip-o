let Nível = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Diamante" , "Lendário" , "Imortal"]
let Saldo = VitoriasEDerrotas(497 , 295);

function VitoriasEDerrotas(vitorias , derrotas) {
    let ResultadoFinal = vitorias - derrotas;
    return ResultadoFinal;
}

if (Saldo <= 10) {
    console.log("O Herói tem o saldo de " + Saldo + " vitórias e está no nível " + Nível[0]);
} else if (Saldo === 11 || Saldo <= 20 ) {
    console.log("O Herói tem o saldo de " + Saldo + " vitórias e está no nível " + Nível[1]);
} else if (Saldo === 21 || Saldo <= 50 ) {
    console.log("O Herói tem o saldo de " + Saldo + " vitórias e está no nível " + Nível[2]);
} else if (Saldo === 51 || Saldo <= 80 ) {
    console.log("O Herói tem o saldo de " + Saldo + " vitórias e está no nível " + Nível[3]);
} else if (Saldo === 81 || Saldo <= 90 ) {
    console.log("O Herói tem o saldo de " + Saldo + " vitórias e está no nível " + Nível[4]);
} else if (Saldo === 91 || Saldo <= 100 ) {
    console.log("O Herói tem o saldo de " + Saldo + " vitórias e está no nível " + Nível[5]);
} else {
    console.log("O Herói tem o saldo de " + Saldo + " vitórias e está no nível " + Nível[6]);
}