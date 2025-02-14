function tabbedNav(event, tabName) {
  let i, main_content, tabbed_btn;

  // hide all .main_content elements
  main_content = document.getElementsByClassName("main_content");
  for (i = 0; i < main_content.length; i++) {
    main_content[i].style.display = "none";
  }

  // hide .active from all .tabbed_btn elements
  tabbed_btn = document.getElementsByClassName("tabbed_btn");
  for (i = 0; i < tabbed_btn.length; i++) {
    tabbed_btn[i].className = tabbed_btn[i].className.replace(" active", "");
  }

  // add .active to current tab and show content
  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.className += " active";
}

function devImgBG(count) {
  // append scrollBG divs
  for (let i = 0; i < count; i++) {
    const para = document.createElement("div");

    para.className = "scrollBG";

    if (i % 2 === 0) {
      para.classList.add("scrollingBG");
    } else {
      para.classList.add("scrollingBG-alt");
    }

    const scrollCont = document.getElementsByClassName("scrollCont");

    for (let j = 0; j < scrollCont.length; j++) {
      scrollCont[j].appendChild(para);
    }
  }
}

//console.log("main.js loaded");
