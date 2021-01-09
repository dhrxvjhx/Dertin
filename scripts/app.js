// changes made to search because inline is not possible
getLocation = "https://google.com/search?q="

document.getElementById("textbox").addEventListener("keyup", function(event) {
    if (event.key === 13 || event.code === "Enter") {   
        event.preventDefault();
        search();
    }
});

document.getElementById("reddit").addEventListener("click", reddit);
document.getElementById("youtube").addEventListener("click", youtube);
document.getElementById("github").addEventListener("click", github);
document.getElementById("search").addEventListener("click", search);
document.getElementById("twitter").addEventListener("click", twitter);
document.getElementById("gmail").addEventListener("click", gmail);
window.onload = startTime();

function search(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == '') {
        location = "https://google.com"
    }
    else {
        location = "https://google.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value) + '&ia=web';
    }
}

function reddit(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://www.reddit.com/"
    }
    else if (txtBoxInput.substring(0, 2) == "r/") {
        location = "https://www.reddit.com/" + document.getElementById('textbox').value;
    }
    else {
        location = "https://www.reddit.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function gmail(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://mail.google.com/mail/u/0/#inbox";
    }
    else {
        location = "https://mail.google.com/mail/u/0/#search/" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function twitter(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://twitter.com/";
    }
    else {
        location = "https://twitter.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function github(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://github.com/";
    }
    else {
        location = "https://github.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function youtube(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://youtube.com/";
    }
    else {
        location = "https://www.youtube.com/results?search_query=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function startTime() {
    var today = new Date();
    var greeting;
    var h = today.getHours();
    if(h < 12) {
        greeting = "Good morning.";
    }
    else if(h >= 12 && h < 17) {
        greeting = "Good afternoon.";
    }
    else {
        greeting = "Good evening.";
    }

    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('greetingMsg').innerHTML = greeting;
    var t = setTimeout(startTime, 500);

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}