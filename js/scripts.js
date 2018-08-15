$(function(){
  $('button').click(function(){
    $('#result').css({
      'opacity':'1'
    }).text(getResult())

    event.preventDefault()
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
function getResult() {
  var input = $('input').val()
  var not = "NOT "
  analyzeYear() ? not = "" : false
  return input + " is " + not + "a leap year."
}

Number.prototype.mod = function(m) {
  return (this % m === 0)
}
