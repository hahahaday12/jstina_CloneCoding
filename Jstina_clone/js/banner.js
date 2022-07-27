'use strict';

const bannerBox = document.querySelector('#bannerBox > ul');
const bannerItem = document.querySelectorAll('.banner_item');

const size = bannerItem[0].clientWidth;
let counter = 0;

let banner = setInterval(() => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 3000);

const font = document.getElementById('font');

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    if (mouseY > 200 && mouseX < 1920) {
      
      font.style.display = "block";
      font.style.left = mouseX + "px";
      font.style.top = mouseY + "px";
    } else {
      font.style.display = "none";
    }
  });


const category = document.getElementById("category");
const hideMenu = document.querySelector(".hidemenu");

category.addEventListener("mouseover", () => {
  if (hideMenu.classList.contains("on")) {
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});

hideMenu.addEventListener('mouseleave', () => {
  if (hideMenu.classList.contains('on')) {
    hideMenu.classList.remove('on');
  } else {
    hideMenu.classList.add('on');
  }
});
