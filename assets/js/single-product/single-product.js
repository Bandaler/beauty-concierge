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
      fixedWidth: 80,
      fixedHeight: 80,
      gap: 8,
      rewind: true,
      pagination: false,
      isNavigation: true,
      direction: "ttb",
      heightRatio: 50,
      arrows: false, // Отключаем стандартные стрелки
      breakpoints: {
        600: {
          fixedWidth: 50,
          fixedHeight: 50,
          height: "auto",
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    // Обрабатываем клики по кастомным стрелкам
    document.querySelector(".custom-splide__arrow--prev").addEventListener("click", function () {
      thumbnails.go("<");
    });

    document.querySelector(".custom-splide__arrow--next").addEventListener("click", function () {
      thumbnails.go(">");
    });
  }

  initSplide("#main-carousel", "#thumbnail-carousel");
});


document.addEventListener("DOMContentLoaded", function () {
  const colorItems = document.querySelectorAll(".single-product__chars-item.image-char");
  const selectedImage = document.querySelector(".selected-color__image");
  const selectedName = document.querySelector(".selected-color__name");
  const selectedTranscript = document.querySelector(".selected-color__transcript");

  function updateSelectedColor(item) {

    colorItems.forEach(el => el.classList.remove("active"));

    item.classList.add("active");


    const imageTag = item.querySelector("img").outerHTML;
    const name = item.querySelector(".chars-name").textContent.trim();
    const transcript = item.querySelector(".chars-descr").textContent.trim();


    selectedImage.innerHTML = imageTag;
    selectedName.textContent = name;
    selectedTranscript.textContent = transcript;
  }


  colorItems.forEach(item => {
    item.addEventListener("click", function () {
      updateSelectedColor(this);
    });
  });

  // Устанавливаем активный элемент по умолчанию (первый)
  if (colorItems.length > 0) {
    updateSelectedColor(colorItems[0]);
  }
});


const selectVolume = () => {
  let items = document.querySelectorAll('.single-product__chars-item.simple-char');

  items.forEach(el => {
    el.addEventListener('click', function () {

      items.forEach(item => item.classList.remove("active"));

      this.classList.add("active");
    });
  });
}

selectVolume();

const shareLink = () => {
  const subscribeButton = document.querySelector(".btn-subscribe");

  subscribeButton.addEventListener("click", function () {

    navigator.clipboard.writeText(window.location.href)
      .then(() => {

        const notification = document.createElement("div");
        notification.textContent = "Ссылка скопирована!";
        notification.style.position = "fixed";
        notification.style.top = "50%";
        notification.style.left = "50%";
        notification.style.transform = "translate(-50%, -50%)";
        notification.style.background = "black";
        notification.style.color = "white";
        notification.style.padding = "10px 20px";
        notification.style.fontSize = "18px";
        notification.style.borderRadius = "5px";
        notification.style.zIndex = "1000";
        notification.style.opacity = "1";
        notification.style.transition = "opacity 0.5s";

        // Добавляем уведомление в body
        document.body.appendChild(notification);

        // Через 1 секунду скрываем и удаляем уведомление
        setTimeout(() => {
          notification.style.opacity = "0";
          setTimeout(() => notification.remove(), 200);
        }, 200);
      })
      .catch(err => console.error("Ошибка копирования: ", err));
  });
}

shareLink()


const tabs = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".single-product__tab-btn");
    const tabContents = document.querySelectorAll(".single-product__descr-tabs__content");

    tabButtons.forEach(button => {
      button.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");


        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));


        this.classList.add("active");
        document.querySelector(`.single-product__descr-tabs__content[data-tab-content="${tabId}"]`).classList.add("active");
      });
    });
  });

}

tabs()

const tabsReviews = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const reviewTabButtons = document.querySelectorAll(".single-product__reviews__tab-btn");
    const reviewTabContents = document.querySelectorAll(".single-product__reviews-tabs__content");

    reviewTabButtons.forEach(button => {
      button.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");


        reviewTabButtons.forEach(btn => btn.classList.remove("active"));
        reviewTabContents.forEach(content => content.classList.remove("active"));

 
        this.classList.add("active");
        document.querySelector(`.single-product__reviews-tabs__content[data-tab-content="${tabId}"]`).classList.add("active");
      });
    });
  });

}

tabsReviews()


document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("image-upload");
  const previewContainer = document.querySelector(".preview");

  fileInput.addEventListener("change", function () {
    previewContainer.innerHTML = ""; // Очищаем предпросмотр

    Array.from(fileInput.files).forEach(file => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("image-wrapper");

        const img = document.createElement("img");
        img.src = e.target.result;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.innerHTML = "✖";
        removeBtn.addEventListener("click", () => wrapper.remove()); // Удаление по клику

        wrapper.appendChild(img);
        wrapper.appendChild(removeBtn);
        previewContainer.appendChild(wrapper);
      };

      reader.readAsDataURL(file);
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");


  document.querySelectorAll("[data-modal]").forEach(button => {
      button.addEventListener("click", function () {
          const modalType = this.getAttribute("data-modal");
          const modal = document.querySelector(`.modal[data-modal="${modalType}"]`);

          if (modal) {
              overlay.classList.add("active");
              modal.classList.add("active");
          }
      });
  });

  function closeModal() {
      document.querySelectorAll(".modal").forEach(modal => modal.classList.remove("active"));
      overlay.classList.remove("active");
  }

 
  document.querySelectorAll(".modal-close").forEach(closeBtn => {
      closeBtn.addEventListener("click", function (event) {
          event.stopPropagation(); 
          closeModal();
      });
  });


  overlay.addEventListener("click", closeModal);

 
  document.querySelectorAll(".modal").forEach(modal => {
      modal.addEventListener("click", function (event) {
          if (!event.target.closest(".modal-inner")) {
              closeModal();
          }
      });
  });
});



