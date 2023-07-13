import { maxHeaderSize } from "http";

export const exoquatre = () => {
        console.log('tableau élections');

    const NB_VOTES = 1000
    const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    let tableauvotes = candidats.map(() => {
        return 0
    });
    console.log(tableauvotes)
    
    for (let i = 0; i<NB_VOTES; i++) {
        tableauvotes[myrandom(candidats.length)]++;        
    }

    console.log(tableauvotes)
    
    function myrandom(max:number) {
            return Math.floor(Math.random()*max)
    }

    let votecandidats = candidats.map(
        (nom, index) => {
            return nom + " a eu " + tableauvotes[index] + " votes"
        }
    )

    votecandidats.forEach( (affichage) => {
        console.log(affichage)
    })
    
    let max = Math.max (...tableauvotes)

    console.log("1er candidat",max)

    console.log(candidats);
    console.log(tableauvotes);
    let qualifies = []
    
    for (let index = 0; index < tableauvotes.length; index++) {
        const element = tableauvotes[index];
        if(element === max){
            qualifies .push(element)
        }
       
    console.log("qualifies",qualifies)    
    }

  

}
        
