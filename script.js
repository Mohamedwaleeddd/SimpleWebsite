// Menu Box
function show(){
    document.querySelector('.menu').style.top = "0";
  }
  function d(){
    document.querySelector('.menu').style.top = "-100%";
  }  
  window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 370) {
    document.querySelector('.about').style.opacity = "1";
  }else{
   document.querySelector('.about').style.opacity = "0";
  }
});
window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 1000) {
    document.querySelector('.c').style.opacity = "1";
  } else {
    document.querySelector('.c').style.opacity = "0";
  }
});
window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 1370) {
    document.querySelector('.rates').style.opacity = "1";
  }else{
    document.querySelector('.rates').style.opacity = "0";
  }
});