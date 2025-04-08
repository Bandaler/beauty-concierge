document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("quantity");
  const decrementBtn = document.getElementById("decrement");
  const incrementBtn = document.getElementById("increment");

  function updateButtons() {
      const min = parseInt(input.min) || -Infinity;
      const max = parseInt(input.max) || Infinity;
      const value = parseInt(input.value);

      decrementBtn.disabled = value <= min;
      incrementBtn.disabled = value >= max;
  }

  decrementBtn.addEventListener("click", function() {
      if (input.value > input.min) {
          input.value--;
          updateButtons();
      }
  });

  incrementBtn.addEventListener("click", function() {
      if (input.value < input.max) {
          input.value++;
          updateButtons();
      }
  });

  input.addEventListener("input", function() {
      updateButtons();
  });

  updateButtons(); // Обновляем кнопки при загрузке
});

document.getElementById("switcher").addEventListener("click", function() {
  this.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="delivery"]');
    const containers = document.querySelectorAll(".export-point");

    function updateDeliveryView(selectedId) {
      containers.forEach((container) => {
        const containerId = container.getAttribute("data-container");
        if (containerId === selectedId) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      });
    }

    // При загрузке страницы активировать выбранный radio
    const checkedRadio = document.querySelector('input[name="delivery"]:checked');
    if (checkedRadio) {
      updateDeliveryView(checkedRadio.id);
    }

    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        updateDeliveryView(radio.id);
      });
    });
  });