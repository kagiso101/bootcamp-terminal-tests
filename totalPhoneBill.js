module.exports = function totalPhoneBill(bill){
    var total = 0;
     var phoneBill = bill.split(', ')
     for(var i = 0; i < phoneBill.length; i ++){
     var data = phoneBill[i];
       if(data === "call"){
         total += 2.75;       
          }
       else if(data === "sms"){
               total += 0.65
               }
     }
     return "R" + total.toFixed(2)
   }