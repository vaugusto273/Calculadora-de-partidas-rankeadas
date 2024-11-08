/*
Instruções para entrega
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- ✅ Variáveis
- ✅ Operadores
- Laços de repetição
- ✅ Estruturas de decisões
- ✅ Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

/*
I Could choose to use a JSON Structury, like below, but i choose to follow the challenge
let playerinfos = {
    victory:,
    defeats: 
}
function calcranked(playerinfos){
    return (playerinfos.victory - playerinfos.defeats)
}
*/

function calcranked(victory, defeats){
    return balance = (victory - defeats);
}

let rank = "";
calcranked(101,0);

switch (true){
    case (balance <= 10): //I Could use the function inside the case, but I think this way is cleaner than writing every time case(calcranked(**winvariable**,**losevariable**) **condition**)
        rank = "Ferro";
        console.log(`O Herói tem saldo de ${balance} e está no nível de ${rank}`)
        break;
    case (balance >= 11 && balance <= 20):
        rank = "Bronze";
        console.log(`O Herói tem saldo de ${balance} e está no nível de ${rank}`);
        break;
    case (balance >= 21 && balance <= 50):
        rank = "Prata";
        console.log(`O Herói tem saldo de ${balance} e está no nível de ${rank}`);
        break;
    case (balance >= 51 && balance <= 80):
        rank = "Ouro";
        console.log(`O Herói tem saldo de ${balance} e está no nível de ${rank}`);
        break;
    case (balance >= 81 && balance <= 90):
        rank = "Diamante";
        console.log(`O Herói tem saldo de ${balance} e está no nível de ${rank}`);
        break;
    case (balance >= 91 && balance <= 100):
        rank = "Lendário";
        console.log(`O Herói tem saldo de ${balance} e está no nível de ${rank}`);
        break;
    case (balance >= 101):
        rank = "Imortal";
        console.log(`O Herói tem saldo de ${balance} e está no nível de ${rank}`);
        break;
    default:
        console.log("Error");
        break;
}