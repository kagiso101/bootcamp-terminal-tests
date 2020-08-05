module.exports = function yearsAgo (years){
    var date = new Date()
    var x = date.getFullYear()
    return (x - years);
  }