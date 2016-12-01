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

function dateDiff(dateA, dateB) {

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(1978,17,04);
    var secondDate = new Date();

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    var diffWeeks = Math.round(diffDays / 7);
    
    return {"days": diffDays, "weeks": diffWeeks};
}

var days = dateDiff(1978,17,04).days;
var weeks = dateDiff(1978,17,04).weeks;
console.log(days);
console.log(weeks);

addBoxes(weeks);
