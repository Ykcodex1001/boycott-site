 document.addEventListener("DOMContentLoaded", function () {
   const container = document.querySelector(".product-gridt");
   const products=[
   {name:"Nike",disc:"متواجدة في السوق الاسرائيلي بقوة",image:"image/nike.png"},
   {name:"Adidas ",disc:"انسحبت من الرعاية لاحقا لكنها تعاونت سابقا مع جهات اسرائيلية",image:"image/adidas.png"},
   {name:"Puma",disc:"الراعي الرسمي لاتحاد كرة القدم الاسرائيلي",image:"image/puma.png"},
   {name:"Zara",disc:"لديها فروع في المستوطنات ",image:"image/zara.png"},
   {name:" H&M  ",disc:"استثمرت بقوة في السوق الاسرائيلي",image:"image/H&M.png"},
   {name:"Calvin Klein ",disc:"لها انشطة تجارية في اسرائيل وعدم انسحابها من السوق الاسرائيلي",image:"image/ck.png"},
   {name:" Tommy Hilfiger ",disc:"متهمة بالاستثمار او التوزيع في اسرائيل",image:"image/tomi.png"},
   {name:"Victoria’s Secret",disc:"لديها مصانع وعلاقات تجارية مع اسرائيل",image:"image/victoria.jpg"},
   {name:"Under Armour",disc:"لم تنكر تواجدها او دعمها لاسرائيل",image:"image/under.png"},
   {name:"Ralph Lauren",disc:"تبرعات متكررة لمؤسسات داعمة لاسرائيل",image:"image/ralph.png"},
   {name:"McDonald’s",disc:"صاحب الامتياز الاسرائيلي. يمول الجيش",image:"image/mcdonalds.png"},
   {name:"Starbucks",disc:"تم اتهامها بدعم اسرائيل الا انها نفت لا فروع لها باسرائيل الان",image:"image/starbucks.png"},
   {name:"Pepsi",disc:"شراكات و استثمارات مع شركات اسرائيلية$",image:"image/pepsi.png"},
   {name:"Coca-Cola",disc:"استثمارات ضخمة داخل اسرائيل",image:"image/coca.png"},
   {name:"Nestlé",disc:"كانت تملك 50% من شركة اوسم الاسرائيلية",image:"image/nestle.png"},
   {name:"Burger King",disc:"تواجدت في المستوطنات سابقا",image:"image/burger.png"},
   {name:"Domino’s Pizza",disc:"تعمل في اسرائيل و تقارير عن تمويل فروع الجيش",image:"image/domino.png"},
   {name:"Kellogg’s ",disc:"استثمارات في اسرائيل ",image:"image/kelloggs.png"},
   {name:"Ben & Jerry’s",disc:" موقف معقد:توقفت عن البيع في المستوطنات لكنها تنتمي ليونيلفر",image:"image/B&j.png"},
   {name:"Unilever ",disc:"تملك عدة علامات تجارية وتعمل في اسرائيل",image:"image/uni.png"},
   {name:"Apple ",disc:"مراكز بحث و تطوير داخل اسرائيل",image:"image/apple.png"},
   {name:"Intel ",disc:"تملك مصانع كبيرة في اسرائيل",image:"image/intel.png"},
   {name:"Microsoft ",disc:"استثمارات كبيرة في اسرائيل",image:"image/microsoft.png"},
   {name:"HP (Hewlett-Packard) ",disc:"تقدم خدمات تكنولوجية لجيش وشرطة اسرائيل",image:"image/hp.png"},
   {name:"IBM ",disc:"مزود تقني للحكومة الايرائيلية سابقا",image:"image/IBM.png"},
   {name:"Dell ",disc:"علاقات بيع ودعم فني في اسرائيل ",image:"image/Dell.png"},
   {name:"Samsung ",disc:"توفير تقنيات للجيش مع تواجد كبير في اسرائيل",image:"image/samsung.png"},
   {name:"Sony ",disc:"تعمل في السوق الاسرائيلي لكن لا معلومات مؤكدة عن دعم مباشر",image:"image/sony.png"},
   {name:"Meta ",disc:"تتهم بالتحيز ضد المحتوى الفلسطيني",image:"image/meta.png"},
   {name:"Google ",disc:"عقدت صفقة نيمبوس مع الحكومة الاسرائيلية",image:"image/google.jpg"},
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