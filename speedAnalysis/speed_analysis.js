let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
//set the test text
document.getElementById("inputText").value = testText;

// Reset result and timer
document.getElementById("output").innerHTML = "";
startTime = new Date().getTime();

// Change button text and functionality
var button = document.getElementById("btn");
button.innerHTML = "End Test";
button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input 
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPN)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }


// Display the results
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<h2>Typing Test Results:</h2>"+
"<p>Words Typed: " + typedWords + "</P>" +
"<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
"<p>Words Per Minute (WPM): " + wpm + "</p>";

// Rset the button
var button = document.getElementById("btn");
button.innerHTML = "Start Test";
button.onclick = startTest;
}

function endtest() {
    var endtime = new Date().getTime();
var timeElapsed = (endTime - startTime) / 1000;

var userTypedText = document.getElementById("userInput").value;
var typedWords = userTypedText.split(/\s+/).filter(function (word) { return word !==""; }).length;
var textLength = userTypedText.length;

var wpm = (typedWords / timeElapsed) * 60;


var outputDiv = document.getElementById("output");
outputDiv.innerHtml = "<h2>Typing Test Result:</h2>" +
"<p>Words Typed: " + typedwords + "</P>" +
"<p>Text Length: " + textLength + " characters</p>" +
"<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
"<p>Words Per Minute: (WPM): " + wpm.toFixed(2) + "</p>";

var button = document.getElementById("btn");
button.innerHTML = "Start Test";
}