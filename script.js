

// ------- SNACK 1 ----------- //

let arrayDiOggetti = [

bici1 = {
    nome: "bici da corsa rossa",
    peso: 11
},

bici2 = {
    nome: "bici da corsa blu",
    peso: 7
},

bici3 = {
    nome: "bici da corsa nera",
    peso: 10
},

bici4 = {
    nome: "bici da corsa verde",
    peso: 9
},

bici5 = {
    nome: "bici da corsa gialla",
    peso: 9.5
},

bici6 = {
    nome: "triciclo da corsa",
    peso: 4
},

]

let biciclettaPiuLeggera = arrayDiOggetti[0].peso
let nomeBiciclettaPiuLeggera = arrayDiOggetti[0].nome
console.log(biciclettaPiuLeggera);

for (let i in arrayDiOggetti ){
    
    if (biciclettaPiuLeggera > arrayDiOggetti[i].peso){
        biciclettaPiuLeggera = arrayDiOggetti[i].peso
        nomeBiciclettaPiuLeggera = arrayDiOggetti[i].nome
    } else {
    }
}

console.log(`La bici da corsa più leggera è: ${nomeBiciclettaPiuLeggera} dal peso di: ${biciclettaPiuLeggera} kg`);




// ------- SNACK 2 ----------- //




// ------- SNACK 3 ----------- //