
// Shows modals on click
$("#user-generator-carousel").on("click", function() {
    $("#userGeneratorForm").css("display", "block")
    $("#carouselExampleIndicators").css("display", "none")
})

$("#lorem-ipsum-carousel").on("click", function() {
    $("#loremIpsumForm").css("display", "block")
    $("#carouselExampleIndicators").css("display", "none")
})

$("#placeholder-carousel").on("click", function() {
    $("#placeholderForm").css("display", "block")
    $("#carouselExampleIndicators").css("display", "none")
})

$(".close-button").on("click", function() {
    $("#loremIpsumForm").css("display", "none");
    $("#userGeneratorForm").css("display", "none");
    $("#placeholderForm").css("display", "none")
    $("#carouselExampleIndicators").css("display", "block")
})

/* Creating constants based on the Range slider and Number box */
const characterRange = document.getElementById 
("characterRange")
const characterNumber = document.getElementById 
("characterNumber")
const form = document.getElementById
("generateUser")
/* Add event listeners for when and input occurs, calls function "syncCharacterAmount" */
characterNumber.addEventListener('input', syncCharacterAmount);
characterRange.addEventListener('input', syncCharacterAmount);
form.addEventListener("submit", e => {
    e.preventDefault()
})
/* Function sets the value of the slider/numberbox equal to the other */
function syncCharacterAmount(e) {
    const value = e.target.value
    characterNumber.value = value
    characterRange.value = value
}
/* Prevent refresh */



// Lorem Ipsum API request
var loremIpsumUrl = "https://loripsum.net/api";

$.ajax({
    url: loremIpsumUrl,
    method: "GET"
}).then(function(response) {
    console.log("Lorem Ipsum response ------")
    console.log(response)
})



/* function for generating the placeholder image
    var width = phInputWidth.value;
    var height = phInputHeight.value;

    var phImg = `https://via.placeholder.com/${width}x${height}`;


    $.ajax({
        url: phImg,
        method: "GET"
    }).then(function(phResponse) {
        var phImagePH = phImg.value
        var phImageE = $(`

        <img src="${phImagePH}">

        `);
    });
*/ 


/* 
var fullNameVal = $("#").val()
var emailVal = $("#").val()
var genderVal = $("#").val();
var dateOfBirthVal = $("#").val();
var phoneNumberVal = $("#").val();
var pictureVal = $("#").val();
*/

