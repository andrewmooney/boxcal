function addBoxes(passed) {
    var boxes = document.getElementById('boxes');
    for(var i = 0; i < (90 * 52); i++) {
        var node = document.createElement('DIV');
        node.className += 'box';
        if (i < passed) { 
            node.className += ' passed';
        }
        
        if (i === passed) {
            node.className += ' now';
        }

        boxes.appendChild(node);
    }
}

function dateDiff(firstDate, secondDate) {

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    var diffWeeks = Math.round(diffDays / 7);
    
    return {"days": diffDays, "weeks": diffWeeks};
}

var firstDate = new Date(1978,03,17);
var secondDate = new Date();

console.log(firstDate);
console.log(secondDate);

var days = dateDiff(firstDate, secondDate).days;
var weeks = dateDiff(firstDate, secondDate).weeks;
console.log(days);
console.log(weeks);

addBoxes(weeks);
