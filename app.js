import {Btn} from "./Btn.js";
import {reponse} from "./reponse.js";
import { REGLE } from "./type.js";

function trs() {
    const af = document.getElementById("rps");
    const texte = document.getElementById("mot");
    const resultat = reponse(texte.value);
    af.innerText = resultat.score;
    for (const regle of REGLE){
        for(const mot of regle.mots){
            console.log(mot);
            console.log(regle.type);
        };
    };
}
Btn("btn", trs);