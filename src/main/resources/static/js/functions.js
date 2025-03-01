/*============= Preloader JS==============*/
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});
$(window).on("load", function () {
  /*==============================================
        Featured assets filer js
    ================================================*/
  $(function () {
    // init Isotope
    var $grid = $(".assets-holder").isotope({
      itemSelector: ".nft-item",
      layoutMode: "fitRows",
      fitRows: {
        gutter: 20,
      },
    });
    // filter functions
    var filterFns = {
      // show if name ends with -ium
      ium: function () {
        var name = $(this).find(".name").text();
        return name.match(/ium$/);
      },
    };

    // bind filter button click
    $(".asset-filter-list").on("click", "li", function () {
      var filterValue5254 = $(this).attr("data-filter");
      // use filterFn if matches value
      filterValue5254 = filterFns[filterValue5254] || filterValue5254;
      $grid.isotope({
        filter: filterValue5254,
      });
    });
    // change is-checked class on buttons
    $(".asset-filter-list").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "li", function () {
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });
  });
});
/*=========================
    Countdown js initialize
    ===========================*/
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    var clockdiv = document.getElementsByClassName("count-down");
    var countDownDate = new Array();
    for (var i = 0; i < clockdiv.length; i++) {
      countDownDate[i] = new Array();
      countDownDate[i]["el"] = clockdiv[i];
      countDownDate[i]["time"] = new Date(
          clockdiv[i].getAttribute("data-date")
      ).getTime();
      countDownDate[i]["days"] = 0;
      countDownDate[i]["hours"] = 0;
      countDownDate[i]["seconds"] = 0;
      countDownDate[i]["minutes"] = 0;
    }

    var countdownfunction = setInterval(function () {
      for (var i = 0; i < countDownDate.length; i++) {
        var now = new Date().getTime();
        var distance = countDownDate[i]["time"] - now;
        countDownDate[i]["days"] = Math.floor(distance / (1000 * 60 * 60 * 24));
        countDownDate[i]["hours"] = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        countDownDate[i]["minutes"] = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        countDownDate[i]["seconds"] = Math.floor(
            (distance % (1000 * 60)) / 1000
        );

        if (distance < 0) {
          countDownDate[i]["el"].querySelector(".days").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".hours").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".minutes").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".seconds").innerHTML = 0;
        } else {
          countDownDate[i]["el"].querySelector(".days").innerHTML =
              countDownDate[i]["days"];
          countDownDate[i]["el"].querySelector(".hours").innerHTML =
              countDownDate[i]["hours"];
          countDownDate[i]["el"].querySelector(".minutes").innerHTML =
              countDownDate[i]["minutes"];
          countDownDate[i]["el"].querySelector(".seconds").innerHTML =
              countDownDate[i]["seconds"];
        }
      }
    }, 1000);
  }
});

