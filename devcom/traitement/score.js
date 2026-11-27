import { normaliser } from "./normaliser.js";


export function cal_score(token,connaissance){
    let score=0;
    if(token.includes(normaliser(connaissance.sujet))){
        score +=5
    }
    if(token.includes(normaliser(connaissance.objet))){
        score +=5
    }
    if(token.includes(normaliser(connaissance.relation))){
        score +=5
    }
    return score
}