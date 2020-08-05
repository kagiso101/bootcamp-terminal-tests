module.exports = function (list,threshold){
    let products = [];
    for(let index = 0; index<list.length; index++)
    {
      let myItems = list[index];
      let myQuantity = myItems.qty;
      if(myQuantity>threshold)
      {
         products.push(myItems);  
      }
     }
     return products;
   }
   