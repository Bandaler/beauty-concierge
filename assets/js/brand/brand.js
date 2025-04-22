document.addEventListener("DOMContentLoaded", function () {
  function initSplide(mainSelector, thumbsSelector) {
    var main = new Splide(mainSelector, {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: mainSelector.includes("__modal") ? true : false,
      breakpoints: {
        600: {
          arrows: false,
        },
      },
    });

    var thumbnails = new Splide(thumbsSelector, {
      // fixedWidth: 80,
      // fixedHeight: 80,
      gap: 6,
      rewind: true,
      pagination: false,
      isNavigation: true,
      arrows: false, // Отключаем стандартные стрелки
      breakpoints: {
        600: {
          // fixedWidth: 50,
          // fixedHeight: 50,
          // height: "auto",
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    // Обрабатываем клики по кастомным стрелкам
    // document.querySelector(".custom-splide__arrow--prev").addEventListener("click", function () {
    //   thumbnails.go("<");
    // });

    // document.querySelector(".custom-splide__arrow--next").addEventListener("click", function () {
    //   thumbnails.go(">");
    // });
  }

  initSplide("#brand-main-carousel", "#brand-thumbnail-carousel");
});
