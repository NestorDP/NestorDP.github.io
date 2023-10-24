var events = document.querySelectorAll('.event');

events.forEach(function(event) {
 var year = event.getAttribute('data-year');
 var timelineYear = document.createElement('div');
 var timelineBar = document.createElement('div');
 
 timelineYear.textContent = year;
 timelineYear.className = 'timeline-year';
 
 timelineBar.className = 'timeline-bar';
 
 document.querySelector('.timeline').appendChild(timelineYear);
 document.querySelector('.timeline').appendChild(timelineBar);
});