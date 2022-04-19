const backprogress = document.querySelector(".barprogress");

window.addEventListener("scroll", () => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  backprogress.style.width = `${scroll / height * 100}%`;
})