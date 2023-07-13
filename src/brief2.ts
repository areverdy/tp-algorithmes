export const brief2 = () => {

    // 
    console.log('le train');
    
    let nbredepassagerstotal = 0
    let tableau : number []=[];
    let index = 0;
    while (index<10) {
        tableau[index] = index +3;
        index = index + 1;
    }

    console.log(tableau)

    let nbredepassagers = tableau.map((element, index) => {
        return element*3;
    });
    console.log("résultats",nbredepassagers)


    nbredepassagers.forEach((element, index) => {
        nbredepassagerstotal= nbredepassagerstotal+element ;
    });

    console.log("totalvoyageurs", nbredepassagerstotal)

    let vitessedutrain = 92
    function myrandom(nbPossibilites:number) {
        return Math.floor(Math.random()*nbPossibilites)
    }

    let nbkimparcourus = 0

    while(nbredepassagerstotal>0) {
        const random = myrandom(nbredepassagers.length)
        nbredepassagers[random] = nbredepassagers[random]-1;

        nbredepassagers = nbredepassagers.filter( (value) => {
            return value>0
        })

        console.log(nbredepassagers)
        const vitesseActuelle = vitessedutrain+( (tableau.length-nbredepassagers.length)*10
        )
        const kmparcourusparmn =vitesseActuelle/60
        console.log(vitesseActuelle, kmparcourusparmn)
        nbkimparcourus = nbkimparcourus + kmparcourusparmn
        nbredepassagerstotal = nbredepassagerstotal - 1
    }

    console.log("km parcourus au total", nbkimparcourus)

    // const nbTour = 3000
    // let total = 0
    // for (let tour = 0; tour < nbTour; tour++) {
    //     let a = 2
    //     for (let i = 0; i < 100; i++) {
    //         a += Math.floor(Math.random() * 12)        
    //     }
    //     total += a
    //     console.log('a', a)
    // }
    // const moyenne = total / nbTour
    // console.log('moyenne', moyenne);

    const nbvoyages = 100
    let totalkm = 0
    for (let tour =0; tour < nbvoyages; tour++) {
        let a = 0
        for (let i =0; i < 100; i++) {
            a +=Math.floor(Math.random()*nbvoyages)
        }
        totalkm +=a
        console.log("totalkm", totalkm)
    }
    
    
}

// correction de Thomas
const NB_WAGONS = 10
const PREMIER_WAGON = 3
const VITESSE_INITIALE = 92
const AUGMENTATION_VITESSE = 10

function getNbKmParcourus(){
    let train : number[] = []
    let vitesseActuelle = VITESSE_INITIALE
    let nbKmParcourus = 0

    for (let index = PREMIER_WAGON; index < NB_WAGONS + PREMIER_WAGON; index++) {
        train.push(index * 3)
    }

    console.log('train initial', train)

    for (let index = PREMIER_WAGON; index < NB_WAGONS + PREMIER_WAGON; index++) {
        train.push(index * 3)
    }

    while(train.length > 0){
        // Supprimer un passager
        const randomWagonIndex = Math.floor(Math.random() * train.length)
        train[randomWagonIndex]--
        // Valider que le wagon de ce passager n'est pas vide
        if(train[randomWagonIndex] === 0){
            train = train.filter( (_, i) => i !== randomWagonIndex)
            vitesseActuelle += AUGMENTATION_VITESSE
        }
        // Calculer le nombre de km parcouru cette minute
        const nbKmParcourusCetteMinute = vitesseActuelle / 60
        nbKmParcourus += nbKmParcourusCetteMinute

        // Afficher les informations
        console.log('un passager enlevé du train', train, vitesseActuelle, nbKmParcourusCetteMinute)
    }

    console.log('nombre de kilomètres parcourus', nbKmParcourus)
    return nbKmParcourus
}

const NB_VOYAGES = 100
let totalKmParcourus = 0

for (let index = 0; index < NB_VOYAGES; index++) {
    totalKmParcourus += getNbKmParcourus()
}

console.log('fin des voyages', totalKmParcourus, totalKmParcourus / NB_VOYAGES)