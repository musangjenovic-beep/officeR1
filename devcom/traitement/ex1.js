import { connaissances } from "./connaisence.js";
import { normaliser } from "./normaliser.js";
import { tokeniser } from "./tokeniser.js";
import { Btn } from "../Btn.js";
import { a_map, b_map } from "./neo_map.js";
import { classer } from "./classer.js";


function sas(){
    let aff=document.getElementById("box");
const qs="quelle est la capitale du congo ?";
const qsn=normaliser(qs);
const token=tokeniser(qsn);
const resultat=a_map(token);
const rl=classer(resultat);
const aa=b_map(resultat);

aff.innerText=rl[0].nom;
console.log(aa);
console.log(resultat);

}
Btn("nbn",sas)
