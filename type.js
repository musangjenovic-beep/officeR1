export const REGLE = [
    {
        mots: ["compare", "difference", "differences", "quel est le mieux", "contrairement"],
        type: "comparaison"
    },
    {
        mots: ["definition", "definir", "definit", "signifie", "cest quoi", "qu'est-ce que"],
        type: "definition"
    },
    {
        mots: ["combien de temps", "depuis combien", "pendant combien", "longtemps", "durée"],
        type: "duree"
    },
    {
        mots: ["qui est", "qui a", "qui sont", "nom du", "président"],
        type: "identification"
    },
    {
        mots: ["où", "ou se trouve", "localisation", "situe", "située", "adresse"],
        type: "localisation"
    },
    {
        mots: ["combien", "nombre", "quantite", "quantité", "mesure", "taille"],
        type: "quantite"
    },
    {
        mots: ["quand", "date", "année", "jour", "mois", "periode", "période"],
        type: "date"
    },
    {
        mots: ["pourquoi", "cause", "raison", "origine", "parce que"],
        type: "cause"
    },
    {
        mots: ["comment", "comment faire", "procedure", "procédure", "maniere", "manière"],
        type: "methode"
    },
    {
        mots: ["explique", "explication", "detaille", "détaillé", "decris", "décris"],
        type: "explication"
    },
    {
        mots: ["liste", "énumère", "enumere", "donne les", "quels sont", "types"],
        type: "liste"
    },
    {
        mots: ["avant", "apres", "après", "evolution", "histoire", "historique"],
        type: "historique"
    },
    {
        mots: ["fonction", "role", "rôle", "sert a", "sert à", "utilite", "utilité"],
        type: "fonction"
    },
    {
        mots: ["avantage", "benefice", "bénéfice", "inconvenient", "inconvénient", "problème"],
        type: "avantage_inconvenient"
    },
    {
        mots: ["peux-tu", "veux-tu", "merci", "bonjour", "salut", "au revoir"],
        type: "politesse"
    },
    {
        mots: ["exemple", "par exemple", "illustrer", "cas pratique"],
        type: "exemple"
    },
    {
        mots: ["vrai", "faux", "est-ce que", "confirme", "verifie", "vérifie"],
        type: "confirmation"
    },
    {
        mots: ["conseille", "suggere", "suggère", "recommande", "que faire", "besoin"],
        type: "suggestion"
    }
];

export const TYPES = [...new Set(REGLE.map(regle => regle.type))];
export const typeMots=[...new Set(REGLE.map(regle => regle.mots))];