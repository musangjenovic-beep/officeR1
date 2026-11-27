export function gen_reponses(infos){
    let reponse="";
    infos.forEach(function(info){
        reponse += info.relation + " : "+info.objet +"\n";
    });
    return reponse;
}