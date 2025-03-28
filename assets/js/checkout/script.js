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