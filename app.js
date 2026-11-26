import {aBtn, Btn, dBtn} from "./Btn.js";
import {reponse} from "./reponse.js";
import { REGLE } from "./type.js";
import {aff} from "./devcom/Af.js";

function trs() {
    const af=document.getElementById('box_msg');
    const texte = document.getElementById("mot");
    const tx=texte.value;
    if(tx.trim()==="")return;
    const resultat = reponse(tx);
    texte.value="";

    const div_prs=document.createElement("div");
    div_prs.classList.add("prs");
    div_prs.innerText=tx;
    af.appendChild(div_prs);

const div_char=document.createElement("div");
    div_char.classList.add("rps");
    div_char.innerText="L'ia est entrain d'ecrire...";
    af.appendChild(div_char);
    dBtn("btn");

setTimeout(()=>{
    af.removeChild(div_char);
    aBtn("btn");
     const div_ai=document.createElement("div");
    div_ai.classList.add("rps");
     af.appendChild(div_ai);
  aff(resultat.reponse,div_ai);
},800);

   

    
}
Btn("btn", trs);