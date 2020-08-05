module.exports = function countAllPaarl(regNumb){
    var item = regNumb.split(',')
    var countPaarl = [];
     for (var i = 0; i < item.length; i++){
       var x =item[i].trim() 
        if (x.startsWith("CJ")){
        countPaarl.push(x)
  }
  }
    return countPaarl.length
  }