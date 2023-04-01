function slideshowFun(images){
    let div = document.getElementById("slideshow");
    div.innerHTML = ""
    let img = document.createElement("img");
    img.src = images
    div.append(img)
  }
  // Use the following data for slideshow
  
  var movieImages = [
    "https://onemg.gumlet.io/5504dd78-e9aa-4296-b8cf-affed0179210_1666082523.jpg?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/2ccd19da-c816-4ed8-935e-441c55589f18_1680270570.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/2b6cc808-948a-47cf-8176-c52237f217a4_1679385424.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/6f270cf5-44bb-4c9d-86f8-b1ecd2ba2bb9_1679557477.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/9b011fe6-ddf6-46a7-a3e4-f965e7afb8eb_1679997283.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/f534ee65-9963-478a-a075-e0b0aef1ef46_1679397312.png?w=1013&h=250&format=auto"
  ]
  
  
  window.addEventListener("load", function () {
    // add event-listeners;
    let index = 0 ;
   
    slideshowFun(movieImages[index])
    setInterval(() => {
      index++
      if(index > 5){
        index =0 ;
      }
   
      slideshowFun(movieImages[index])
    }, 3000);
  });


// ---------- ------------------ ----------------------- ------------------------ ---------------------------

// here our data append 


  let products =
      [{"id":1,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg","title":"Wine - Peller Estates Late","description":"Bypass Ileum to Anus, Open Approach","discount":"MRP₹1080 46% off","price":200},
      {"id":2,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg","title":"Silicone Parch. 16.3x24.3","description":"Dilate L Thyroid Art, Bifurc, w 3 Intralum Dev, Open","discount":"MRP₹180 6% off","price":171},
      {"id":3,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/537fd698-25dd-43d5-b5f7-02a997bcd33a.jpeg","title":"Pastry - Choclate Baked","description":"Drainage of Upper Lip, Percutaneous Approach","discount":"MRP₹500 45% off","price":252},
      {"id":4,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg","title":"Syrup - Kahlua Chocolate","description":"Resection of Urethra, Endo","discount":"MRP₹3500 45% off","price":2108},
      {"id":5,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg","title":"Crush - Cream Soda","description":"Revision of Nonaut Sub in Male Perineum, Open Approach","discount":"MRP₹ 3500 60% off","price":1019},
      {"id":6,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg","title":"Salt - Celery","description":"Release Right Shoulder Joint, Percutaneous Approach","discount":"MRP₹500 75% off","price":185},
      {"id":7,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lvtn5rrf1guolsh7lrfx.jpg","title":"Wine - Rosso Del Veronese Igt","description":"Release Right Cephalic Vein, Perc Endo Approach","discount":"MRP₹750 50% off","price":364},
      {"id":8,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c5ae6c9d8a6d44fa829eb1edebf193b2.jpg","title":"Muffin - Mix - Strawberry Rhubarb","description":"Dilate Intracran Art, Bifurc, w 4 Drug-elut, Perc","discount":"MRP₹2550 5% off","price":2404},
      {"id":9,"url":"https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/ixaflyky8okgvcwjiyie.png","title":"Champagne - Brights, Dry","description":"Dilate R Ulnar Art, Bifurc, w 2 Intralum Dev, Perc","discount":"MRP₹800 15% off","price":604},
      {"id":10,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hnhebh4vnjbhdtko5vfe.jpg","title":"Chevril","description":"Extirpation of Matter from Right Trunk Muscle, Perc Approach","discount":"MRP₹2550 50% off","price":1218},
      {"id":11,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e1quecehqfwixqbgoffq.jpg","title":"Shrimp - Black Tiger 13/15","description":"Destruction of Nasal Bone, Percutaneous Approach","discount":"MRP₹1550 10% off","price":1438},
      {"id":12,"url":"https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/ixaflyky8okgvcwjiyie.png","title":"Sauce - Balsamic Viniagrette","description":"Drainage of Upper Artery, Percutaneous Endoscopic Approach","discount":"MRP₹1850 12% off","price":1627},
      {"id":13,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/iyfn5hupleaimrrggwla.jpg","title":"Fork - Plastic","description":"Control Bleeding in Chest Wall, Percutaneous Approach","discount":"MRP₹1550 35% off","price":1047},
      {"id":14,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/wesmmmzi3zpedmio94ay.jpg","title":"Chocolate Bar - Coffee Crisp","description":"Supplement Left Thumb Phalanx with Synth Sub, Open Approach","discount":"MRP₹550 25% off","price":297},
      {"id":15,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/do1qbdkxloytm2z29pjd.jpg","title":"Trout - Hot Smkd, Dbl Fillet","description":"Excision of Hyoid Bone, Open Approach","discount":"MRP₹1150 18% off","price":810},
      {"id":16,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c0bfeba9b58e4631b3f23e9ad7937403.jpg","title":"Veal - Chops, Split, Frenched","description":"Fluoroscopy of Dialysis Shunt/Fistula","discount":"MRP₹550 40% off","price":265},
      {"id":17,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/sylcngzunaflphrasj19.jpg","title":"Table Cloth 53x69 White","description":"Insert Infusion Dev in L Ext Jugular Vein, Perc","discount":"MRP₹1550 21% off","price":1185},
      {"id":18,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/7027d6aa15774c749949df7881097ecf.jpg","title":"Aspic - Amber","description":"Revision of Drainage Device in Hepatobiliary Duct, Endo","discount":"MRP₹2550 10% off","price":2095},
      {"id":19,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pr7phungo2zybmjghhck.jpg","title":"Pastry - Key Limepoppy Seed Tea","description":"Bypass L Foot Vein to Low Vein with Autol Sub, Open Approach","discount":"MRP₹350 2% off","price":334},
      {"id":20,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tzpi19w8lhmorebrbpu6.jpg","title":"Mushroom - Crimini","description":"Drainage of Right Upper Lobe Bronchus, Endo, Diagn","discount":"MRP₹10 0% off","price":10},
      {"id":21,"url":"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cb2d14ed55a04b93a170277a351357cd.jpg","title":"Sauce - Apple, Unsweetened","description":"Alteration of Lower Jaw with Synth Sub, Perc Approach","discount":"MRP₹580 8% off","price":528}
  ]




  let productData = document.getElementById("proContainer")
  let cartData = JSON.parse(localStorage.getItem("cartData")) || []

  displayData()

  function displayData() {
    // e.preventDefault()
    document.querySelector("#proContainer").innerHTML = ""
    products.forEach((elem,ind) => {
       let div = document.createElement("div")
       let images = document.createElement("img")
       images.src = elem.url
        
       let title = document.createElement("h3")
       title.innerText = elem.title

       let description = document.createElement("p")
       description.innerText = elem. description
       let discount = document.createElement("p")
       discount.innerText = elem.discount
     
       let price = document.createElement("p")
       discount.innerText = `₹${elem.price}`
     
       let btn = document.createElement("button")
       btn.innerText=  "Add To Cart"
       btn.setAttribute = ("class","addToCart")
       btn.addEventListener("click", function () {
        addTocart(elem)
       })

       
       div.append(images,title,description,discount,price,btn)
       document.querySelector("#proContainer").append(div)
    })
  }


  function addTocart(elem) {
    let flag = false 

    for(let i = 0; i < cartData.length; i++) {
      if(cartData[i].id == elem.id) {
          flag = true
      }
    }

    if(flag) {
      alert("Products already in cart")
    } else {
  
       cartData.push(elem)
       alert("Added To Cart Successfuly")
       localStorage.setItem("cartData",JSON.stringify(cartData))
    }
  }

  
  let objectLength = Object.keys(cartData).length
  console.log(objectLength)