document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const lightbox = document.getElementById("lightbox");
  const fullImage = document.getElementById("full-image");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const fullSrc = thumbnail.getAttribute("data-full");
      fullImage.src = fullSrc;
      lightbox.classList.add("show");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
});
