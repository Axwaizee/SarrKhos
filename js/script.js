const products_gallery = document.getElementById('products-gallery');


const types = ["men", 'women', 'kids'];
const shoes = [
  {
    "name": "Nike Air Max 90",
    "actual_price": "150",
    "current_price": "120",
    "description": "The Nike Air Max 90 is a classic sneaker that features a combination of leather, synthetic, and textile materials for durability and comfort."
  },
  {
    "name": "Adidas Stan Smith",
    "actual_price": "100",
    "current_price": "80",
    "description": "The Adidas Stan Smith is a timeless tennis shoe that is known for its clean and minimalist design. It is made with a full grain leather upper and features the iconic Adidas three stripes."
  },
  {
    "name": "Converse Chuck Taylor All Star",
    "actual_price": "60",
    "current_price": "50",
    "description": "The Converse Chuck Taylor All Star is a versatile and iconic shoe that can be worn with any outfit. It is made with a canvas upper and features a rubber toe cap and sole."
  },
  {
    "name": "Vans Old Skool",
    "actual_price": "70",
    "current_price": "60",
    "description": "The Vans Old Skool is a classic skate shoe that is known for its side stripe detail. It is made with a durable canvas and suede upper and features a padded collar for added comfort."
  },
  {
    "name": "Puma Suede Classic",
    "actual_price": "80",
    "current_price": "70",
    "description": "The Puma Suede Classic is a retro sneaker that is made with a soft suede upper and features the Puma Formstrip on the sides. It is a versatile shoe that can be dressed up or down."
  },
  {
    "name": "New Balance 574",
    "actual_price": "90",
    "current_price": "80",
    "description": "The New Balance 574 is a popular running shoe that is known for its comfort and style. It is made with a combination of suede and mesh materials and features the signature New Balance ENCAP midsole for cushioning and support."
  },
  {
    "name": "Reebok Classic Leather",
    "actual_price": "85",
    "current_price": "75",
    "description": "The Reebok Classic Leather is a timeless sneaker that is made with a soft leather upper and features a die-cut EVA midsole for lightweight cushioning. It is a versatile shoe that can be worn for casual or athletic activities."
  },
  {
    "name": "Timberland 6-Inch Premium Boot",
    "actual_price": "180",
    "current_price": "150",
    "description": "The Timberland 6-Inch Premium Boot is a rugged and durable boot that is made with a waterproof nubuck leather upper and features a padded collar for added comfort. It is a classic shoe that is perfect for outdoor adventures."
  },
  {
    "name": "Dr. Martens 1460",
    "actual_price": "150",
    "current_price": "130",
    "description": "The Dr. Martens 1460 is an iconic boot that is known for its durability and style. It is made with a smooth leather upper and features the signature yellow stitching and AirWair heel loop."
  },
  {
    "name": "UGG Classic Short",
    "actual_price": "160",
    "current_price": "140",
    "description": "The UGG Classic Short is a cozy and comfortable boot that is made with genuine twinface sheepskin and features a lightweight and flexible EVA outsole. It is a popular shoe for cold weather."
  },
  {
    "name": "Skechers Go Walk 4",
    "actual_price": "70",
    "current_price": "60",
    "description": "The Skechers Go Walk 4 is a lightweight and breathable walking shoe that is made with a mesh fabric upper and features the innovative 5GEN midsole for cushioning and support."
  },
  {
    "name": "ASICS Gel-Kayano 26",
    "actual_price": "160",
    "current_price": "140",
    "description": "The ASICS Gel-Kayano 26 is a high-performance running shoe that is known for its stability and comfort. It is made with a mesh upper and features the signature ASICS Gel cushioning system."
  },
  {
    "name": "Brooks Ghost 12",
    "actual_price": "130",
    "current_price": "110",
    "description": "The Brooks Ghost 12 is a neutral running shoe that is made with a breathable mesh upper and features the BioMoGo DNA and DNA LOFT cushioning for a responsive and comfortable ride."
  },
  {
    "name": "Mizuno Wave Rider 23",
    "actual_price": "120",
    "current_price": "100",
    "description": "The Mizuno Wave Rider 23 is a versatile running shoe that is made with a breathable mesh upper and features the Mizuno Wave cushioning technology for a smooth and stable ride."
  },
  {
    "name": "Hoka One One Bondi 6",
    "actual_price": "150",
    "current_price": "130",
    "description": "The Hoka One One Bondi 6 is a maximum cushioning running shoe that is made with a breathable mesh upper and features the signature Meta-Rocker technology for a smooth and efficient stride."
  },
  {
    "name": "Salomon Speedcross 5",
    "actual_price": "130",
    "current_price": "110",
    "description": "The Salomon Speedcross 5 is a trail running shoe that is made with a durable and protective upper and features the Contagrip outsole for traction on various terrains."
  },
  {
    "name": "Merrell Moab 2 Ventilator",
    "actual_price": "100",
    "current_price": "80",
    "description": "The Merrell Moab 2 Ventilator is a hiking shoe that is made with a suede and mesh upper and features the Merrell Air Cushion in the heel for shock absorption and stability."
  },
  {
    "name": "Columbia Newton Ridge Plus II",
    "actual_price": "90",
    "current_price": "70",
    "description": "The Columbia Newton Ridge Plus II is a waterproof hiking boot that is made with a full grain leather upper and features the Techlite lightweight midsole for long-lasting comfort and cushioning."
  },
  {
    "name": "Keen Targhee II",
    "actual_price": "130",
    "current_price": "110",
    "description": "The Keen Targhee II is a versatile hiking shoe that is made with a waterproof nubuck leather upper and features the Keen.Dry waterproof membrane for protection against the elements."
  },
  {
    "name": "Birkenstock Arizona",
    "actual_price": "100",
    "current_price": "80",
    "description": "The Birkenstock Arizona is a classic sandal that is known for its contoured footbed and adjustable straps. It is made with a durable and flexible EVA outsole."
  },
  {
    "name": "Teva Original Universal",
    "actual_price": "50",
    "current_price": "40",
    "description": "The Teva Original Universal is a comfortable and versatile sandal that is made with a durable and quick-drying polyester webbing upper and features the Universal Strapping System for a secure fit."
  },
  {
    "name": "Rainbow Sandals Premier Leather",
    "actual_price": "55",
    "current_price": "45",
    "description": "The Rainbow Sandals Premier Leather is a handcrafted sandal that is made with a premium leather upper and features a non-slip Rainbow bottom for traction and durability."
  },
  {
    "name": "Havaianas Slim Flip Flop",
    "actual_price": "30",
    "current_price": "25",
    "description": "The Havaianas Slim Flip Flop is a lightweight and flexible sandal that is made with a rubber sole and features a slim strap with the Havaianas logo."
  },
  {
    "name": "Crocs Classic Clog",
    "actual_price": "40",
    "current_price": "35",
    "description": "The Crocs Classic Clog is a comfortable and lightweight shoe that is made with Croslite foam for cushioning and support. It is a versatile shoe that can be worn for casual or outdoor activities."
  },
  {
    "name": "Sperry Authentic Original",
    "actual_price": "95",
    "current_price": "75",
    "description": "The Sperry Authentic Original is a classic boat shoe that is made with a genuine leather upper and features the signature 360° lacing system for a secure fit."
  },
  {
    "name": "Toms Alpargata",
    "actual_price": "55",
    "current_price": "45",
    "description": "The Toms Alpargata is a casual slip-on shoe that is made with a canvas upper and features the signature Toms toe stitch and elastic V for easy on and off."
  },
  {
    "name": "Steve Madden Troopa",
    "actual_price": "100",
    "current_price": "80",
    "description": "The Steve Madden Troopa is a stylish and edgy combat boot that is made with a leather upper and features a lace-up closure and side zipper for a secure fit."
  },
  {
    "name": "Frye Harness 12R",
    "actual_price": "328",
    "current_price": "278",
    "description": "The Frye Harness 12R is a rugged and durable boot that is made with a full grain leather upper and features a harness detail and a Goodyear welt construction."
  },
  {
    "name": "Clarks Desert Boot",
    "actual_price": "130",
    "current_price": "110",
    "description": "The Clarks Desert Boot is a classic and timeless shoe that is made with a suede or leather upper and features a crepe sole for comfort and flexibility."
  },
  {
    "name": "Gucci Ace Sneaker",
    "actual_price": "650",
    "current_price": "550",
    "description": "The Gucci Ace Sneaker is a luxury and high-fashion shoe that is made with a leather upper and features the iconic Gucci Web stripe and a bee embroidery."
  }
]



