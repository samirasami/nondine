// *******************jquery******************
$(document).ready(function () {
      // owlcarousel
      $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                  0: {
                        items: 1,
                  },
                  600: {
                        items: 2,
                  },
                  1000: {
                        items: 4,
                  }
            }
      });
      // count
      $('.nondine-count').each(function () {
            $(this).prop('Counter', 0).animate({
                  Counter: $(this).text()
            }, {
                  duration: 4000,
                  easing: 'swing',
                  step: function (now) {
                        $(this).text(Math.ceil(now));
                  }
            });
      });
      // mixitup
      var mixer = mixitup('.mix-container');
});
// *******************custom js start******************
// sticky class add 
window.addEventListener("scroll", function () {
      if (window.scrollY >= 100) {
            document.querySelector("header").classList.add("sticky");
      } else if (window.scrollY <= 595) {
            document.querySelector("header").classList.remove("sticky");
      }
});
// nav add/remove active cls
var navUl = document.querySelectorAll("nav ul li a");
navUl.forEach(function (button) {
      button.addEventListener("click", function () {
            navUl.forEach(function (btn) {
                  btn.classList.remove("active");
            });
            this.classList.add("active");
      });
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLength = menuItem.length
for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active"
      }
}
// media nav
const nav = document.querySelector("header nav");
const navLi = document.querySelectorAll("header nav ul li");
const navOpen = document.querySelector(".nav-open");
navOpen.addEventListener("click", () => {
      if (nav.style.display == "none") {
            nav.style.display = "inline-block";
      } else {
            nav.style.display = "none";
      }
});
// scroll top btn
window.addEventListener("scroll", function () {
      if (window.scrollY >= 608) {
            document.querySelector(".scroll-btn").style.opacity = "1";
      } else if (window.scrollY <= 157) {
            document.querySelector(".scroll-btn").style.opacity = "0";
      }
});
document.querySelector(".scroll-btn").addEventListener("click", () => {
      window.scrollTo({
            top: 0,
            behavior: "smooth"
      })
});
// footer add/remove active cls
var footerA = document.querySelectorAll(".footer-in ul li");
footerA.forEach(function (button) {
      button.addEventListener("click", function () {
            footerA.forEach(function (btn) {
                  btn.classList.remove("active");
            });
            this.classList.add("active");
      });
});