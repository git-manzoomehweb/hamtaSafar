const navOpener = document.querySelector("#open-menu"),
  mobileNav = document.querySelector(".mobile-menu"),
  navCloser = document.querySelector("#closer-menu");
navOpener.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-[1280px]");
});
navCloser.addEventListener("click", () => {
  mobileNav.classList.add("translate-x-[1280px]");
});
if (document.querySelectorAll(".swiper-d").length > 0) {
  var swiper = new Swiper(".swiper-d", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: 1, spaceBetween: 10 },
    },
  });
}
if (document.querySelectorAll(".swiper-four").length > 0) {
  var swiper = new Swiper(".swiper-four", {
    slidesPerView: 4,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 10 },
    },
  });
}
if (document.querySelectorAll(".swiper-one").length > 0) {
  var swiper = new Swiper(".swiper-one", {
    direction: "vertical",
    slidesPerView: 4,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 15,
    grabCursor: !0,
    touchReleaseOnEdges: true,
    // autoplay: { delay: 3500, disableOnInteraction: !1 },
    // loop: !0,
    pagination: { el: ".swiper-pagination-first-mob", clickable: !0 },
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 10 },
    },
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const first = document.querySelector(".shooting .first");
  const second = document.querySelector(".shooting .second");

  function animateElements() {
    first.style.transform = "translateX(-200%)";
    first.style.transition = "transform 0.5s ease-in-out";

    setTimeout(() => {
      second.style.transform = "translateX(-200%)";
      second.style.transition = "transform 0.5s ease-in-out";
    }, 500);

    setTimeout(() => {
      first.style.transform = "translateX(0)";

      setTimeout(() => {
        second.style.transform = "translateX(0)";
      }, 500);
    }, 5000);
  }

  setInterval(animateElements, 15000);
});
document.addEventListener("DOMContentLoaded", function () {
  function moveContent() {
    const sendFromHeader = document.querySelector(".send-from-header-to-nav");
    const giveItFromHeader = document.querySelector(".give-it-from-header");

    if (document.documentElement.clientWidth <= 1024) {
      if (
        sendFromHeader &&
        giveItFromHeader &&
        sendFromHeader.children.length
      ) {
        giveItFromHeader.appendChild(sendFromHeader);
      }
    } else {
      if (
        giveItFromHeader &&
        sendFromHeader &&
        giveItFromHeader.contains(sendFromHeader)
      ) {
        document.querySelector("header div").appendChild(sendFromHeader);
      }
    }
  }

  moveContent();
  window.addEventListener("resize", moveContent);
});

// const questionBox = document.querySelectorAll(
//   ".common-questions .parent-box .box-container"
// );
// questionBox.forEach((box) => {
//   box.addEventListener("click", () => {
//     const answer = box.querySelector("#answer");

//     if (answer.classList.contains("hidden")) {
//       box.classList.remove("!h-[64px]");
//       answer.classList.remove("hidden");
//     } else {
//       answer.classList.add("hidden");

