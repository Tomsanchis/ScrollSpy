const backprogress = document.querySelector(".barprogress");

window.addEventListener("scroll", () => {
  backprogress.style.width = `${scrollY}%`;
})