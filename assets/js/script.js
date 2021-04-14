
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

// Creating variables based on the Range slider and Number box
const firstName = document.getElementById("firstNameStatus")
const lastName = document.getElementById("lastNameStatus")
const email = document.getElementById("emailStatus")
const phone = document.getElementById("phoneStatus")

// Add event listeners for when and input occurs, calls function "syncCharacterAmount"
$("#rangeSlider").on('input', syncCharacterAmount);
$("#numberBox").on('input', syncCharacterAmount);

/* Function sets the value of the slider/numberbox equal to the other */
function syncCharacterAmount(e) {
    const value = e.target.value
    rangeSlider.value = value
    numberBox.value = value
}

$("#generateUser").on("submit", e => {
    e.preventDefault()
    const userAmount = rangeSlider.value
    const incFirstName = firstName.checked
    const incLastName = lastName.checked
    const incEmail = email.checked
    const incPhone = phone.checked
    console.log("Number of users: " + userAmount);
    console.log("First name: " + incFirstName);
    console.log("Last name: " + incLastName);
    console.log("Email: " + incEmail);
    console.log("Phone: " + incPhone);
})


// generateBtn.addEventListener("click", generateUser);



// Lorem Ipsum API 
// Have parameters that relate to form results
function loremIpsumRequest () {
    var loremIpsumUrl = "https://loripsum.net/api";
    $.ajax({
        url: loremIpsumUrl,
        method: "GET"
    }).then(function(response) {
        console.log("Lorem Ipsum Response ------")
        console.log(response)
    })
}
loremIpsumRequest();



// Picture Placeholder API
// Pass form results into parameters
function placeholderRequest (width, height, text) {
    var placeholderUrl = "https://via.placeholder.com/"+ width + "x" + height + "?text=" + text;
    console.log(placeholderUrl);
   
}
placeholderRequest(300, 300, "Hello");



// Random User API
// Have parameters that relate to form results
function randomUserRequest () {
    var placeholderUrl = "https://randomuser.me/api/?results=3&inc=name,gender,nat,email,cell,picture&exc=login";
    $.ajax({
        url: placeholderUrl,
        method: "GET"
    }).then(function(response) {
        console.log("Random User Response ------")
        console.log(response.results)
    })
};
randomUserRequest();



