/*
CONSEGNA: Snack-2
    •Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

    •Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

    •Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let footballTeams = [
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lecce',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    }
]

// utilizzo un ciclo for per scorrere gli elementi dell'array e assegnare nuovi numeri randomici a quelle proprietà che sono settate a zero
for (let i = 0; i < footballTeams.length; i++) {
    footballTeams[i].falliSubiti=randomNumber()
    footballTeams[i].puntiFatti=randomNumber()
}

// stampo in console l'array di oggetti modificato
console.log(footballTeams)

// creo un nuovo array e con il "map" prendo l'array di partenza ed elimino la chiave puntiFatti
let newArray = footballTeams.map(({nome, falliSubiti}) => {
    return {nome, falliSubiti}
})

// stampo in console il nuovo array senza la chiave puntiFatti
console.log(newArray)

/******************My Functions******************/
//funzione che crea numeri randomici

function randomNumber(){
    return Math.floor(Math.random() * 101)
}