let cart = document.querySelectorAll(".addToCartButton");
let products = [
     {
          name: "Switch",
          tag: "ssssswitch",
          price: 5.99,
          inCart: 0
     },
     {
          name: "Iphone",
          tag: "ifon",
          price: 5.99,
          inCart: 0  
     },
     {
          name: "Airpods",
          tag: "airpods",
          price: 5.99,
          inCart: 0
     },
     {
          name: "PS5",
          tag: "ps5",
          price: 5.99,
          inCart: 0
     },
     {
          name: "Xbox",
          tag: "xbox",
          price: 5.99,
          inCart: 0
     },
     {
          name: "Supreem",
          tag: "supre",
          price: 5.99,
          inCart: 0
     },
     {
          name: "Yeezy",
          tag: "yeezy",
          price: 5.99,
          inCart: 0
     }
]

/*
for (let i=0; i < cart.length; i++) {
     cart[i].addEventListener("click", () => {
          cartNumbers(products[i]);
     })
}
*/

function switchStore(){
     cartNumbers(products[0]);
     totalCost(products[0]);
}

function airpodsStore(){
     cartNumbers(products[2]);
     totalCost(products[2]);
}

function iphoneStore(){
     cartNumbers(products[1]);
     totalCost(products[1]);
}

function ps5Store(){
     cartNumbers(products[3]);
     totalCost(products[3]);
}

function supreemStore(){
     cartNumbers(products[5]);
     totalCost(products[5]);
}

function xboxStore(){
     cartNumbers(products[4]);
     totalCost(products[4]);
}

function yeezyStore(){
     cartNumbers(products[6]);
     totalCost(products[6]);
}

function cartNumbers(product){
     let productNumbers = localStorage.getItem("cartNumbers");
     productNumbers = parseInt(productNumbers);

     if (productNumbers){
          localStorage.setItem("cartNumbers", productNumbers + 1);
     }
     else{
          localStorage.setItem("cartNumbers", 1);
     }


     setItems(product);
}

function setItems(product){
     let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
     
     if (cartItems !== null){
          
          if (cartItems[product.tag] == undefined){
               cartItems = {
                    ...cartItems,
                    [product.tag]: product
               }
          }
          cartItems[product.tag].inCart += 1;
     } 
     else{
          product.inCart = 1;
          cartItems = {
               [product.tag]: product
          }
     }

     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
     let cartCost = localStorage.getItem("totalCost");

     if(cartCost != null){
          cartCost = parseFloat(cartCost);
          localStorage.setItem("totalCost", cartCost + product.price);
     }
     else{
          localStorage.setItem("totalCost", product.price);
     }

     
}


function removeOne(tag){
     //gets data from localstorage
     var cart = JSON.parse(localStorage.getItem("productsInCart"));
     var totalPrice = parseFloat(localStorage.getItem("totalCost"));
     var N = parseInt(localStorage.getItem("cartNumbers"));

 //gets the correct item
     var item = cart[tag]

     //changes values of cart items
     if (item.inCart > 1){
          item.inCart--
          localStorage.setItem("productsInCart", JSON.stringify(cart));
     }
     else{
          delete cart[tag];
          localStorage.setItem("productsInCart", JSON.stringify(cart));
     }

     //changes total price and total number of products
     localStorage.setItem("totalCost", totalPrice - parseFloat(item.price));
     localStorage.setItem("cartNumbers", N - 1);
     location.reload();
}
function addOne(tag){
     //gets data from localstorage
     var cart = JSON.parse(localStorage.getItem("productsInCart"));
     var totalPrice = parseFloat(localStorage.getItem("totalCost"));
     var N = parseInt(localStorage.getItem("cartNumbers"));

     //gets the correct item
     var item = cart[tag];

     //change values
     item.inCart++; //adds one more inCart
     localStorage.setItem("productsInCart", JSON.stringify(cart));
     localStorage.setItem("totalCost", totalPrice + parseFloat(item.price));
     localStorage.setItem("cartNumbers", N + 1);
     location.reload();
}
function removeAll(tag){
     //gets data from localstorage
     var cart = JSON.parse(localStorage.getItem("productsInCart"));
     var totalPrice = parseFloat(localStorage.getItem("totalCost"));
     var N = parseInt(localStorage.getItem("cartNumbers"));

     //gets the correct item
     var item = cart[tag]

     localStorage.setItem("totalCost", totalPrice - (parseFloat(item.price) * parseInt(item.inCart)))
     localStorage.setItem("cartNumbers", N - parseInt(item.inCart))
     delete cart[tag]
     localStorage.setItem("productsInCart", JSON.stringify(cart));
     location.reload();
}


function displayCart(){
     let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
     let productContainer = document.querySelector(".products"); 
     let cartCost = localStorage.getItem("totalCost");
     console.log(cartItems);
     if(cartItems && productContainer){
          productContainer.innerHTML = "";
          Object.values(cartItems).map(item => {
               productContainer.innerHTML += `
               <div class="product">
                    <button type="button" onclick="removeAll('${item.tag}')"><ion-icon name="close-circle"></ion-icon></button>
                    <img src="../img/${item.tag}.png">
                    <span>${item.name}</span>
               </div>
               <div class="price">&nbsp;$${item.price}</div>
               <div class="quantity">
                    <button type="button" onclick="removeOne('${item.tag}')"><ion-icon name="caret-back-circle"></ion-icon></button>
                    <span>${item.inCart}</span>
                    <button type="button" onclick="addOne('${item.tag}')"><ion-icon name="caret-forward-circle"></ion-icon></button>
               </div>
               <div class="total">
                    $${Math.round(item.inCart * item.price * 100) / 100}
               </div>
               `;
          });

          productContainer.innerHTML += `
               <div class="cartTotalContainer">
                    <h3 class="cartTotalTitle">
                         Cart Total
                    </h3> 
                    <h3 class="cartTotal">
                         $${Math.round(cartCost * 100) / 100}
                    </h3>
          `;

     }
}

displayCart();
