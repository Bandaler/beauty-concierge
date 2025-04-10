
const colorMark = () => {
  document.querySelectorAll('.product-card__item-colors__items').forEach(container => {
    const items = container.querySelectorAll('.product-card__item-color__item');

    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
      });
    });
  });

}

const volumeMark = () => {
  document.querySelectorAll('.product-card__item-volumes__items').forEach(container => {
    const items = container.querySelectorAll('.product-card__item-volume__item');


    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
      });
    });
  });
}


colorMark()

volumeMark()

const filtersShow = () => {
    // Открытие/закрытие filters-form по кнопке
    const trigger = document.querySelector('.filters-modal__trigger');
    const filtersForm = document.querySelector('.filters-form');
  
    if (trigger && filtersForm) {
      trigger.addEventListener('click', () => {
        filtersForm.classList.toggle('active');
      });
    }
}

filtersShow()


const filtersAcc = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const acc = document.getElementsByClassName("filters-form__title");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        const isActive = this.classList.contains("active");
        const panel = this.nextElementSibling;

        // Закрываем все
        for (let j = 0; j < acc.length; j++) {
          acc[j].classList.remove("active");
          acc[j].nextElementSibling.classList.remove("active");
        }

        // Если текущий был неактивен — активируем его
        if (!isActive) {
          this.classList.add("active");
          panel.classList.add("active");
        }
      });
    }
  });
}

filtersAcc()



function formatNumber(value) {
  const num = value.replace(/\D/g, ''); // убираем всё кроме цифр
  if (!num) return '';
  return Number(num).toLocaleString('ru-RU') + ' ₽';
}

function setupPriceInput(input) {
  input.addEventListener('input', () => {
    const cursorPosition = input.selectionStart;
    const rawValue = input.value.replace(/\D/g, '');

    const formatted = formatNumber(input.value);
    input.value = formatted;

    // Сохраняем число в data-атрибуте, если нужно
    input.dataset.raw = rawValue;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const minInput = document.getElementById('min-price');
  const maxInput = document.getElementById('max-price');

  setupPriceInput(minInput);
  setupPriceInput(maxInput);

  // Инициализация с начальным значением
  minInput.value = formatNumber(minInput.value);
  maxInput.value = formatNumber(maxInput.value);
});




