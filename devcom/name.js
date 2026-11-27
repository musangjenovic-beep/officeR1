import { DD } from "./base_2.js";
import { Btn } from "./Btn.js";
export function datas(texte){
   
  let qs=texte.toLowerCase();
  if(qs.trim()==="")return;

  const pps=DD.filter(p => p.nom.toLowerCase().includes(qs.toLowerCase()));
  if(pps.length===0){
    return{
      rrppss:"je ne rien trouver !"
    }
   ;
  }
else if (pps.length === 1){
  return{
    rrppss:pps[0].nom,
    nom:pps[0].nom,
    date:pps[0].naissance,
    description:pps[0].description,
    sexe:pps[0].sexe,
    l_naissance:pps[0].lieu_naissance,
    l_mort:pps[0].lieu_mort,
    mort:pps[0].lieu_mort,
    image:pps[0].mort,
    professions:pps[0].professions,
    fonctions:pps[0].fonctions,
    resume:pps[0].resume,
    naissance:pps[0].naissance

  }
    
}else{
  let nms=[];
  let mem=[];
  
  for (let d=0 ;d < pps.length; d++){
    let nm=pps[d].nom;
    let tt=[d+1,nm].join(" ");
    nms.push(tt);
    mem.push(pps[d]);
  }
  return{
    rrppss:`je trouver ${pps.length} noms dans ma base \n ${nms.join("\n")}`,
    memoire:mem
  }

};

}



