
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
const rangeSlider = document.getElementById 
("rangeSlider")
const numberBox = document.getElementById 
("numberBox")
const form = document.getElementById
("generateUser")
const includeFirstNameElement = document.getElementById
("input1Status")
const includeLastNameElement = document.getElementById
("input2Status")
const includeEmailElement = document.getElementById
("input3Status")
const includeHomePhoneElement = document.getElementById
("input4Status")

/* Add event listeners for when and input occurs, calls function "syncCharacterAmount" */
rangeSlider.addEventListener('input', syncCharacterAmount);
numberBox.addEventListener('input', syncCharacterAmount);

form.addEventListener("submit", e => {
    e.preventDefault()
    const userAmount = rangeSlider.value
    const includeFirstName = includeFirstNameElement.checked
    const includeLastName = includeLastNameElement.checked
    const includeEmail = includeEmailElement.checked
    const includeHomePhone = includeHomePhoneElement.checked
    const generatedUser = generatingUser(userAmount, includeFirstName, includeLastName, includeEmail, includeHomePhone)
})

function generatingUser(userAmount, includeFirstName, includeLastName, includeEmail, includeHomePhone) {

    var a="";
    var b="";
    var c="";
    var d="";

    if (includeFirstName) a="First Name"
    if (includeLastName) b="Last Name"
    if (includeEmail) c="Email"
    if (includeHomePhone) d="Home Phone"

    prompt("Amount of Users: " + userAmount + ", " + a + ", " + b + ", " + c + ", " + d)
}

/* Function sets the value of the slider/numberbox equal to the other */
function syncCharacterAmount(e) {
    const value = e.target.value
    rangeSlider.value = value
    numberBox.value = value
}

generateBtn.addEventListener("click", generateUser);


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

