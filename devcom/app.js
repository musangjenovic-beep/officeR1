import { data } from "./geo.js";
function datas(){
    let aa=document.getElementById("box");
    const question="aketi";
    for (const [cle,valeur] of Object.entries(data[0])){
    if(question.includes(cle)){
        console.log("chef lieu :", valeur.chef_lieu," c'est un ",valeur.description);
    }
    }
}
datas()
