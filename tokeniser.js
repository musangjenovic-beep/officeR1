export function tokeniser(mots){
    const STOPWORDS=new Set([
        "le", "la", "les", "un", "une", "des", "et", "ou", "mais", "donc", "or", "ni", "car",
        "a", "de", "en", "dans", "sur", "sous", "avec", "pour", "par", "chez", "vers",
        "je", "tu", "il", "elle", "nous", "vous", "ils", "elles","on","ce","cette","ces","mon","ton",
        "son","notre","votre","leur",
        "qui", "que", "quoi", "dont", "ou", "quand", "comment", "combien",
        "si", "alors", "ainsi", "tandis", "pendant", "depuis", "avant", "apres",
    ]);
    if (typeof mots !== "string") {
        return [];
    }

    return mots.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .split(/\s+/)
        .filter(mot => mot.length > 1 && !STOPWORDS.has(mot));
}