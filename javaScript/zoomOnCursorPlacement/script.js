var shows = document.getElementById('shows');
var first = document.getElementById('first');
var second = document.getElementById('second');
first.addEventListener('mousemove', function(event)
{
    var x = event.clientX - event.target.offsetLeft;
    var y = event.clientY - event.target.offsetTop;
    shows.style.left = x-50 + 'px';
    shows.style.top = y-50 + 'px';
    second.style.backgroundPositionX = (x*-4)+100 + 'px';
    second.style.backgroundPositionY = (y*-4)+100 +'px';
});
