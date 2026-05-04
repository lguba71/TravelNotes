document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a.lightbox");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const overlay = document.createElement("div");
      overlay.className = "lightbox-overlay";

      const img = document.createElement("img");
      img.src = this.href;

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });

      document.addEventListener("keydown", function escHandler(e) {
        if (e.key === "Escape") {
          overlay.remove();
          document.removeEventListener("keydown", escHandler);
        }
      });
    });
  });
});
