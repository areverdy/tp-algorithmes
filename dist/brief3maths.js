"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brief3lesmaths = void 0;
const brief3lesmaths = () => {
    console.log('les maths');
    function additionSimple(a, b) {
        if (a < 1 || a > 9 || b < 1 || b > 9) {
            throw new Error("Les nombres doivent être compris entre 1 et 9");
        }
        return a + b;
    }
    console.log("résultat addition", additionSimple(2, 5));
    function additionboostee(a, b) {
        let res;
        if (a === undefined) {
            a = 0;
        }
        if (b === undefined) {
            b = 0;
        }
        if (a === 0) {
            res = b;
        }
        else if (b === 0) {
            res = a;
        }
        else {
            res = additionSimple(a, b);
        }
        return res;
    }
    console.log(additionboostee(0, 2));
    console.log(additionboostee(3, 0));
    console.log(additionboostee(2, 2));
    console.log(additionboostee(0, 0));
    function explose(nb) {
        let res = [];
        let nbToModulo = nb;
        while (nbToModulo > 0) {
            res.push(nbToModulo % 10);
            nbToModulo = Math.floor(nbToModulo / 10);
        }
        return res;
    }
    function additiongdnombre(a, b) {
        const nbUnExplose = explose(a);
        const nbDeuxExplose = explose(b);
        let res = [];
        let retenue = 0;
        for (let index = 0; index < Math.max(nbUnExplose.length, nbDeuxExplose.length); index++) {
            let result = additionboostee(nbUnExplose[index], nbDeuxExplose[index]) + retenue;
            if (result > 9) {
                retenue = 1;
                result = result % 10;
            }
            else {
                retenue = 0;
            }
            res.push(result);
        }
        if (retenue) {
            res.push(1);
        }
        console.log("exploses", nbUnExplose, nbDeuxExplose, res);
        let result = res.reverse().join('');
        return parseInt(result);
    }
    console.log("testadditiongdnbre", additiongdnombre(34, 45));
};
exports.brief3lesmaths = brief3lesmaths;
