const bgImgs = document.querySelectorAll(".rr, .ice, .squam");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imgUrl = entry.target.getAttribute("data-bg-img-url");
      entry.target.style.backgroundImage = `url(${imgUrl})`;
      observer.unobserve(entry.target);
    }
  });
});

bgImgs.forEach((bgImg) => {
  observer.observe(bgImg);
});
