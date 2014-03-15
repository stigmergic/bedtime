define(function( require ){

    var $ = require('jquery');
    var flipclock = require('flipclock');
    
    var times = $('.task .time').each(function (index) {
        var clock = $(this).FlipClock(0, {
            clockFace: 'MinuteCounter',
            countdown: false 
        });
        setTimeout(function() {
            setInterval(function() {
                //clock.getTime().time=605;
                //console.log(clock.getTime());
            }, 2000);
        });
        console.log('a', $(this).closest('.task').find('button')[0]);

    });
    
    var current_time = $('.current .time').each(function (index) {
        var clock = $(this).FlipClock(0, {
            clockFace: 'DailyCounter',
            countdown: false 
        });
        setTimeout(function() {
            setInterval(function() {
                clock.getTime().time=605;
                //console.log(clock.getTime());
            }, 2000);
        });
    });
    
});