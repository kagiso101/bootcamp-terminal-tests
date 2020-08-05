module.exports = function (regNumb,town){
 
    var regList = regNumb.split(',')
    var countAllFrom = [];
     for (var i = 0; i < regList.length; i++){
       var reg = regList[i].trim()
        if (reg.startsWith(town)){
       countAllFrom.push(reg)
  }
  }
      return countAllFrom.length
  
  }