document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < shoes.length; i++) {


    const product = document.createElement('div');
    product.classList += `product ${types[Math.floor(Math.random() * types.length)]}`;

    const product_img_container = document.createElement('div');
    product_img_container.classList += 'product-img-container';


    const product_img = document.createElement('img');

    product_img.classList += 'product-img';
    product_img.src = `./images/shoe (${i + 1}).jpg`
    product_img_container.appendChild(product_img);

    product.appendChild(product_img_container);

    const product_name = document.createElement('div');
    product_name.classList += 'product-name';
    product_name.textContent = shoes[i].name;

    product.appendChild(product_name);


    const product_price = document.createElement('div');
    product_price.classList += 'product-price';

    product_price.innerHTML = `<span class="current-price-value"><span style="font-size: 16px;">₹</span>${shoes[i].current_price * 9}</span><span class="original-product-price">₹${shoes[i].actual_price * 9}</span>`


    product.appendChild(product_price);

    const product_description = document.createElement('div');
    product_description.classList += 'product-description';
    product_description.textContent = shoes[i].description;

    product.appendChild(product_description);


    products_gallery.appendChild(product);

  }


  var all_products = document.querySelectorAll('.product');
  var men_products = document.querySelectorAll('.men');
  var women_products = document.querySelectorAll('.women');
  var kids_products = document.querySelectorAll('.kids');

  const all_shoe_category_btn = document.getElementById('all-shoe-category');
  const men_shoe_category_btn = document.getElementById('men-shoe-category');
  const women_shoe_category_btn = document.getElementById('women-shoe-category');
  const kids_shoe_category_btn = document.getElementById('kids-shoe-category');


  all_shoe_category_btn.addEventListener('change', function () {
    if (this.checked) {
      men_shoe_category_btn.checked = false;
      women_shoe_category_btn.checked = false;
      kids_shoe_category_btn.checked = false;

      all_products.forEach(element => {
        element.style.display = `block`;
      })

    }
  })

  men_shoe_category_btn.addEventListener('change', function () {
    if (this.checked) {
      all_shoe_category_btn.checked = false;
    }
    display_selected_products();
  })
  women_shoe_category_btn.addEventListener('change', function () {
    if (this.checked) {
      all_shoe_category_btn.checked = false;
    }
    display_selected_products();
  })
  kids_shoe_category_btn.addEventListener('change', function () {
    if (this.checked) {
      all_shoe_category_btn.checked = false;
    }
    display_selected_products();
  })
  
  
  const price_range_slider_input = document.getElementById('price-range-slider-input');
  const price_range_slider_output = document.getElementById('price-range-slider-output');
  
  
  price_range_slider_input.addEventListener('input', () => {
    price_range_slider_output.value = price_range_slider_input.value;
  });
  price_range_slider_output.addEventListener('input', () => {
    price_range_slider_input.value = price_range_slider_output.value;
  });
  price_range_slider_output.addEventListener('blur', () => {
    price_range_slider_output.value = price_range_slider_input.value;
  });
  
  
  function display_selected_products() {
    all_products.forEach(element => {
      element.style.display = 'none';
    })
    if (men_shoe_category_btn.checked) {
      men_products.forEach(element => {
        element.style.display = 'block';
      })
    }
    if (women_shoe_category_btn.checked) {
      women_products.forEach(element => {
        element.style.display = 'block';
      })
    }
    if (kids_shoe_category_btn.checked) {
      kids_products.forEach(element => {
        element.style.display = 'block';
      })
    }
    if (!kids_shoe_category_btn.checked && !women_shoe_category_btn.checked && !men_shoe_category_btn.checked) {
      all_products.forEach(element => {
        element.style.display = 'block';
        all_shoe_category_btn.checked = true;
      })
    }
  }
});