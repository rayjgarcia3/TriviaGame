
var questions = [{
	question: "Which MLB team has won the most World Series championships?",
	choices: ["Boston Red Sox", "New York Yankees", "St. Louis Cardinals", "Kansas City Royals"],
	correctAnswer: 1
}, { 
	question: "Who was the first player to 60 home runs in a season?",
	choices: ["Roger Maris", "Barry Bonds", "Babe Ruth", "Sammy Sosa"],
  	correctAnswer: 2	  
}, {
	question: "Which player holds the record for most career home runs?",
	choices: ["Babe Ruth", "Hank Aaron", "Willie Mays", "Barry Bonds",],
	correctAnswer: 3	
}, {
	question: "As of August 2017, which MLB team has the longest champhionship drought?",
	choices: ["Chicago Cubs", "Houston Astros", "Cleveland Indians", "Texas Rangers",],
	correctAnswer: 2	
}, {
	question: "Which player below won the most recent Triple Crown Award",
	choices: ["Miguel Cabrera", "Carl Yastrzenski", "Ted Williams", "Frank Robinson"],
	correctAnswer: 0				
}];


var currentQuestion = 0;
var correctAnswers = 0;
var quizOver= false;

window.onload = function() {
  $("#start").on("click", timer.start);
};

var intervalId;
var clockRunning = true;

// Our stopwatch object
var timer = {

  time: 1,

  reset: function() {

    timer.time = 0;
    $("#display").html("00:00");
  },
  start: function() {

    if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {
    timer.time--;
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    $("#display").html(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.ceiling(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "60" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

