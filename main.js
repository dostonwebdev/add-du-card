const products = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQITPSXLmePKECphhB5Vmr3Kc3FGYifdLdq91Cy5yLa1V3PJ_QQyz80S1ByT74zvv7XwDHMTolhxeGLKWodqUqk2KGgOvr5bTKdX99GCF-RnXZGXD7D_34ip1IIRyPKLUeQz9QS2nI&usqp=CAc",
    price: "2000$",
    brand: "Apple iPhone 15 Pro Max - yuqori sifatli va qulay telefon."
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg",
    price: "1800$",
    brand: "Samsung Galaxy S23 Ultra - kuchli va ishonchli smartfon."
  },
  {
    id: 3,
    title: "Google Pixel 7",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhejni0c5Xze4n5QTaSM3yxjvkoTvpxQux2D-8XIeCuGufkkCit4RaiZr7FEQDcJtEK-iGTp5OaECyH_Pc22OIh4Do3S0vlqc0i2zjm35DhA-pghgcbGPjrsThIPfBQpToKX95l786CiE&usqp=CAc",
    price: "1000$",
    brand: "Google Pixel 7 - eng yaxshi kamera va sof Android tajribasi."
  },
  {
    id: 4,
    title: "OnePlus 11",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZyMeiMx5EwUp5m7D-iqXzN3hEFfx2nQMsg&s",
    price: "900$",
    brand: "OnePlus 11 - tezkor va kuchli ishlash uchun ideal."
  },
  {
    id: 5,
    title: "Sony Xperia 5 II",
    img: "https://mobile-review.com/review/image/sony/xperia-5ii-fl/pic/25.jpg",
    price: "950$",
    brand: "Sony Xperia 5 II - suratga olish va multimedialar uchun."
  },
  {
    id: 6,
    title: "Huawei P50 Pro",
    img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50-pro-1.jpg",
    price: "1200$",
    brand: "Huawei P50 Pro - ilg'or texnologiyalar va kuchli kamera."
  },
  {
    id: 7,
    title: "Xiaomi Mi 11 Ultra",
    img: "https://openshop.uz/uploads/products/photos/202109/YIJuF5YjYUZsi67mgfrISSmhhBkmKUGllKAE3olW.jpg",
    price: "1100$",
    brand: "Xiaomi Mi 11 Ultra - yuqori sifat va ajoyib dizayn."
  },
  {
    id: 8,
    title: "Oppo Find X5 Pro",
    img: "https://i.redd.it/rf7ozvi9isj81.jpg",
    price: "950$",
    brand: "Oppo Find X5 Pro - zamonaviy va kuchli smartfon."
  },
  {
    id: 9,
    title: "Vivo X70 Pro+",
    img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x70-pro-plus-1.jpg",
    price: "1050$",
    brand: "Vivo X70 Pro+ - ajoyib kamera va yuqori ishlash."
  },
  {
    id: 10,
    title: "Realme GT 2 Pro",
    img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt2-pro-2.jpg",
    price: "800$",
    brand: "Realme GT 2 Pro - tezkor ishlash va arzon narx."
  },
  {
    id: 11,
    title: "Nokia X50",
    img: "https://i.ytimg.com/vi/I68-KVmMJyI/maxresdefault.jpg",
    price: "700$",
    brand: "Nokia X50 - mustahkamlik va ishonchli ishlash."
  },
  {
    id: 12,
    title: "Motorola Edge 30 Ultra",
    img: "https://root-nation.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/12/img_1079-1.jpg.webp",
    price: "850$",
    brand: "Motorola Edge 30 Ultra - yuqori sifatli ekran va ishlash."
  },
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQITPSXLmePKECphhB5Vmr3Kc3FGYifdLdq91Cy5yLa1V3PJ_QQyz80S1ByT74zvv7XwDHMTolhxeGLKWodqUqk2KGgOvr5bTKdX99GCF-RnXZGXD7D_34ip1IIRyPKLUeQz9QS2nI&usqp=CAc",
    price: "2000$",
    brand: "Apple iPhone 15 Pro Max - yuqori sifatli va qulay telefon."
  },

  {
    id: 14,
    title: "Lenovo Legion Phone Duel 2",
    img: "https://i.redd.it/rf7ozvi9isj81.jpg",
    price: "1100$",
    brand: "Lenovo Legion Phone Duel 2 - kuchli o'yin telefon."
  },
  {
    id: 15,
    title: "ZTE Axon 30 Ultra",
    img: "https://i.redd.it/rf7ozvi9isj81.jpg",
    price: "950$",
    brand: "ZTE Axon 30 Ultra - yuqori aniqlikdagi kamera va tezkor ishlash."
  },
  {
    id: 9,
    title: "Vivo X70 Pro+",
    img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x70-pro-plus-1.jpg",
    price: "1050$",
    brand: "Vivo X70 Pro+ - ajoyib kamera va yuqori ishlash."
  },
];

const cards=document.querySelector(".cards")

function displatprod(products){
  let str=""
  products.forEach((produc)=>{
    str+=`
    <div class="card" onclick="passdet(${produc.id})">
    <img src=${produc.img} alt="${produc.title}">
    <h3>${produc.title}</h3>
    <p>${produc.brand}</p>
    <p>${produc.price}</p>
    <button class="btn">send</button>
  </div>
    `
    cards.innerHTML=str
  })
}

displatprod(products)
function passdet(id){

  const selectedCard = products.find(product => product.id == id);
  const savedProduct = JSON.parse(localStorage.getItem("selectedCard")) || [];

  savedProduct.push(selectedCard);

  localStorage.setItem("selectedCard", JSON.stringify(savedProduct));
  window.location.pathname = "./pages/product.html"
}

const dark=document.querySelector(".dark")
const light=document.querySelector(" nav img")
// const body=document.querySelector("body")
dark.addEventListener("click",()=>{
 document.body.classList.toggle("darkk")
 if(document.body.classList.contains("darkk")){
light.src="./img/light.svg"
 }else{
  light.src="./img/darc.svg"
 }
})




