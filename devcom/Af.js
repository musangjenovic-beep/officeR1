export function aff(texte,element) {

    const mots = texte.split(" ");
    let i = 0;

    function afficher() {

        if (i < mots.length) {

            element.innerText += " " + mots[i] + " ";

            i++;
          element.scrollIntoView({
    behavior: "smooth",
    block: "end"
          });

            setTimeout(afficher, 100);
        }
    }

    element.innerText = "";
    afficher();
}