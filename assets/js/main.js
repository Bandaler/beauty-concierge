document.addEventListener('DOMContentLoaded', () => {

  var acc = document.getElementsByClassName("submenu__btn");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.log('click')
      var panel = this.nextElementSibling;
      if (panel.classList.add('active')) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
  });


  const menu = () => {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.navigation');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.close-menu');
    let body = document.querySelector('body')
  
  
    burger.addEventListener('click', () => {
      menu.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('lock');
    })

    close.addEventListener('click', () => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
    })

    overlay.addEventListener('click', () => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
    })
  }
  
  menu()


  const menuBrands = () => {
    let burger = document.querySelector('.brands-btn');
    let menu = document.querySelector('.brands-menu');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.close-brands');
    let body = document.querySelector('body')
  
  
    burger.addEventListener('click', () => {
      menu.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('lock');
      close.style.position='fixed';
    })

    close.addEventListener('click', () => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
      close.style.position='absolute';
    })

    overlay.addEventListener('click', () => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
      close.style.position='absolute';
    })
  }
  
  menuBrands()



  document.addEventListener("DOMContentLoaded", function () {
    const footerBottom = document.querySelector(".footer-bottom");
    const footerItems = document.querySelector(".footer-items");
    const originalParent = footerBottom.parentElement; // Сохраняем оригинального родителя
    const originalNextSibling = footerBottom.nextElementSibling; // Сохраняем место вставки
  
    function moveFooterBottom() {
      if (window.innerWidth <= 600) {
        if (!footerItems.contains(footerBottom)) {
          footerItems.appendChild(footerBottom);
        }
      } else {
        // Возвращаем на место при ширине больше 600px
        if (originalNextSibling) {
          originalParent.insertBefore(footerBottom, originalNextSibling);
        } else {
          originalParent.appendChild(footerBottom);
        }
      }
    }
  
    // Запускаем при загрузке и при изменении размера экрана
    moveFooterBottom();
    window.addEventListener("resize", moveFooterBottom);
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
  

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.search-form__modal');
    const searchButtons = document.querySelectorAll('.button-search');
    const closeBtn = document.querySelector('.close-search');
  
    // Открытие модалки
    searchButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // чтобы не сработало закрытие при клике
        modal.classList.add('active');
      });
    });
  
    // Закрытие по кнопке закрытия
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  
    // Закрытие по клику вне модалки
    document.addEventListener('click', (e) => {
      if (
        modal.classList.contains('active') &&
        !modal.contains(e.target) &&
        !e.target.classList.contains('button-search')
      ) {
        modal.classList.remove('active');
      }
    });
  });
  