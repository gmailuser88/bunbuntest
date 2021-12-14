  

  function onReady (){
  	        var storage = JSON.parse(localStorage.getItem('STORAGE'));

			console.log(storage);

			var subtotal=0;

			

			  for (let i = 0; i < storage.length; i++) {
			        var Item = storage[i];
			        var Item_type = Item.type;
			        var Item_glazing = Item.glazing;
			        var Item_quantity = Item.quantity;
			        var Item_price = Item.price;
			        var all_price = Item.quantity * Item.price;
			        var Item_picture = Item.picture;
			        var Object_id = Item.random_id;
			        subtotal += all_price;
			        $('.cart_table tr:last').after(
			        	'<tr><td><img class="shopping_cart_img" src="'+Item_picture+'"/></td>+<td>'+Item_type+'</td>+<td>'+Item_glazing+'</td><td>'+Item_quantity+'</td><td>'+all_price+'</td><td><button class="product-delete-button" id="'+Object_id+'" >Remove</button></td></tr>')
                     console.log('Item_glazing[i]');
		}

       
		
		$('.product-delete-button').click( function() {
		  console.log("button is listening");

		   $(this).parent().parent().hide();
		   	var id = $(this).attr("id")

		    for (let i = 0; i < storage.length; i++) {	
		    	if (storage[i].random_id == id) {
		    		delete_all_price = storage[i].quantity * storage[i].price;
		      	    subtotal -= delete_all_price;
		    		storage.splice(i,1);
		    		console.log("storage[i]");		
		    	    document.getElementById("subtotal").innerHTML=subtotal;
		    	}

		      	localStorage.setItem('STORAGE', JSON.stringify(storage));
		      	


         }





		   	// var deleteObject_id = Item.random_id;

				  //  	if (deleteObject_id == Object_id){

				  //  	 new_all_price = Item.quantity * Item.price;
     	//              subtotal -= new_all_price;
				  //    storage.splice(Object_id,1);
     	//              localStorage.setItem('STORAGE', JSON.stringify(storage));

      //                }

				  //  	}

		   
		   	



		  
		});

        document.getElementById("subtotal").innerHTML=subtotal;

		};

          
        
	 //    document.getElementById
           
       
		//  function deleteRow(){
		//   console.log("button is listening");

		//    $(this).parent().parent().hide();
		  
		// }





           


onReady();











