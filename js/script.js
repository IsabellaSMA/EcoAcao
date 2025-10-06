/*Delay do lixo  */
window.addEventListener("load", () => {
    const lixos = document.querySelectorAll(".lixo");
  
    lixos.forEach((lixo) => {
      const delayAleatorio = Math.random() * 15; // entre 0 e x segundos
      lixo.style.animationDelay = `${delayAleatorio}s`;
    });
  });