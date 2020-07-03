document.addEventListener('scroll', (event) => {
  let scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
  let scrollBottom = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
  let scrollPercent = scrollTop / scrollBottom * 100 + "%";
  document
    .querySelector('#progress-bar')
    .style.width = scrollPercent;
  },
  { passive: true }
);

const discovers = document.querySelectorAll(".discoverbtn");
discovers.forEach((discover) => {
  discover.addEventListener('click', (event) => {
    const animfadins = document.querySelectorAll(".animfadin");
    animfadins.forEach((animfadin) => {
      animfadin.classList.add('animated');
      animfadin.classList.add('fadeInUp');
      setTimeout(function(){
        animfadin.classList.remove('animated');
        animfadin.classList.remove('fadeInUp');
      },3000);
    });
    // event.preventDefault;
    // // console.log(event);
    // const hash = this.hash;
    // console.log(hash);
  });
});

