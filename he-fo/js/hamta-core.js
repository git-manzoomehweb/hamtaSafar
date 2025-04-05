document.addEventListener("DOMContentLoaded", function () {
  const breakpoint = 1024;
  const sendContainer = document.querySelector(".send-from-header-to-nav");
  const giveContainer = document.querySelector(".give-it-from-header");

  function moveContent() {
    if (window.innerWidth < breakpoint) {
      if (sendContainer && giveContainer && sendContainer.children.length > 0) {
        giveContainer.appendChild(sendContainer);
      }
    } else {
      if (
        sendContainer &&
        giveContainer.parentElement !== document.querySelector("header .flex")
      ) {
        document.querySelector("header .flex").appendChild(sendContainer);
      }
    }
  }

  moveContent();

  window.addEventListener("resize", moveContent);
});

const navOpener = document.querySelector("#open-menu"),
  mobileNav = document.querySelector(".mobile-menu"),
  navCloser = document.querySelector("#closer-menu");
navOpener.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-[1280px]");
});
navCloser.addEventListener("click", () => {
  mobileNav.classList.add("translate-x-[1280px]");
});
