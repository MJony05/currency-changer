let select = document.querySelectorAll(".select");
let result = document.querySelector(".exchange-rate");
let btn = document.querySelector(".btn");
let data = 0;
fetch(
  "http://api.exchangeratesapi.io/v1/latest?access_key=83df676cb8392baa139992175a54ac12"
)
  .then((response) => response.json())
  .then(function (el1) {
    let cur = el1.rates;
    data = cur;
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

btn.addEventListener("click", natija);
window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    natija(e);
  }
});
function natija(e) {
  e.preventDefault(e);
  let a = document.querySelector(".input").value;
  let select1 = document.getElementsByClassName("select1")[0].value;
  let select2 = document.getElementsByClassName("select2")[0].value;
  let res = (data[select2] / data[select1]) * a;
  result.textContent = `${a} ${select1} = ${res} ${select2}`;
}
