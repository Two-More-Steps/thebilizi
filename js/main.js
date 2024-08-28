document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".main-slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 3, 
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionEnd: function () {
        // 모든 슬라이드에서 강조 클래스를 제거
        swiper.slides.forEach(function (slide) {
          slide.classList.remove("swiper-slide-active");
        });
        // 현재 활성 슬라이드에 강조 클래스를 추가
        swiper.slides[swiper.activeIndex].classList.add("swiper-slide-active");
      },
    },
  });
  var swiper = new Swiper(".partner-slider", {
    slidesPerView: "auto",
    spaceBetween: 156,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  });
  var swiper = new Swiper(".prod-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
