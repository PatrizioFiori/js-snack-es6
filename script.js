

// ------- SNACK 1 ----------- //

let arrayDiOggetti = [

{
    nome: "bici da corsa rossa",
    peso: 11
},

{
    nome: "bici da corsa blu",
    peso: 7
},

{
    nome: "bici da corsa nera",
    peso: 10
},

{
    nome: "bici da corsa verde",
    peso: 9
},

{
    nome: "bici da corsa gialla",
    peso: 9.5
},

{
    nome: "triciclo da corsa",
    peso: 4
},

]

let biciclettaPiuLeggera = arrayDiOggetti[0].peso
let nomeBiciclettaPiuLeggera = arrayDiOggetti[0].nome

for (let i in arrayDiOggetti ){
    
    if (biciclettaPiuLeggera > arrayDiOggetti[i].peso){
        biciclettaPiuLeggera = arrayDiOggetti[i].peso
        nomeBiciclettaPiuLeggera = arrayDiOggetti[i].nome
    } else {
    }
}

console.log(`La bici da corsa più leggera è: ${nomeBiciclettaPiuLeggera} dal peso di: ${biciclettaPiuLeggera} kg`);

console.log("===============================================");



// ------- SNACK 2 ----------- //

let arraySquadraCalcio = [

{
    nome: "squadraRossa",
    punti: 0,
    falli: 0
},

{
    nome: "squadraBlu",
    punti: 0,
    falli: 0
},

{
    nome: "squadraVerde",
    punti: 0,
    falli: 0
},

{
    nome: "squadraNera",
    punti: 0,
    falli: 0
},

{
    nome: "squadraGialla",
    punti: 0,
    falli: 0
},

]


let puntiRandomValue = 0 
let falliRandomValue = 0
let squadreNomeAndFalli = []

for (let i in arraySquadraCalcio){
    arraySquadraCalcio[i].punti = Math.floor(Math.random() * 10 )
    arraySquadraCalcio[i].falli = Math.floor(Math.random() * 10 )
}

for (let squadra of arraySquadraCalcio )
    squadreNomeAndFalli.push({ 
        nome: squadra.nome, 
        falli: squadra.falli 
    });

console.log(squadreNomeAndFalli);

console.log("===================================");



// ------- SNACK 3 ----------- //