$(function(){
  $('button').click(function(){

    $('#result').append("is leap year? " + analyzeYear())

  })
})

function analyzeYear() {
  var inputtedYear = parseInt($('input').val())
  var isLeapYear = false
  if (inputtedYear.mod(4)) {
    isLeapYear = true
  } else {
    isLeapYear = false
  }
  if (inputtedYear.mod(100)) {
    isLeapYear = false
  }
  if (inputtedYear.mod(400)) {
    isLeapYear = true
  }
  return isLeapYear
}

Number.prototype.mod = function(m) {
  return (this % m === 0)
}
