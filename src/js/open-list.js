const headline = document.querySelectorAll(".metal__headline");

headline.forEach((headline) =>
  headline.addEventListener("click", (e) => {
    const list = headline.nextElementSibling;
    e.target.classList.toggle("opened");
    list.classList.toggle("opened");
  })
);
