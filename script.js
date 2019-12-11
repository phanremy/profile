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
