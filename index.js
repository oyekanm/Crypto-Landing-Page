// import gsap from "gsap";

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

span.forEach((item) => {
  let startValue = 0;
  const data = parseInt(item.getAttribute("data-value"));
  const time = Math.floor(duration / data);

  const interval = setInterval(() => {
    startValue += 1;
    item.textContent = startValue;
    if (startValue === data) {
      clearInterval(interval);
    }
  }, [time]);
});
