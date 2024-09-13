
const singleCard = document.querySelector(".selected-cards");

const products = JSON.parse(localStorage.getItem("selectedCard")) || []

if (products.length == 0) {
  singleCard.innerHTML = `
    <p> Hech nima yo'q</p>
  `
}else{
  let str=""
products.forEach((produc)=>{
  str+=`
  <div class="card">
  <img src=${produc.img} alt="${produc.title}">
  <h3>${produc.title}</h3>
  <p>${produc.brand}</p>
  <p>${produc.price}</p>
  <a href="/">send</a>
  </div>
  `
  singleCard.innerHTML=str
  })
}
