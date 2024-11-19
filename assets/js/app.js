// Suivre les mouvements de la souris sur le body.
// Déplace trois éléments (t, e, i) pour suivre la position de la souris.
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
      t.style.top = n.clientY + "px", 
      e.style.left = n.clientX + "px", 
      e.style.top = n.clientY + "px", 
      i.style.left = n.clientX + "px", 
      i.style.top = n.clientY + "px"
  });
//   Fin


// Associe les variables t, e et i aux éléments avec les IDs correspondants.
  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
//   Fin


// n(t) ajoute des classes hover et hover-2 aux éléments e et i quand quelque chose est survolé.

// s(t) enlève ces classes.
  function n(t) {
      e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2")
  }
  function s(t) {
      e.classList.remove("hover", "hover-2"), i.classList.remove("hover", "hover-2")
  }
//   Fin
  s();
  for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; a >= 0; a--) {
      o(r[a])
  }
  function o(t) {
      t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }