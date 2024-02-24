function tabs(){
    const tabParent = document.querySelector(".tabheader__items"),
    tab = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content");

  function hideTabContents() {
    tab.forEach((tabs) => {
      tabs.classList.remove("tabheader__item_active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.add("hide");
      tabContent.classList.add("show");
    });
  }

  function showTabContent(index = 0) {
    tab[index].classList.add("tabheader__item_active");
    tabContents[index].classList.add("show", "fade");
    tabContents[index].classList.remove("hide");
  }
  hideTabContents();
  showTabContent();

  tabParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tab.forEach((tabs, index) => {
        if (target === tabs) {
          hideTabContents();
          showTabContent(index);
        }
      });
    }
  });
}

export default tabs