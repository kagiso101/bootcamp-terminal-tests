module.exports = function (list){
    var map  = [];
    for(var i = 0; i<list.length; i++){
     var myObj = list[i].department;
       if(map[myObj]===undefined){
         map[myObj] = 0; 
       }
       map[myObj] += list[i].sales;
     }
       var total = 0; 
       var dept = "hardware";
       for(var i in map)
       {
         if(map[i]>total)
         {
           dept = i;
           total = map[i];
         }
       }
       return dept;
   }
   