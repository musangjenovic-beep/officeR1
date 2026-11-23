import { tokeniser } from "./tokeniser.js";

export function normaliserMot(mot) {
    if (typeof mot !== "string") {
        return "";
    }

    return mot
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .trim();
}

export function traiterQuestion(texte) {
    return {
        texteOriginal: typeof texte === "string" ? texte : "",
        mots: tokeniser(texte)
    };
}

export function calculerScore(motsQuestion, motsEntree, frequences = {}) {
    if (!Array.isArray(motsQuestion) || !Array.isArray(motsEntree)) {
        return 0;
    }

    let score = 0;

    for (const motQuestion of motsQuestion) {
        for (const motEntree of motsEntree) {
            if (motQuestion === motEntree) {
                const frequence = frequences[motEntree] || 1;
                score += 4 + (1 / frequence);
                break;
            }

            if (motEntree.length >= 4 && motQuestion.length >= 4 &&
                (motEntree.includes(motQuestion) || motQuestion.includes(motEntree))) {
                score += 1;
                break;
            }
        }
    }

    return score;
}

export function trouverMeilleureReponse(question, baseDeConnaissances) {
    const traitement = traiterQuestion(question);

    if (traitement.mots.length === 0) {
        return {
            reponse: "Je n'ai pas compris votre question. Pouvez-vous la reformuler ?",
            score: 0,
            entree: [],
            motsTraites: []
        };
    }

    const frequences = {};

    for (const entree of baseDeConnaissances) {
        const motsUniquues = new Set(
            entree.motsEntree
                .map(normaliserMot)
                .flatMap(mot => mot.split(/\s+/))
                .filter(Boolean)
        );

        for (const mot of motsUniquues) {
            frequences[mot] = (frequences[mot] || 0) + 1;
        }
    }

    let meilleureEntree = null;
    let meilleurScore = 0;

    for (const entree of baseDeConnaissances) {
        const motsEntree = entree.motsEntree
            .map(normaliserMot)
            .flatMap(mot => mot.split(/\s+/))
            .filter(Boolean);

        const score = calculerScore(traitement.mots, motsEntree, frequences);

        if (score > meilleurScore) {
            meilleurScore = score;
            meilleureEntree = entree;
        }
    }

    if (!meilleureEntree || meilleurScore === 0) {
        return {
            reponse: "Je n'ai pas trouvé de réponse à votre question. Pouvez-vous la reformuler ?",
            score: 0,
            entree: [],
            motsTraites: traitement.mots
        };
    }

    return {
        reponse: meilleureEntree.reponse,
        score: meilleurScore,
        entree: meilleureEntree.motsEntree,
        motsTraites: traitement.mots
    };
}