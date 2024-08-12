const nav = document.getElementsByTagName("nav")[0];


window.addEventListener("scroll", () => {
  if(window.scrollY > 10) {
    nav.classList.add("nav-dark")
    nav.classList.add("billboard-opaque");

  } else {
    nav.classList.remove("nav-dark");
    nav.classList.remove("billboard-opaque");

  }


});  