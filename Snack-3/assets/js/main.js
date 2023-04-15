/*
CONSEGNA: Snack-3
    • Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

    • L'array generato da parte vostra dovrà essere di nomi o cose, ad esempio: ['alberto', 'michele','angelo','simone'].

    • La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri (se come numeri,ad esempio, ho 2 e 4, devo inserire in un array nuovo l'elemento in posizione 3).
    
    • Usiamo i nuovi metodi degli array foreach o filter.
*/

const nomi = [
    'Antonio',
    'Paolo',
    'Giorgio',
    'Elisa',
    'Michele',
    'Barbara',
    'Camilla',
    'Francesca',
    'Chiara',
    'Fabio'
] 

console.log(nomi)

console.log(myFunction(nomi, 3, 8))

/********FUNCTION*******/
// function myFunction(array, min, max){
//     let newArray = []
//     for(let i = min; i <= max; i++){
//         newArray.push(array[i])
//     }
//     return(newArray)
// }

function myFunction(array, min, max){
    return array.filter((el, index) => index > min & index < max)
}