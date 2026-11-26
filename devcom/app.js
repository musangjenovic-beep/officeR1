import { data } from "./geo.js";
import { DD } from "./base_2.js";
import { Btn } from "./Btn.js";
function datas(){
    let aa=document.getElementById("box");
  let bb=document.getElementById("rp");
    const question="aketyi";
    for (const [cle,valeur] of Object.entries(data[0])){
    if(question.includes(cle)){
        aa.innerText=`chef lieu : ${valeur.chef_lieu} c'est un ${valeur.description}`;
    }else{
      aa.innerText="rien trouve dans la base";
    }
    };
  let qs=document.getElementById("txt").value.toLowerCase();
  if(qs.trim()==="")return;
  let trouve= false;
  for(let i = 0; i < DD.length; i++) {
  
  if(DD[i].nom.toLowerCase().includes(qs)){
    console.log(DD[i].nom);
    trouve= true;
  }
  };
  if(!trouve){
    console.log("rien trouver");
  };
  const pps=DD.filter(p => p.nom.toLowerCase().includes(qs.toLowerCase()));
  if(pps.length===0){
    bb.innerText="je ne rien trouver !";
  }
else if (pps.length === 1){
    bb.innerText=pps[0].nom;
}else{
  let nms=[];
  let mem=[];
  
  for (let d=0 ;d < pps.length; d++){
    let nm=pps[d].nom;
    let tt=[d+1,nm].join(" ");
    nms.push(tt);
    mem.push(pps[d]);
  }
  bb.innerText=nms.join("\n");
  bb.innerText=`je trouver ${pps.length} noms dans ma base \n ${nms.join("\n")}`;
};

}
Btn("dam",datas)
