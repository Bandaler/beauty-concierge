const tabsDashboard = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".dashboard__tab-btn");
    const tabContents = document.querySelectorAll(".dashboard__tabs__content");

    tabButtons.forEach(button => {
      button.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");


        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));


        this.classList.add("active");
        document.querySelector(`.dashboard__tabs__content[data-tab-content="${tabId}"]`).classList.add("active");
      });
    });
  });

}

tabsDashboard()

document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="radio-group"]');
  const contents = document.querySelectorAll(".radio-tab__content .content");

  function updateTabs() {
      contents.forEach(content => content.classList.remove("active"));
      if (document.getElementById("test1").checked) {
          document.querySelector(".content1").classList.add("active");
      } else if (document.getElementById("test2").checked) {
          document.querySelector(".content2").classList.add("active");
      }
  }

  radios.forEach(radio => radio.addEventListener("change", updateTabs));
  updateTabs(); // Запускаем при загрузке страницы
});
