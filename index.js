//botao 1
const ToggleBtn = document.getElementById('ToggleBtn');
const ToggleBtn2 = document.getElementById('ToggleBtn2');
const divList = document.getElementById('overlay');

ToggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'block') {
    divList.style.display = 'none';
  } else {
    divList.style.display = 'block';
  }
});


ToggleBtn2.addEventListener('click', () => {
  if (divList.style.display === 'block') {
    divList.style.display = 'none';
  } else {
    divList.style.display = 'block';
  }
});

//botao 2
const ToggleBtn3 = document.getElementById('ToggleBtn3');
const ToggleBtn4 = document.getElementById('ToggleBtn4');
const divList2 = document.getElementById('overlay2');

ToggleBtn3.addEventListener('click', () => {
  if (divList2.style.display === 'block') {
    divList2.style.display = 'none';
  } else {
    divList2.style.display = 'block';
  }
});


ToggleBtn4.addEventListener('click', () => {
  if (divList2.style.display === 'block') {
    divList2.style.display = 'none';
  } else {
    divList2.style.display = 'block';
  }
});

//botao 3
const ToggleBtn5 = document.getElementById('ToggleBtn5');
const ToggleBtn6 = document.getElementById('ToggleBtn6');
const divList3 = document.getElementById('overlay3');

ToggleBtn5.addEventListener('click', () => {
  if (divList3.style.display === 'block') {
    divList3.style.display = 'none';
  } else {
    divList3.style.display = 'block';
  }
});


ToggleBtn6.addEventListener('click', () => {
  if (divList3.style.display === 'block') {
    divList3.style.display = 'none';
  } else {
    divList3.style.display = 'block';
  }
});

//botao 4
const ToggleBtn7 = document.getElementById('ToggleBtn7');
const ToggleBtn8 = document.getElementById('ToggleBtn8');
const divList4 = document.getElementById('overlay4');

ToggleBtn7.addEventListener('click', () => {
  if (divList4.style.display === 'block') {
    divList4.style.display = 'none';
  } else {
    divList4.style.display = 'block';
  }
});


ToggleBtn8.addEventListener('click', () => {
  if (divList4.style.display === 'block') {
    divList4.style.display = 'none';
  } else {
    divList4.style.display = 'block';
  }
});

//botao 5
const ToggleBtn9 = document.getElementById('ToggleBtn9');
const ToggleBtn10 = document.getElementById('ToggleBtn10');
const divList5 = document.getElementById('overlay5');

ToggleBtn9.addEventListener('click', () => {
  if (divList5.style.display === 'block') {
    divList5.style.display = 'none';
  } else {
    divList5.style.display = 'block';
  }
});


ToggleBtn10.addEventListener('click', () => {
  if (divList5.style.display === 'block') {
    divList5.style.display = 'none';
  } else {
    divList5.style.display = 'block';
  }
});

//botao 6
const ToggleBtn11 = document.getElementById('ToggleBtn11');
const ToggleBtn12 = document.getElementById('ToggleBtn12');
const divList6 = document.getElementById('overlay6');

ToggleBtn11.addEventListener('click', () => {
  if (divList6.style.display === 'block') {
    divList6.style.display = 'none';
  } else {
    divList6.style.display = 'block';
  }
});


ToggleBtn12.addEventListener('click', () => {
  if (divList6.style.display === 'block') {
    divList6.style.display = 'none';
  } else {
    divList6.style.display = 'block';
  }
});

//botao 7
const ToggleBtn13 = document.getElementById('ToggleBtn13');
const ToggleBtn14 = document.getElementById('ToggleBtn14');
const divList7 = document.getElementById('overlay7');

ToggleBtn13.addEventListener('click', () => {
  if (divList7.style.display === 'block') {
    divList7.style.display = 'none';
  } else {
    divList7.style.display = 'block';
  }
});


ToggleBtn14.addEventListener('click', () => {
  if (divList7.style.display === 'block') {
    divList7.style.display = 'none';
  } else {
    divList7.style.display = 'block';
  }
});

//botao 8
const ToggleBtn15 = document.getElementById('ToggleBtn15');
const ToggleBtn16 = document.getElementById('ToggleBtn16');
const divList8 = document.getElementById('overlay8');

ToggleBtn15.addEventListener('click', () => {
  if (divList8.style.display === 'block') {
    divList8.style.display = 'none';
  } else {
    divList8.style.display = 'block';
  }
});


ToggleBtn16.addEventListener('click', () => {
  if (divList8.style.display === 'block') {
    divList8.style.display = 'none';
  } else {
    divList8.style.display = 'block';
  }
});

//slider carousel1
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});


//slider carousel2
const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 0;
const items2 = document.querySelectorAll(".item2");
const maxItems2 = items.length;