//       box.classList.add("!h-[64px]");
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#q-box-1")) {
    const questionBoxes = document.querySelectorAll(".box-container");
    const answerDisplay = document.querySelector(".show_answer");
    const span = document.querySelectorAll(".RowNumber_set");

    span.forEach((span) => {
      const next = span.nextElementSibling;
      if (next.classList.contains("multi-nmb")) {
        next.innerText = span.innerText - 1;
      }
    });

    function updateAnswerDisplay(answerText) {
      answerDisplay.style.opacity = "0";
      answerDisplay.style.transform = "translateX(-700px)";
      answerDisplay.style.transition =
        "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";

      setTimeout(() => {
        answerDisplay.innerHTML = answerText;
        answerDisplay.style.opacity = "1";
        answerDisplay.style.transform = "translateX(0)";
      }, 100);
    }

    function getAnswerText(container) {
      const answerElement = container.querySelector("#answer");
      return answerElement ? answerElement.innerHTML : "";
    }

    function scrollToAnswer() {
      if (window.innerWidth <= 768) {
        answerDisplay.parentElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (questionBoxes.length > 0) {
      updateAnswerDisplay(getAnswerText(questionBoxes[0]));
    }

    questionBoxes.forEach((box) => {
      box.addEventListener("click", function () {
        updateAnswerDisplay(getAnswerText(box));
        scrollToAnswer();
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector("#search-box");
  const beforeLoginElements = document.querySelectorAll(".before-login");

  if (!searchBox) return;

  function updateDisplay() {
    const hasMatchingElements = searchBox.querySelector(".r-hotel") !== null;
    beforeLoginElements.forEach((el) => {
      el.style.setProperty(
        "display",
        hasMatchingElements ? "none" : "",
        "important"
      );
    });
  }

  const observer = new MutationObserver(updateDisplay);
  observer.observe(searchBox, { childList: true, subtree: true });

  updateDisplay();
});
// ______________________________________________
// ______________________________________________
// ______________________________________________

document.addEventListener("DOMContentLoaded", function () {
  function updateLoginText() {
    const loginSpan = document.querySelector(".btnstyle span");
    if (loginSpan && loginSpan.textContent.trim() === "Login or register") {
      loginSpan.textContent = "Login/sign up B2B";
    }
  }

  updateLoginText();

  const observer = new MutationObserver(updateLoginText);
  const targetNode = document.querySelector(".btnstyle span");

  if (targetNode) {
    observer.observe(targetNode, { childList: true, subtree: true });
  }

  setInterval(updateLoginText, 100);
});
// __________________________________________________
// __________________________________________________
// __________________________________________________

document.addEventListener("DOMContentLoaded", function () {
  const currencyContainer = document.querySelector(".currency-content");

  if (!currencyContainer) return;

  const svgIcon = `
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00104 17.7295H13.3345C14.6233 17.7295 15.6675 16.6853 15.6675 15.3965C15.6675 14.1077 14.6233 13.0626 13.3345 13.0626H10.6679C9.37904 13.0626 8.33398 12.0184 8.33398 10.7295C8.33398 9.44072 9.37904 8.39648 10.6679 8.39648H15.0013" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.002 20.0625V6.0625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  function replaceCurrencyText() {
    const currencyIcon = document.querySelector(".currency__icon");
    if (currencyIcon && currencyIcon.textContent.trim() === "--Currency--") {
      currencyIcon.innerHTML = svgIcon;
    }
  }

  replaceCurrencyText();

  const observer = new MutationObserver(replaceCurrencyText);
  observer.observe(currencyContainer, { childList: true, subtree: true });

  setInterval(replaceCurrencyText, 100);
});

/*------------------CURRENCY-----------------------*/
document.addEventListener("DOMContentLoaded", function () {
  localStorage_getCurrency();

  if (document.querySelector(".contain-currency-show")) {
    document.querySelector(".currency-selected").setAttribute("onclick", "");
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".currency-selected,.currency-list")) {
      document.querySelector(".currency-list").classList.add("unvisible");
    }
  });
});

function currency_selected(element) {
  if (!document.querySelector(".contain-currency")) {
    if (!document.querySelector(".contain-currency-show")) {
      let headerResize = element.closest(".header-t");
      let currencySelected = headerResize.querySelector(".currency-selected");

      if (currencySelected.getAttribute("data-active") == 0) {
        headerResize
          .querySelector(".currency-loading")
          .classList.toggle("hidden");

        fetch("/Client_Currency_Rate.bc")
          .then((response) => response.text())
          .then((text) => {
            console.log("Server response:", text);
            const data_currency = JSON.parse(text.replace(/\'/g, '"'));
            let currencyList = headerResize.querySelector(".currency-list ul");
            data_currency.rate.forEach((rate) => {
              let listItem = document.createElement("li");
              listItem.setAttribute("data-cost", rate.rate_cost);
              listItem.setAttribute(
                "data-floatdigit",
                data_currency.floatdigit
              );
              listItem.textContent = rate.rate_unit;
              listItem.addEventListener("click", function () {
                select_currency(listItem);
              });
              currencyList.appendChild(listItem);
            });

            headerResize
              .querySelector(".currency-loading")
              .classList.toggle("hidden");
            currencySelected.setAttribute("data-active", 1);
            headerResize
              .querySelector(".currency-list")
              .classList.toggle("unvisible");
          })
          .catch((error) => console.error(error));
      } else {
        headerResize
          .querySelector(".currency-list")
          .classList.toggle("unvisible");
      }
    }
  }
}

function select_currency(element) {
  let headerResize = element.closest(".header-t");
  headerResize.querySelector(".currency-list").classList.toggle("unvisible");
  headerResize.querySelector(
    ".currency-selected"
  ).innerHTML = `<div>${element.innerText}</div>`;
  localStorage_setCurrency(
    element.innerText,
    element.getAttribute("data-cost"),
    element.getAttribute("data-floatdigit")
  );
}

function localStorage_setCurrency(currency_unit, currency_cost, floatdigit) {
  let currencyObject = {
    currency_unit: currency_unit,
    currency_cost: currency_cost,
    floatdigit: floatdigit,
    time: new Date().getTime(),
    expire: 1200000,
  };
  localStorage.setItem("currencyObject", JSON.stringify(currencyObject));
  localStorage_getCurrency();
}

function localStorage_getCurrency() {
  let getCurrencyObject = localStorage.getItem("currencyObject");
  let jsonCurrency = JSON.parse(getCurrencyObject);

  if (jsonCurrency) {
    document.querySelector(
      ".currency-selected"
    ).innerHTML = `<div>${jsonCurrency.currency_unit}</div>`;

    var timer = setInterval(function () {
      if (new Date().getTime() - jsonCurrency.time >= jsonCurrency.expire) {
        localStorage.removeItem("currencyObject");
        document.querySelector(
          ".currency-selected"
        ).innerHTML = `<div>--Select--</div>`;
        document
          .querySelector(".currency-selected")
          .setAttribute("data-active", 0);
        clearInterval(timer);
        console.log("localStorage has expired");
      }
    }, 1000);
  }
}
// ________________________________________________
function loadContentHomaPage() {
  loadSearchEngine("search-engine.bc", "search-box");
}
async function loadSearchEngine(e, t) {
  if (document.querySelector("#search-box")) {
    try {
      var r = new XMLHttpRequest();
      r.open("GET", e),
        r.send(),
        (r.onreadystatechange = function () {
          if (4 == this.readyState && 200 == this.status) {
            var e = document.getElementById(t);
            e.innerHTML = r.responseText;
            for (
              var l = e.getElementsByTagName("script"), i = 0;
              i < l.length;
              i++
            ) {
              var s = document.createElement("script");
              l[i].src
                ? ((s.src = l[i].src), (s.async = !1))
                : (s.text = l[i].textContent),
                document.head.appendChild(s).parentNode.removeChild(s);
            }
          }
        });
    } catch (l) {}
  }
}

// ________________________________________________
// ________________________________________________
// ________________________________________________
// ________________________________________________

function Set_Offset_Item(element) {
  var hrefValue = element.getAttribute("data-id");
  var HEADER_HEIGHT = 0;
  if (document.querySelector(".will-fixed")) {
    var HEADER_HEIGHT = document.querySelector(".will-fixed").offsetHeight;
  }
  const targetElement = document.getElementById(hrefValue);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const offsetTop =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        HEADER_HEIGHT -
        200;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }, 1);
  }
}
// _____________________________________________
// _____________________________________________
// _____________________________________________
if (document.querySelector(".vfc-articles")) {
  document.querySelectorAll(".vfc-articles p").forEach((p) => {
    if (p.querySelector("img")) {
      p.classList.add("img-article-cont");
    }
  });
}
// _____________________________________________
// _____________________________________________
// _____________________________________________
function checkMenuState() {
  const menu = document.querySelector(".mobile-menu");
  if (!menu) return;

  if (menu.classList.contains("translate-x-[1280px]")) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
}

function startMenuCheck() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    setInterval(checkMenuState, 30);
  }
}

// اجرا هنگام بارگذاری صفحه و هنگام تغییر سایز صفحه
startMenuCheck();
window.addEventListener("resize", startMenuCheck);
// ________________________________________
// ________________________________________
// ________________________________________
function updateSetHeight() {
  const getHeightElement = document.querySelector(".get-height");
  const setHeightElement = document.querySelector(".set-height");

  if (getHeightElement && setHeightElement) {
    const height = getHeightElement.offsetHeight;
    setHeightElement.style.height = `${height}px`;
  }
}

window.addEventListener("load", updateSetHeight);

window.addEventListener("resize", updateSetHeight);

const observer = new MutationObserver(updateSetHeight);
const targetNode = document.querySelector(".get-height");
if (targetNode) {
  observer.observe(targetNode, {
    childList: true,
    subtree: true,
    attributes: true,
  });
}
