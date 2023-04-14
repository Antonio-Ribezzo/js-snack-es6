/*
CONSEGNA: Snack-1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//creazione array di oggetti
const bycicle = [
    bici1 = {
        nome : 'bici-a',
        peso : 7.2
    },
    bici2 = {
        nome : 'bici-b',
        peso : 7
    },
    bici3 = {
        nome : 'bici-c',
        peso : 4.5
    },
    bici4 = {
        nome : 'bici-d',
        peso : 5.5
    },
    bici5 = {
        nome : 'bici-e',
        peso : 6
    },
    bici6 = {
        nome : 'bici-f',
        peso : 5
    }
]

console.log(bycicle)

//individuo l'elemento dell'html dove inserire le informazioni
const contenitore = document.getElementById('contenitore')

//inizializzo un array vuoto che andrà a contenere i pesi di tutte le bici
let arrayPesi = []
console.log(arrayPesi)

// con un ciclo forEach scorro gli elementi dell'array di oggetti e faccio un push dei pesi nell'array precedentemente creato
bycicle.forEach(element => {
    const {nome} = element
    console.log(nome)
    const {peso} = element
    console.log(peso)
    arrayPesi.push(peso)
});

console.log(arrayPesi)

//salvo in una variabile la posizione nell'array dell'elemento più piccolo
let index = arrayPesi.indexOf(Math.min(...arrayPesi))
console.log(index)

// inserisco le informazioni con la creazione di elemnti nel DOM
contenitore.innerHTML+=`
<div class="col-12 text-center">
    <h1 class="text-success">La bici più leggera è la bici numero ${index + 1} che si chiama ${bycicle[index].nome} e pesa ${bycicle[index].peso} kg</h1>
</div>
`


