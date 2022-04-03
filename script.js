let select = document.querySelectorAll(".select");
let result = document.querySelector(".exchange-rate");
let btn = document.querySelector(".btn");
let data = 0;
let bigData = 0;
let date = document.querySelector(".date");
let recently1 = document.querySelector(".exchange-rate1");
let recently2 = document.querySelector(".exchange-rate2");
let recently3 = document.querySelector(".exchange-rate3");
fetch("https://api.fastforex.io/fetch-all?api_key=cd819107bf-af7afd5e1e-r9qw6m")
  .then((response) => response.json())
  .then(function (el1) {
    bigData = el1;
    let cur = el1.results;

    recently1.textContent =
      "1 USD = " + (cur.UZS / cur.USD).toFixed(3) + " SUM";
    recently2.textContent =
      "1 RUB = " + (cur.UZS / cur.RUB).toFixed(3) + " SUM";
    data = cur;
    recently3.textContent =
      "1 EUR = " + (cur.UZS / cur.EUR).toFixed(3) + " SUM";
    data = cur;
    date.textContent = `Last updated on ` + bigData.updated;
    for (let keys in cur) {
      select2(keys);
    }
  });
function select2(el) {
  let el2 = `<option value="${el}">${el}</option>`;
  for (let el of select) {
    el.insertAdjacentHTML("beforeend", el2);
  }
}

// btn.addEventListener("click", natija);
// window.addEventListener("keydown", function (e) {
//   if (e.key == "Enter") {
//     natija(e);
//   }
// });
setInterval(function () {
  let a = document.querySelector(".input").value;
  if (a < 0) {
    a *= -1;
    document.querySelector(".input").value = a;
  }
  let select1 = document.getElementsByClassName("select1")[0].value;
  let select2 = document.getElementsByClassName("select2")[0].value;
  let res = (data[select2] / data[select1]) * a;
  result.textContent = `${a} ${select1} = ${res.toFixed(3)} ${select2}`;
}, 100);
// function natija(e) {
//   e.preventDefault(e);
//   let a = document.querySelector(".input").value;
//   if (a < 0) {
//     a *= -1;
//     document.querySelector(".input").value = a;
//   }
//   let select1 = document.getElementsByClassName("select1")[0].value;
//   let select2 = document.getElementsByClassName("select2")[0].value;
//   let res = (data[select2] / data[select1]) * a;
//   result.textContent = `${a} ${select1} = ${res} ${select2}`;
// }
