const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

tl.from(".top", { opacity: 0, y: 500, rotate: 360, duration: 5 }, "-=2")
  .from(
    ".info",
    {
      opacity: 0,
      x: -100,
    },
    "-=2.5"
  )
  .from(
    ".save",
    {
      opacity: 0,
      x: -100,
    },
    "-=1.5"
  )
  .to(
    ".fast",
    {
      opacity: 1,
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      y: 0,
      ease: " Bounce.easeOut",
    },
    "-=1"
  )
  .from(
    ".buy",
    {
      opacity: 0,
      x: -100,
    },
    "-=1"
  );

const navigation = document.querySelector(".Nav__navigation");
const nav = document.querySelector(".Nav");
const cards = document.querySelectorAll(".cards");
const span = document.querySelectorAll(".span");

navigation.addEventListener("click", () => {
  navigation.classList.toggle("active");
  nav.classList.toggle("show");
});

cards.forEach((card) => {
  card.addEventListener("mouseover", (e) => {
    card.classList.add("card__active");
  });
});
cards.forEach((card) => {
  card.addEventListener("mouseout", (e) => {
    card.classList.remove("card__active");
  });
});
const duration = 5000;

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

let myInterval = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let startValue = 0;
      const item = entry.target;
      const data = parseInt(item.getAttribute("data-value"));
      const time = Math.floor(duration / data);

      let interval = setInterval(() => {
        startValue += 1;
        item.textContent = startValue;
        if (startValue === data) {
          clearInterval(interval);
        }
      }, [time]);
    }
  });
};

let observer = new IntersectionObserver(myInterval, options);
span.forEach((span) => {
  observer.observe(span);
});
