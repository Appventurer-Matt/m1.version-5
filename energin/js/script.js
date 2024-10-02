var THEMEMASCOT = {};
(function ($) {
  ("use strict");

  THEMEMASCOT.isRTL = {
    check: function () {
      if ($("html").attr("dir") === "rtl") {
        return true;
      } else {
        return false;
      }
    },
  };

  THEMEMASCOT.isLTR = {
    check: function () {
      if ($("html").attr("dir") !== "rtl") {
        return true;
      } else {
        return false;
      }
    },
  };

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".header-style-one");
      var scrollLink = $(".scroll-to-top");
      var sticky_header = $(".main-header .sticky-header");
      if (windowpos > 100) {
        sticky_header.addClass("fixed-header animated slideInDown");
        scrollLink.fadeIn(300);
      } else {
        sticky_header.removeClass("fixed-header animated slideInDown");
        scrollLink.fadeOut(300);
      }
      if (windowpos > 1) {
        siteHeader.addClass("fixed-header");
      } else {
        siteHeader.removeClass("fixed-header");
      }
    }
  }
  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".main-header .main-menu .navigation").html();

    $(".mobile-menu .navigation").append(mobileMenuContent);
    $(".sticky-header .navigation").append(mobileMenuContent);
    $(".mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });

    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev("ul").slideToggle(500);
      $(this).toggleClass("active");
    });

    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").toggleClass("mobile-menu-visible");
    });
    var numberOfSpans = 6;
    var container = document.getElementsByClassName('mobile-nav-toggler')[0];
    for (var i = 0; i < numberOfSpans; i++) {
      var span = document.createElement('span');
      container.appendChild(span);
    }


    //Menu Toggle Btn
    // let isOpen = false;
    // $(".mobile-nav-toggler").on("click", function () {
    //   isOpen = !isOpen;
    //   if (isOpen) {
    //     $("body").addClass("mobile-menu-visible");
    //   } else {
    //     $("body").removeClass("mobile-menu-visible");
    //   }
    // });
    

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
  }

  //Header Search
  if ($(".search-btn").length) {
    $(".search-btn").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  //Banner Carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      rtl: THEMEMASCOT.isRTL.check(),
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 10000,
      navText: ['<span class="icon-arrow-left"></span>', '<span class="icon-arrow-right"></span>'],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  // Project Carousel
  if ($(".projects-carousel").length) {
    $(".projects-carousel").owlCarousel({
      rtl: THEMEMASCOT.isRTL.check(),
      loop: true,
      margin: 30,
      nav: true,
      items: 1,
      center: true,
      smartSpeed: 700,
      autoplay: true,
      navText: ['<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>'],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  //Brand Carousel
  if ($(".brand-carousel").length) {
    $(".brand-carousel").owlCarousel({
      rtl: THEMEMASCOT.isRTL.check(),
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 400,
      autoplay: false,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1400: {
          items: 5,
        },
      },
    });
  }

  // Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      rtl: THEMEMASCOT.isRTL.check(),
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      smartSpeed: 700,
      autoplay: 8000,
      navText: ['<span class="icon-arrow-left"></span>', '<span class="icon-arrow-right"></span>'],
    });
  }

  // Shop Tab Slider
  /* Single Product Thumbnail Carousel */
  const singleProductThumbCarousel = new Swiper(".single-product-thumb-carousel", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".single-product-thumb-carousel .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".single-product-thumb-carousel .swiper-button-next",
      prevEl: ".single-product-thumb-carousel .swiper-button-prev",
    },
  });

  /* Single Product Image Slider */
  const singleProductImageSlider = new Swiper(".single-product-image-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".single-product-image-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".single-product-image-slider .swiper-button-next",
      prevEl: ".single-product-image-slider .swiper-button-prev",
    },
    thumbs: {
      swiper: singleProductThumbCarousel,
    },
  });

  /* Product Quantity & Shop Details Quantity*/
  const elements = document.querySelectorAll(".product-quantity-count, .category-count-button, .qty-btn, .ctnbutton");
  elements.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();

      const btn = e.target; // Clicked button
      const box = btn.parentElement.querySelector(".product-quantity-box, .cart-plus-minus-box");

      if (btn.classList.contains("inc")) {
        box.value = Number(box.value) + 1;
      } else if (btn.classList.contains("dec") && Number(box.value) > 1) {
        box.value = Number(box.value) - 1;
      }
    });
  });

  // Shop To Pop Up
  function showConfirm(message, callback) {
    let confirmBox = document.createElement("div");
    confirmBox.classList.add("confirm-box");

    let messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
    messageBox.textContent = message;
    confirmBox.appendChild(messageBox);

    let buttonBox = document.createElement("div");
    buttonBox.classList.add("button-box");
    messageBox.appendChild(buttonBox);

    let yesButton = document.createElement("button");
    yesButton.classList.add("yes-button");
    yesButton.textContent = "Yes";
    buttonBox.appendChild(yesButton);
    yesButton.addEventListener("click", YesButtonClick);

    let noButton = document.createElement("button");
    noButton.classList.add("no-button");
    noButton.textContent = "No";
    buttonBox.appendChild(noButton);
    noButton.addEventListener("click", NoButtonClick);

    function removeConfirmBox() {
      document.body.removeChild(confirmBox);
    }

    function YesButtonClick() {
      callback(true);
      removeConfirmBox();
    }

    function NoButtonClick() {
      callback(false);
      removeConfirmBox();
    }

    document.body.appendChild(confirmBox);
  }

  $(document).ready(function () {
    function handleConfirmation(message, callback) {
      showConfirm(message, function (result) {
        if (result) {
          console.log("You pressed Yes.");
        } else {
          console.log("You pressed No.");
        }
        if (callback) {
          callback(result);
        }
      });
    }

    $(".whiteListConfirm").on("click", function () {
      handleConfirmation("Do you want to add to white list ?", function (result) { });
    });

    $(".cartConfirm").on("click", function () {
      handleConfirmation("Do you want to add to Cart list ?", function (result) {
        if (result) {
          window.location.href = "cart.html";
        }
      });
    });
  });

  // Sidebar
  ("use strict");
  jQuery(document).ready(function (o) {
    0 < o(".offset-side-bar").length &&
      o(".offset-side-bar").on("click", function (e) {
        e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
      }),
      0 < o(".close-side-widget").length &&
      o(".close-side-widget").on("click", function (e) {
        e.preventDefault(), o(".cart-group").removeClass("isActive");
      }),
      0 < o(".navSidebar-button").length &&
      o(".navSidebar-button").on("click", function (e) {
        e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
      }),
      0 < o(".close-side-widget").length &&
      o(".close-side-widget").on("click", function (e) {
        e.preventDefault(), o(".info-group").removeClass("isActive");
      }),
      o("body").on("click", function (e) {
        o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
      }),
      o(".xs-sidebar-widget").on("click", function (e) {
        e.stopPropagation();
      }),
      0 < o(".xs-modal-popup").length &&
      o(".xs-modal-popup").magnificPopup({
        type: "inline",
        fixedContentPos: !2,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !2,
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
          },
        },
      });
  });

  // Select Menu
  $(".custom-select").selectmenu();

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active ");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  if ($(".tab ul.tabs").length) {
    //======< Custom Tab >======
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");

    $(".tab ul.tabs li a").on("click", function (g) {
      var tab = $(this).closest(".tab"),
        index = $(this).closest("li").index();

      tab.find("ul.tabs > li").removeClass("current");
      $(this).closest("li").addClass("current");

      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();

      g.preventDefault();
    });
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        0
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  //Image Reveal Animation
  if ($(".reveal").length) {
    gsap.registerPlugin(ScrollTrigger);
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });
  }

  //Bg Parallax
  if ($(".bg-parallax").length) {
    gsap.to(".bg-parallax", {
      backgroundPosition: "70% 75%",
      ease: "ease1",
      scrollTrigger: {
        trigger: ".bg-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }

  // widget categories menu
  $(document).ready(function () {
    $(".widget-categories-menu ul, .sidebar-tag-item ul").on("mouseenter", "li", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  // Gsap Text Animations
  window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType(".text-split", {
      types: "words, chars",
      tagName: "span",
    });

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        },
      });
      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 85%",
        onEnter: () => timeline.play(),
      });
    }

    $(".words-slide-up").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
      createScrollTrigger($(this), tl);
    });

    $(".words-rotate-in").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.set($(this).find(".word"), { transformPerspective: 1000 });
      tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
      createScrollTrigger($(this), tl);
    });

    $(".words-slide-from-right").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
      createScrollTrigger($(this), tl);
    });

    $(".letters-slide-up").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
      createScrollTrigger($(this), tl);
    });

    $(".letters-slide-down").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
      createScrollTrigger($(this), tl);
    });

    $(".letters-fade-in").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
      createScrollTrigger($(this), tl);
    });

    $(".letters-fade-in-random").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), { opacity: 0, duration: 0.05, ease: "power1.out", stagger: { amount: 0.4, from: "random" } });
      createScrollTrigger($(this), tl);
    });

    $(".scrub-each-word").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 90%",
          end: "top center",
          scrub: true,
        },
      });
      tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
    });

    // Avoid flash of unstyled content
    gsap.set(".text-split", { opacity: 1 });
  });

  /* Shopping Form Toggle */
  if ($("[data-toggle-shipping]").length) {
    const $shippingToggle = $("[data-toggle-shipping]"),
      $shippingToggleTarget = $($shippingToggle[0].dataset.toggleShipping),
      $shippingShowHide = function () {
        if ($shippingToggle[0].checked) {
          $shippingToggleTarget.slideDown();
        } else {
          $shippingToggleTarget.slideUp();
        }
      };
    $shippingShowHide();
    $shippingToggle.on("change", function () {
      $shippingShowHide();
    });
  }

  /* Payment Method Toggle */
  if ($('input[type="radio"][name="payment-method"]').length) {
    const $paymentToggle = $('input[type="radio"][name="payment-method"]'),
      $paymentShowHide = function () {
        $paymentToggle.each(function () {
          const $this = $(this),
            $thisContent = $this.siblings("p");
          if ($this[0].checked) {
            $thisContent.slideDown();
            $this.parent().siblings().find("p").slideUp();
          }
        });
      };
    $paymentShowHide();
    $paymentToggle.on("change", function () {
      $paymentShowHide();
    });
  }

  /* ==========================================================================
   Ajax Mail Sender
   ========================================================================== */
  document.addEventListener("DOMContentLoaded", function () {
    function handleFormSubmission(form, statusElement, formIndex) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        sendAjaxRequest(
          "POST",
          form.action,
          data,
          function (response) {
            handleSuccess(response, statusElement, formIndex);
          },
          function (statusCode, responseText) {
            handleError(statusCode, responseText, statusElement, formIndex);
          }
        );
      });
    }

    function handleSuccess(response, statusElement, formIndex) {
      forms[formIndex].reset();
      statusElement.classList.add("success");
      statusElement.innerHTML = '<i class="far fa-check-circle"></i> Thank you message sent.';
      // You can do something with the response from the server if needed.
    }

    function handleError(statusCode, responseText, statusElement, formIndex) {
      statusElement.classList.add("error");
      statusElement.innerHTML = '<i class="far fa-times-circle"></i> Oops! There was a problem.';
      // You can display more specific error information if needed.
    }

    function sendAjaxRequest(method, url, data, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          successCallback(xhr.response);
        } else {
          errorCallback(xhr.status, xhr.responseText);
        }
      };
      xhr.send(data);
    }

    var forms = document.querySelectorAll(".dreamit-form, .dreamit-form2, .dreamit-form3, .dreamit-form4");
    var statuses = document.querySelectorAll(".status, .status2, .status3, .status4");

    forms.forEach(function (form, index) {
      handleFormSubmission(form, statuses[index], index);
    });
  });

  /* ---------------------------------------------------------------------- */
  /* ----------- Activate Menu Item on Reaching Different Sections ---------- */
  /* ---------------------------------------------------------------------- */
  var $onepage_nav = $(".onepage-nav");
  var $sections = $("section");
  var $window = $(window);
  function TM_activateMenuItemOnReach() {
    if ($onepage_nav.length > 0) {
      var cur_pos = $window.scrollTop() + 2;
      var nav_height = $onepage_nav.outerHeight();
      $sections.each(function () {
        var top = $(this).offset().top - nav_height - 80,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          $onepage_nav.find("a").parent().removeClass("current").removeClass("active");
          $sections.removeClass("current").removeClass("active");
          $onepage_nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .parent()
            .addClass("current")
            .addClass("active");
        }

        if (cur_pos <= nav_height && cur_pos >= 0) {
          $onepage_nav.find("a").parent().removeClass("current").removeClass("active");
          $onepage_nav.find('a[href="#header"]').parent().addClass("current").addClass("active");
        }
      });
    }
  }

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
    TM_activateMenuItemOnReach();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  /*------------- preloader js --------------*/
  var percentage = 0;
  var LoadingCounter = setInterval(function () {
    if (percentage <= 100) {
      // $('#loading-screen ').css('opacity', (100 - percentage));
      $("#loading-screen .loading-counter").text(percentage + "%");
      $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
      $("#loading-screen .progress-line").css("transform", "scale(" + percentage / 100 + ")");
      percentage++;
    } else {
      $("#loading-screen").fadeOut(500);
      setTimeout(() => {
        $("#loading-screen").remove();
      }, 500);
      clearInterval(LoadingCounter);
    }
  }, 10);
  /*-----------------  End preloader jS -----------------  */
})(window.jQuery);

// Dark Lite

const button = document.querySelector(".darkmode-toggle");
(function () {
  let onpageLoad = localStorage.getItem("theme");
  if (onpageLoad === "dark-theme") {
    document.body.classList.add("dark-theme");
  }
})();


function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-theme");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-theme") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark-theme");
  }
}





