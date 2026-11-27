
// ======================================
// 1. BASE DE CONNAISSANCES
// ======================================

const connaissances = [
    {
        nom: "Kinshasa",
        sujet: "RDC",
        relation: "capitale",
        objet: "Kinshasa"
    },
    {
        nom: "Luanda",
        sujet: "Angola",
        relation: "capitale",
        objet: "Luanda"
    },
    {
        nom: "Brazzaville",
        sujet: "Congo",
        relation: "capitale",
        objet: "Brazzaville"
    }
];


// ======================================
// 2. QUESTION DE L'UTILISATEUR
// ======================================

const question = "Quelle est la capitale de la RDC ?";


// ======================================
// 3. NORMALISATION
// ======================================

function normaliser(texte) {
    return texte
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\p{L}\p{N}]+/gu, " ")
        .trim();
}

const questionNormalisee = normaliser(question);


// ======================================
// 4. TOKENISATION
// ======================================

const tokens = questionNormalisee.split(/\s+/);


// ======================================
// 5. CALCUL DES SCORES
// ======================================

function calculerScore(tokens, connaissance) {

    let score = 0;

    if (tokens.includes(normaliser(connaissance.sujet))) {
        score += 5;
    }

    if (tokens.includes(normaliser(connaissance.relation))) {
        score += 5;
    }

    if (tokens.includes(normaliser(connaissance.objet))) {
        score += 5;
    }

    return score;
}


// ======================================
// 6. CONSTRUCTION DES RESULTATS (MAP)
// ======================================

const resultats = connaissances.map(function(connaissance) {

    return {
        nom: connaissance.nom,
        score: calculerScore(tokens, connaissance),
        information: connaissance
    };

});


// ======================================
// 7. CLASSEMENT DES RESULTATS (SORT)
// ======================================

resultats.sort(function(a, b) {
    return b.score - a.score;
});


// ======================================
// 8. AFFICHAGE
// ======================================

console.log("Question :", question);
console.log("Tokens :", tokens);
console.log("Résultats classés :", resultats);
console.log("Meilleur résultat :", resultats[0]);