//explore catergory filter
$(window).on("load", function () {
  /*==============================================
        Featured assets filer js
    ================================================*/
  $(function () {
    //rank page ajax load more
    $(".ranking-wrapper").simpleLoadMore({
      item: "tr",
      count: 16,
      itemsToLoad: 5,
      easing: "fade",
      easingDuration: 400,
      showCounter: true,
      counterText: "Showing {showing} out of {total}",
      btnHTML:
          '<a href="#" class="default-btn move-bottom"><span>View More</span></a>',
      btnWrapper: "",
      btnWrapperClass: "text-center w-100",
      showCounter: true,
      counterText: "Showing {showing} out of {total}",
    });

    //explore page ajax load more
    $(".explore-load").simpleLoadMore({
      item: ".col-xl-4",
      count: 6,
      itemsToLoad: 3,
      easing: "slide",
      easingDuration: 400,
      btnHTML:
          '<a href="#" class="default-btn move-bottom"><span>View More</span></a>',
      btnWrapper: "",
      btnWrapperClass: "text-center mt-5 w-100",
      showCounter: true,
      counterText: "Showing {showing} out of {total}",
    });

    //Auction page ajax load more
    $(".auction-loadmore").simpleLoadMore({
      item: ".col-xl-3",
      count: 8,
      itemsToLoad: 4,
      easing: "slide",
      easingDuration: 400,
      btnHTML:
          '<a href="#" class="default-btn move-bottom"><span>View More</span></a>',
      btnWrapper: "",
      btnWrapperClass: "text-center mt-5 w-100",
      showCounter: true,
      counterText: "Showing {showing} out of {total}",
    });

    //Collections page ajax load more
    $(".collection-loadmore").simpleLoadMore({
      item: ".col-lg-4",
      count: 9,
      itemsToLoad: 3,
      easing: "slide",
      easingDuration: 400,
      btnHTML:
          '<a href="#" class="default-btn move-bottom"><span>View More</span></a>',
      btnWrapper: "",
      btnWrapperClass: "text-center mt-5 w-100",
      showCounter: true,
      counterText: "Showing {showing} out of {total}",
    });

    //activity page ajax load more
    $(".activity-loadmore").simpleLoadMore({
      item: ".col-12",
      count: 6,
      itemsToLoad: 2,
      easing: "slide",
      easingDuration: 400,
      btnHTML:
          '<a href="#" class="default-btn move-bottom"><span>View More</span></a>',
      btnWrapper: "",
      btnWrapperClass: "text-center mt-5 w-100",
      showCounter: true,
      counterText: "Showing {showing} out of {total}",
    });
    //onsale page (author single page) ajax load more
    $(".onsale-loadmore").simpleLoadMore({
      item: ".col-lg-4",
      count: 6,
      itemsToLoad: 3,
      easing: "slide",
      easingDuration: 400,
      btnHTML:
          '<a href="#" class="default-btn move-bottom"><span>View More</span></a>',
      btnWrapper: "",
      btnWrapperClass: "text-center mt-5 w-100",
      showCounter: true,
      counterText: "Showing {showing} out of {total}",
    });

    // init Isotope
    var $grid = $(".explore-filter").isotope({
      itemSelector: ".nft-item",
      layoutMode: "fitRows",
      fitRows: {
        gutter: 20,
      },
    });
    // filter functions
    var filterFns = {
      // show if name ends with -ium
      ium: function () {
        var name = $(this).find(".name").text();
        return name.match(/ium$/);
      },
    };

    // bind filter button click
    $(".explore-category").on("click", ".excat-item", function () {
      var filterValue5254 = $(this).attr("data-filter");
      // use filterFn if matches value
      filterValue5254 = filterFns[filterValue5254] || filterValue5254;
      $grid.isotope({
        filter: filterValue5254,
      });
    });
    // change active class on buttons
    $(".explore-category").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", ".excat-item", function () {
        $buttonGroup.find(".active").removeClass("active");
        $(this).addClass("active");
      });
    });
  });
});

