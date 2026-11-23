import BASE from './BASE.js';
import { trouverMeilleureReponse } from './traitement.js';

export function reponse(mot) {
    return trouverMeilleureReponse(mot, BASE);
}