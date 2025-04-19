document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".product-gridt");
    const products=[
    {name:"Texas DZ",disc:"حملات مقاطعة + تصنيع محلي",image:"image/texas.jpg"},
    {name:"LC Waikiki (تركيا)",disc:"حملات مقاطعة + بدائل تركية",image:"image/lc waikiki.png"},
    {name:"Wesh Darek DZ",disc:"علامات محلية وطنية",image:"image/dark.png"},
    {name:"Ziri DZ",disc:"علامات محلية وطنية",image:"image/ziri.jpg"},
    {name:"Defacto (تركيا)",disc:"حملات مقاطعة + بدائل تركية",image:"image/defacto.png"},
    {name:"Mimo DZ ",disc:"منتجات غير مطبّعة",image:"image/mimo.jpg"},
    {name:"Sultana DZ",disc:"منتجات غير مطبّعة",image:"image/sultana.jpg"},
    {name:"Fleurs d’Orient",disc:"حملات مقاطعة + تصنيع محلي",image:"image/fleurs.jpg"},
    {name:"Tayal",disc:"حملات مقاطعة + تصنيع محلي",image:"image/tayal.png"},
    {name:"Hanout DZ",disc:"منتجات غير مطبّعة",image:"image/hanout.jpg"},
    {name:"Hamoud Boualem",disc:"منتجات وطنية معروفة",image:"image/hamoud.png"},
    {name:"Ifri",disc:"منتجات وطنية معروفة",image:"image/ifri.png"},
    {name:"Soummam",disc:"منتجات وطنية معروفة",image:"image/soumam.png"},
    {name:"Vida (تونس)",disc:"منتجات وطنية معروفة",image:"image/vida.png"},
    {name:"NCA Rouiba",disc:"منتجات جزائرية 100%",image:"image/rouiba.jpg"},
    {name:"Trèfle",disc:"شركات وطنية",image:"image/trefle.png"},
    {name:"Café Ben M'Hidi",disc:"لا فروع لها في الجزائر",image:"image/cafe.jpg"},
    {name:"Papa John's",disc:" سلاسل غير داعمة",image:"image/papa.png"},
    {name:"Mimosa",disc:"علامات غير متواطئة ",image:"image/mimosa.png"},
    {name:"Biofa ",disc:"منتجات طبيعية محلية",image:"image/biofa.jpg"},
    {name:"Huawei",disc:"مصادر آسيوية ومحلية",image:"image/hwawi.png"},
    {name:"Ryzen",disc:"أنظمة مفتوحة",image:"image/ryzen.png"},
    {name:"Linux ",disc:"أنظمة مفتوحة",image:"image/linux.png"},
    {name:"IRIS",disc:"مصادر آسيوية ومحلية",image:"image/iris.png"},
    {name:"Stream System ",disc:"بدائل آسيوية",image:"image/stream.png"},
    {name:"Condor",disc:"مصادر آسيوية ومحلية ",image:"image/condor.png"},
    {name:"Xiaomi",disc:"بدائل حرة وآمنة",image:"image/xiaomi.jpg"},
    {name:"Steam Deck",disc:"Steam شركة خاصة",image:"image/steam.png"},
    {name:"Pixelfed",disc:"مفتوح المصدر، لا يتبع لأي شركة داعمة",image:"image/pixel.jpg"},
    {name:"DuckDuckGo",disc:"لا يتتبع المستخدمين، لا دعم معروف لإسرائيل",image:"image/duck.png"},
  ]
    for (let i = 0; i < 30; i++) {
      const product = products[i];
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML =`
        <img src="${product.image}" >
        <div class="product-info">
          <div class="product-title"> ${product.name}</div>
          <div class="product-disc">${product.disc} </div>
        </div>
      ;`
      container.appendChild(card);
    }
  });