$(document).ready(function () {
  "use strict"; // start of use strict

  /*==============================
    Menu
    ==============================*/
  $(".header__btn").on("click", function () {
    $(this).toggleClass("header__btn--active");
    $(".header__menu").toggleClass("header__menu--active");
  });

  $(".header__search .close, .header__action--search button").on(
      "click",
      function () {
        $(".header__search").toggleClass("header__search--active");
      }
  );

  //--*Fixed header on scroll
  var fixed_top = $(".header");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      fixed_top.addClass("header-fixed fadeInUp");
    } else {
      fixed_top.removeClass("header-fixed fadeInUp");
    }
  });

  /*====================
    button Hover effect
    =======================*/

  document
      .querySelectorAll(".button")
      .forEach(
          (button) =>
              (button.innerHTML =
                  "<div><span>" +
                  button.textContent.trim().split("").join("</span><span>") +
                  "</span></div>")
      );

  /*====================================
    All slider
    =======================================*/

  //banner slider
  var swiper6 = new Swiper(".banner-slider", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
  });

  //auction slider
  var swiper = new Swiper(".auction-holder", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: true,
    // },
    navigation: {
      nextEl: ".auction-next",
      prevEl: ".auction-prev",
    },
    breakpoints: {
      576: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  });

  //hot slider
  var swiper = new Swiper(".hot-holder", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: true,
    // },
    navigation: {
      nextEl: ".hot-next",
      prevEl: ".hot-prev",
    },
    breakpoints: {
      576: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  });

  // blog slider start here
  var swiper = new Swiper(".blog-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1200,
    navigation: {
      nextEl: ".blog-slider-next",
      prevEl: ".blog-slider-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  //nft-category thumb slider
  var swiper = new Swiper(".nft-coll-thumb", {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    observer: true,
    observeParents: true,
  });

  /*========================
    follow button js
    =============================*/
  $(".btn-follow").on("click", function (e) {
    var element = $(this).parent(".follow-part");
    if (element.hasClass("activefollow")) {
      element.removeClass("activefollow");
      element.find(".follow-part").removeClass("activefollow");
    } else {
      element.addClass("activefollow");
      element.siblings(".follow-part").removeClass("activefollow");
      element
          .siblings(".follow-part")
          .find(".follow-part")
          .removeClass("activefollow");
    }
  });

  /*============ Scroll to Top button js ============*/
  $(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").css({
          bottom: "2%",
          opacity: "1",
          transition: "all .5s ease",
        });
      } else {
        $(".scrollToTop").css({
          bottom: "-30%",
          opacity: "0",
          transition: "all .5s ease",
        });
      }
    });
    //Click event to scroll to top
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
          {
            scrollTop: 0,
          },
          500
      );
      return false;
    });
  });

  //==========Create NFT Category select active js
  $(".item-cat-btn").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //contact form js
  $(function () {
    // Get the form.
    var form = $("#contact-form");

    // Get the messages div.
    var formMessages = $(".form-message");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
      })
          .done(function (response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $("#contact-form input, #contact-form textarea").val("");
          })
          .fail(function (data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");

            // Set the message text.
            if (data.responseText !== "") {
              $(formMessages).text(data.responseText);
            } else {
              $(formMessages).text(
                  "Oops! An error occured and your message could not be sent."
              );
            }
          });
    });
  });
});

/*===========================
  *Crypto Wallet copying js
  ============================*/
// functionality to copy text from inviteCode to clipboard

// trigger copy event on click
$("#cryptoCopy").on("click", function (event) {
  console.log(event);
  copyToClipboard(event);
});

// event handler
function copyToClipboard(e) {
  // alert('this function was triggered');
  // find target element
  var t = e.target,
      c = t.dataset.copytarget,
      inp = c ? document.querySelector(c) : null;
  console.log(inp);
  // check if input element exist and if it's selectable
  if (inp && inp.select) {
    // select text
    inp.select();
    try {
      // copy text
      document.execCommand("copy");
      inp.blur();

      // copied animation
      t.classList.add("copied");
      setTimeout(function () {
        t.classList.remove("copied");
      }, 1500);
    } catch (err) {
      //fallback in case exexCommand doesnt work
      alert("please press Ctrl/Cmd+C to copy");
    }
  }
}

//-------------- tool tips

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// 내 서재
// Author: Hoang Tran (https://www.facebook.com/profile.php?id=100004848287494)
// Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

// You can change global variables here:
var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
var bgMusicURL =
    "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
var bgMusicControls = true; // Show UI music control

/*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
       + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
       + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/

// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

var odrag = document.getElementById("drag-container");
var ospin = document.getElementById("spin-container");
var aImg = ospin.getElementsByTagName("img");
var aVid = ospin.getElementsByTagName("video");
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
      rotateSpeed
  )}s infinite linear`;
}

// setup events
document.getElementById("drag-container").onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
//*
//*