controls2.forEach((control2) => {
  control2.addEventListener("click", (e) => {
    isLeft2 = e.target.classList.contains("arrow-left2");

    if (isLeft2) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 0;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item2) => item2.classList.remove("current-item2"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items2[currentItem2].classList.add("current-item2");
  });
});

//slider carousel3
const controls3 = document.querySelectorAll(".control3");
let currentItem3 = 0;
const items3 = document.querySelectorAll(".item3");
const maxItems3 = items.length;

controls3.forEach((control3) => {
  control3.addEventListener("click", (e) => {
    isLeft3 = e.target.classList.contains("arrow-left3");

    if (isLeft3) {
      currentItem3 -= 1;
    } else {
      currentItem3 += 1;
    }

    if (currentItem3 >= maxItems3) {
      currentItem3 = 0;
    }

    if (currentItem3 < 0) {
      currentItem3 = maxItems3 - 1;
    }

    items3.forEach((item3) => item3.classList.remove("current-item3"));

    items3[currentItem3].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items3[currentItem3].classList.add("current-item3");
  });
});

//slider carousel4
const controls4 = document.querySelectorAll(".control4");
let currentItem4 = 0;
const items4 = document.querySelectorAll(".item4");
const maxItems4 = items.length;

controls4.forEach((control4) => {
  control4.addEventListener("click", (e) => {
    isLeft4 = e.target.classList.contains("arrow-left4");

    if (isLeft4) {
      currentItem4 -= 1;
    } else {
      currentItem4 += 1;
    }

    if (currentItem4 >= maxItems4) {
      currentItem4 = 0;
    }

    if (currentItem4 < 0) {
      currentItem4 = maxItems4 - 1;
    }

    items4.forEach((item4) => item4.classList.remove("current-item4"));

    items4[currentItem4].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items4[currentItem4].classList.add("current-item4");
  });
});

//slider carousel5
const controls5 = document.querySelectorAll(".control5");
let currentItem5 = 0;
const items5 = document.querySelectorAll(".item5");
const maxItems5 = items.length;

controls5.forEach((control5) => {
  control5.addEventListener("click", (e) => {
    isLeft5 = e.target.classList.contains("arrow-left5");

    if (isLeft5) {
      currentItem5 -= 1;
    } else {
      currentItem5 += 1;
    }

    if (currentItem5 >= maxItems5) {
      currentItem5 = 0;
    }

    if (currentItem5 < 0) {
      currentItem5 = maxItems5 - 1;
    }

    items5.forEach((item5) => item5.classList.remove("current-item5"));

    items5[currentItem5].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items5[currentItem5].classList.add("current-item5");
  });
});

//slider carousel6
const controls6 = document.querySelectorAll(".control6");
let currentItem6 = 0;
const items6 = document.querySelectorAll(".item6");
const maxItems6 = items.length;

controls6.forEach((control6) => {
  control6.addEventListener("click", (e) => {
    isLeft6 = e.target.classList.contains("arrow-left6");

    if (isLeft6) {
      currentItem6 -= 1;
    } else {
      currentItem6 += 1;
    }

    if (currentItem6 >= maxItems6) {
      currentItem6 = 0;
    }

    if (currentItem6 < 0) {
      currentItem6 = maxItems6 - 1;
    }

    items6.forEach((item6) => item6.classList.remove("current-item6"));

    items6[currentItem6].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items6[currentItem6].classList.add("current-item6");
  });
});

//slider carousel7
const controls7 = document.querySelectorAll(".control7");
let currentItem7 = 0;
const items7 = document.querySelectorAll(".item7");
const maxItems7 = items.length;

controls7.forEach((control7) => {
  control7.addEventListener("click", (e) => {
    isLeft7 = e.target.classList.contains("arrow-left7");

    if (isLeft7) {
      currentItem7 -= 1;
    } else {
      currentItem7 += 1;
    }

    if (currentItem7 >= maxItems7) {
      currentItem7 = 0;
    }

    if (currentItem7 < 0) {
      currentItem7 = maxItems7 - 1;
    }

    items7.forEach((item7) => item7.classList.remove("current-item7"));

    items7[currentItem7].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items7[currentItem7].classList.add("current-item7");
  });
});

//slider carousel8
const controls8 = document.querySelectorAll(".control8");
let currentItem8 = 0;
const items8 = document.querySelectorAll(".item8");
const maxItems8 = items.length;

controls8.forEach((control8) => {
  control8.addEventListener("click", (e) => {
    isLeft8 = e.target.classList.contains("arrow-left8");

    if (isLeft8) {
      currentItem8 -= 1;
    } else {
      currentItem8 += 1;
    }

    if (currentItem8 >= maxItems8) {
      currentItem8 = 0;
    }

    if (currentItem8 < 0) {
      currentItem8 = maxItems8 - 1;
    }

    items8.forEach((item8) => item8.classList.remove("current-item8"));

    items8[currentItem8].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items8[currentItem8].classList.add("current-item8");
  });
});