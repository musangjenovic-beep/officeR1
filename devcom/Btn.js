

export function Btn(id,fonction) {
  const bouton = document.getElementById(id);
  bouton.addEventListener("click" ,fonction);
}
export function dBtn(id){
  const bouton=document.getElementById(id);
  if(bouton)bouton.disabled= true;
}
export function aBtn(id){
  const bouton=document.getElementById(id);
  if(bouton)bouton.disabled= false;
}
const vBtn=[
  {
  "version":"2.0.0",
  "auteur":"jenovic musang",
  "date":"lundi 23 nov 2026",
  "temps":"17h40",
  "info":"fait pour manipuler avec facilement les bouton ajout de la function activer et desactiver une fonctionaliter pour neochat ia rdc"
  }
]