<script src="https://cdn.lr-in.com/LogRocket.min.js" crossorigin="anonymous"></script>
<script>window.LogRocket && window.LogRocket.init('apphub/bunbunbakeshop');</script>


jQuery(function($) {
  $('.Quantity-button').click(function() {
    $('.Quantity-button').not(this).removeClass('active').html(function() {
      return $(this).html().replace('SELECTED', 'SELECT');
    });
    $(this).addClass('active').html(jQuery(this).html().replace('SELECT', 'SELECTED'));
  });
});


//button

function enable_add_to_cart_Button() {
            document.getElementById("add-to-cart-button").disabled = false;
        }

//pop-up



var product1 = {name: "Original <br/> Cinnamon Roll", price: "3.5"};
var product2 = {name: "Blueberry <br/> Cinnamon Roll", price: "4.5"};
var product3 = {name: "Walnut <br/> Cinnamon Roll", price: "4.5"};
var product4 = {name: "Original(Gluten-free) <br/>  Cinnamon Roll",price: "4.5"}; 
var product5 = {name: "Pumpkin Spice <br/> Cinnamon Roll",price: "4.5"};
var product6 = {name: "Caramel Pecan <br/> Cinnamon Roll", price: "4.5"};


$(function() {
  $("#pop-button1").click(function() {
    $(".parent").fadeTo(200, 1);
    document.getElementById("name-of-roll-pop-up").innerHTML=product1.name;
    document.getElementById("price-tag-pop-up").innerHTML=product1.price;
  });
  $(".clickout").click(function() {
    $(".parent").fadeOut(200);
  });
  
});


$(function() {
  $("#pop-button2").click(function() {
    $(".parent").fadeTo(200, 1);
     document.getElementById("name-of-roll-pop-up").innerHTML=product2.name;
     document.getElementById("price-tag-pop-up").innerHTML=product2.price;
  });
  $(".clickout").click(function() {
    $(".parent").fadeOut(200);
  });
  
});


$(function() {
  $("#pop-button3").click(function() {
    $(".parent").fadeTo(200, 1);
     document.getElementById("name-of-roll-pop-up").innerHTML=product3.name;
     document.getElementById("price-tag-pop-up").innerHTML=product3.price;
  });
  $(".clickout").click(function() {
    $(".parent").fadeOut(200);
  });
  
});


$(function() {
  $("#pop-button4").click(function() {
    $(".parent").fadeTo(200, 1);
     document.getElementById("name-of-roll-pop-up").innerHTML=product4.name;
     document.getElementById("price-tag-pop-up").innerHTML=product4.price;
  });
  $(".clickout").click(function() {
    $(".parent").fadeOut(200);
  });
  
});

$(function() {
  $("#pop-button5").click(function() {
    $(".parent").fadeTo(200, 1);
     document.getElementById("name-of-roll-pop-up").innerHTML=product5.name;
     document.getElementById("price-tag-pop-up").innerHTML=product5.price;
  });
  $(".clickout").click(function() {
    $(".parent").fadeOut(200);
  });
  
});

$(function() {
  $("#pop-button6").click(function() {
    $(".parent").fadeTo(200, 1);
     document.getElementById("name-of-roll-pop-up").innerHTML=product6.name;
     document.getElementById("price-tag-pop-up").innerHTML=product6.price;
  });
  $(".clickout").click(function() {
    $(".parent").fadeOut(200);
  });
  
});


$(function() {
  $("#add-to-cart-button").click(function() {
    $(".parent1").fadeTo(200, 1);
  });
  $(".clickout").click(function() {
    $(".parent1").fadeOut(200);
  });
  
});


//shopping-cart
function onReady (){
  var button = document.getElementById('add-to-cart-button');
  if (button){
    button.addEventListener('click', onCartBtnClick);

}


  }

function onCartBtnClick(){
     //get quantity 
     console.log('Button is Listening');
     var quantity = document.querySelector('input[name="buttonGroup"]:checked').value;
     //get glazing
     var glazing = $("#glazing1 :selected").text();
     //get type 
     var type = $("#name-of-roll-pop-up").text();
     var price = $("#price-tag-pop-up").text();
     var picture = $("#glazing1").val();
     var random_id
     var item = {
      "type" : type,
      "glazing" : glazing,
      "quantity" : quantity,
      "price" : price,
      "picture" : picture,
      "random_id" : Math.random(),
     }
     var cartItems =GetFromStorage();
     cartItems.push(item);
     localStorage.setItem('STORAGE', JSON.stringify(cartItems));
    
   
  }

var storage = JSON.parse(localStorage.getItem('STORAGE'));
     CartNumber = storage.length; 
     console.log(CartNumber);
     document.getElementById("number-of-cart").innerHTML = CartNumber;


function GetFromStorage(){
     var storage = localStorage.getItem('STORAGE');
     
     if (storage!==null) {
      return JSON.parse(storage);
     }
     return [];
}








onReady();






/*
var newItem = {
  "type" : type,
  "glazing" : glazing,
  "quantity" : quantity,
}


var list = JSON.parse(localStorage.getItem("cart"));

if (list == null) {
  list = [];
}


list.push(newItem);



$('#add-to-cart-button').click(function(){
  localStorage.setItem("cart", JSON.Stringify(list))

});

*/




