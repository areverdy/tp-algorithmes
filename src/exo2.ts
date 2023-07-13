export const exoDeux = () => {
    console.log('essai tableau');
    
let tableau : number []=[];
let index = 0;
while (index<10){
    tableau[index]= index +1;
    index = index + 1;

}
console.log("voir le tableau",tableau)
console.log("1er element du tableau est :", tableau[0])
console.log("le dernier element du tableau est :", tableau.length-1)
console.log("4e element du tableau est :", tableau [3])

let tableaubis = tableau.map(
(val, index)=> {
    return val*2
}
) 
console.log("le 2e tableau valeurs doublees", tableaubis)
}
