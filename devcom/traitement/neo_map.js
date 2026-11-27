import { cal_score } from "./score.js";
import { connaissances } from "./connaisence.js";

export function a_map(token){
const resultat=connaissances.map(function(info){
    return{
        nom:info.nom,
        objet:info.objet,
        relation:info.relation,
        sujet:info.sujet,
        score: cal_score(token,info),
        information:info
    };
});
return resultat;
}
export function b_map(infos){
    const resultat = infos.map(function(info){
        return info.relation +" : "+ info.objet;
    });
    return resultat
}