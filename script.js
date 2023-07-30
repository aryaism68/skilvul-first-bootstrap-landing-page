const stars = document.querySelectorAll(".bi-star-fill");

stars.forEach((star, index) => {
  const colors = ["orange", "gray"];
  let currentIndex = 0;

  star.addEventListener("click", function onClick() {
    star.style.color = colors[currentIndex];

    if (currentIndex >= colors.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    }
  });
});

const bookmarks = document.querySelectorAll(".bi-bookmark-fill");

bookmarks.forEach((bookmark, index) => {
  const colors = ["orange", "gray"];
  let currentIndex = 0;

  bookmark.addEventListener("click", function onClick() {
    bookmark.style.color = colors[currentIndex];

    if (currentIndex >= colors.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    }
  });
});

document.getElementById("submit-btn").addEventListener("click", function (event) {
  event.preventDefault();
});
