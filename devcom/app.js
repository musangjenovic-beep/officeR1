import { Btn } from "./Btn.js";
import { datas } from "./name.js";
import { tokeniser } from "./tp.js";
function cal(){
let aff=document.getElementById("rp");
let mot=document.getElementById("txt").value;
let aa=datas(mot);
let a=aa.nom;
let b=aa.date;
let c=aa.resume;
let d=aa.professions;
let e=aa.sexe;


aff.innerText=`${e} ${d}`;
console.log(aa.memoire)

}

function ssa(){
    const ba="quelle est la capital de la rdc";
    let mama = tokeniser(ba);
    console.log(mama);
}

Btn("dam",ssa);