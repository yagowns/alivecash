
var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#time .values').html(timer.getTimeValues().toString());
});  


