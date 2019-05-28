function startTime() {
    var today = new Date();
    var h = today.getHours() % 12 || 12;
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m;
   var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  function startDate(){
  var event = new Date();
  var options = {year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').innerHTML = event.toLocaleDateString('en-US', options);
  var t = setTimeout(startDate, 500);
}