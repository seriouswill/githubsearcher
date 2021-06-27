/*
 index.js
*/

$(document).ready(function() {

// "use strict";

var resultList = $("#resultList");
resultList.text("This is from jQuery");

var toggleButton = $('#toggleButton');
toggleButton.on('click', function() {
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide")

});

var listItems = $("header nav li");
listItems.css("font-weight", "bold")
listItems.filter(":first").css("font-size", "18px")

// let msg = "Hello World";
//         alert(msg);

// var resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

// console.log("msg is" + typeof(msg))

// var none;
// console.log("msg is" + typeof(none))

// if (aNumber == 10) {
//     console.log("10 is 10")

// } 

// function showMsg(msg, more) {
//     if (more) {
//         console.log("Show message" + msg + more)
//     } else {
//         console.log("Show message " + msg)
//     }
    
// }

// showMsg("some info", " and some more")

// var showIt = function (msg) {
//     console.log(msg)
// }
// showIt("Some message");

// showItThen("showItThen called", function () {
//     console.log("callback called")
// })

// var inGlobal = true;

$("#gitHubSearchForm").on("submit", function () {

    var searchPhrase = $("#searchPhrase").val();
    var useStars = $("#useStars").val();
    var langChoice = $("#langChoice").val();

    if (searchPhrase) {

        resultList.text("Performing search...");

        var gitHubSearch = "https://api.github.com/search/repositories?q=" + searchPhrase;

    if (langChoice != "All") {
        gitHubSearch += "+language:" + langChoice;
    }

    if (useStars) {
        gitHubSearch + "&sort=stars";
    }

    var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars"

    $.get(gitHubSearch, function (r) {
        //console.log(r.items.length);
        displayResults(r.items)
    })
    .fail(function(err) {
        console.log("failed to query GitHub")
    })
    .done(function() {

    })
}

    return false;
})



// var result = {
//     name: 'jQuery',
//     language: "JavaScript",
//     score: 4.5,
//     showLog: function () {

//     },
//     owner: {
//         login: "williamjamesoc",
//         id: 123456,
//     }
// }

// var results = [{
//     name: 'jQuery',
//     language: "JavaScript",
//     score: 4.5,
//     showLog: function () {

//     },
//     owner: {
//         login: "williamjamesoc",
//         id: 123456,
//     }
// }, {
//     name: 'jQuery UI',
//     language: "JavaScript",
//     score: 3.5,
//     showLog: function () {

//     },
//     owner: {
//         login: "williamjamesoc",
//         id: 123456,
//     }
// 

// ];

function displayResults(results) {
    

    resultList.empty();
    $.each(results, function (i, item) {

        var newResult = $("<div class='result'>" +
        "<div class='title'>" + item.name + "</div>" +
        "<div>Language: " + item.language + "</div>" +
        "<div>Owner: " + item.owner.login + "</div>" +
        "</div>");

        newResult.hover(function() {
            $(this).css("background-color", "lightblue");
        }, function () {
            $(this).css("background-color", "transparent");
        });

        resultList.append(newResult);
    }
)};

// results.push(result);
// results.push({
//     name: "dummy project"
// })


// console.log(results.length);
// console.log(results[0].name);


// for (var x = 0; x < results.length; x++) {
//     var result = results[x]
//     if (result.score < 4) continue; 
//     console.log(result.name);
// 
});