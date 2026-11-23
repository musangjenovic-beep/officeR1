export function Btn(id,fonction) {
  const bouton = document.getElementById(id);
  bouton.addEventListener("click" ,fonction);
}