function generateQuote(){
    var quotes = ["With great power, comes great responsibility.", "Hope is the light that lifts us out of darkness.", "Nothing is impossible.", "Strength comes from within.", "Have faith.", "Once you believe in hope, nothing is impossible.", "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.", "A hero is someone who, in spite of weakness, doubt or not always knowing the answers, goes ahead and overcomes anyway."];
    var length = quotes.length;
    var number = Math.floor(Math.random() * (length - 1 - 0 + 1)) + 0;
    document.getElementById('quote').innerText = quotes[number];
}

function changeStyle(box) {

    if (box === 'box1') {
        document.getElementById('quote-container').style.color = 'blue';
        document.getElementById('quote-container').style.borderColor = 'blue';
        document.getElementById('quote-container').style.backgroundColor = 'greenyellow';

    }
    else if (box === 'box2') {
        document.getElementById('quote-container').style.color = 'red';
        document.getElementById('quote-container').style.border = 'red';
        document.getElementById('quote-container').style.backgroundColor = 'orange';

    }
    else if (box === 'box3') {
        document.getElementById('quote-container').style.color = 'yellow';
        document.getElementById('quote-container').style.borderColor = 'yellow';
        document.getElementById('quote-container').style.backgroundColor = 'skyblue';
    }
    else {
        document.getElementById('quote-container').style.color = 'purple';
        document.getElementById('quote-container').style.borderColor = 'purple';
        document.getElementById('quote-container').style.backgroundColor = 'goldenrod';
    }
}

function convert(converter, unit) {

    if (converter == "kg_to_lb") {
        var kg = unit;
        var pound = kg * 2.2046;

        document.getElementById("result").innerText = pound.toFixed(4) + " pound";
    }

    else {
        var pound = unit;
        var kg = pound / 2.2046;

        document.getElementById("result").innerText = kg.toFixed(4) + " kilograms";
    }
}

function calculate() {
    var values = document.getElementById('box1').value.split(/,/g);
    var sum = values.reduce(function (a, b) { return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = (sum / values.length).toFixed(13);
    document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

function deleteAll(){
    document.getElementById('text-area').value = '';
}

function capitalize() {
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toUpperCase());
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function sort(){
    var text = document.getElementById('text-area').value;
    var lines = text.split('');
    var newLines = [];
    
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toLowerCase());
    }
    newLines.sort();
    document.getElementById('text-area').value = newLines.join('');
    
}

function reverse (){
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].split('').reverse().join(''));
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function addNumbers() {
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push((i + 1) + '. ' + lines[i]);
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function stripBlank () {

    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() != '') {
            newLines.push(lines[i].trim());
        }
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function shuffle(){
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].trim());
    }
    newLines.sort(function () {
        return 0.5 - Math.random();
    }
    );
    document.getElementById('text-area').value = newLines.join('\n');
}