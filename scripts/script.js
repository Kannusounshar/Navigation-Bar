let nav = document.getElementById("navigation-bar");
let sticky = nav.offsetTop;
window.onscroll = function () {
  sticker();
};
function sticker() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
