const preload = document.getElementById("preload");

setTimeout(() => {
  scrollTo({
    top: 0,
    smooth: true,
  });
  preload.classList.add("hidden-preload");
}, 1500);
