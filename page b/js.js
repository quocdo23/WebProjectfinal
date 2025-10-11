(function () {
  const items = document.querySelectorAll(".carousel-inner .item");
  const indicators = document.querySelectorAll(".carousel-indicators li");
  let current = 0;

  function show(index) {
    items.forEach((item) => item.classList.remove("active"));
    indicators.forEach((ind) => ind.classList.remove("active"));
    items[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  function next() {
    current = (current + 1) % items.length;
    show(current);
  }

  function prev() {
    current = (current - 1 + items.length) % items.length;
    show(current);
  }

  // Nút trái/phải
  document
    .querySelector(".carousel-control.left")
    .addEventListener("click", (e) => {
      e.preventDefault();
      prev();
    });

  document
    .querySelector(".carousel-control.right")
    .addEventListener("click", (e) => {
      e.preventDefault();
      next();
    });

  // Click chấm
  indicators.forEach((ind, i) => {
    ind.addEventListener("click", () => {
      current = i;
      show(current);
    });
  });
})();
