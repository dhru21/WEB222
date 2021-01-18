/*
Name: Dhruv Bipinbhai Patel
Student#: 142572197
Email: dbpatel31@myseneca.ca
*/

window.onload = function () {
  // grab title element and change the web page's title to "Test 6" using textContent
  let title = document.querySelector("title");
  title.textContent = "Test 6";

  // paragraph with class name intro

  let intro = document.querySelector(".intro");

  // span element within intro class element

  let introSpan = document.querySelector("span");

  intro.innerHTML = `Dhruv Bipinbhai Patel, `;

  introSpan.innerText = "#142572197";

  // add span element to paragraph element with class of intro.
  intro.appendChild(introSpan);

  //button element with id of start
  let button = document.querySelector("#start");

  let main = document.querySelector("main");

  button.addEventListener("click", function () {
    // create span element
    let span = document.createElement("span");

    span.textContent = "Start was clicked! ";
    main.appendChild(span);
  });

  // setInter function
  setInterval(function () {
    let h1 = document.querySelector("h1");

    //span elements in side main
    let N = document.querySelectorAll("main span").length;

    h1.textContent = `There are ${N} span elements in main`;
  }, 3000);
};
