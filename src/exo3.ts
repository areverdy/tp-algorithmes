export const exotrois = () => {
    console.log('le foin');

    function avoirNbJourDeStock(stockInitial: number, nbMoutonInitial: number){
        const consomouton = 0.25;
        let nbrejrsstock = 0;
        let stockfoin = stockInitial;
        let nbremouton = nbMoutonInitial;
        let dureeviemouton = 1000;
    
        while (stockfoin > 0){
            if (nbrejrsstock===dureeviemouton-1)[
                nbremouton=nbremouton-1
            ]
            stockfoin = stockfoin - consomouton*nbremouton
            nbrejrsstock = nbrejrsstock + 1
           
        }
        console.log("résultat", nbrejrsstock)
    }
    
    avoirNbJourDeStock(800, 2);
    avoirNbJourDeStock(20, 2);
    avoirNbJourDeStock(800, 5);

}
