
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
    $("#placeholderForm").css("display", "none");
    $("#userReturnSection").css("display", "none");
    $("#loremReturnSection").css("display", "none");
    $("#placeholderReturnSection").css("display", "none");
    $("#carouselExampleIndicators").css("display", "block")
})

// Creating variables based on the Range slider and Number box
const firstName = document.getElementById("firstNameStatus")
const lastName = document.getElementById("lastNameStatus")
const email = document.getElementById("emailStatus")
const phone = document.getElementById("phoneStatus")
const picture = document.getElementById("picStatus")

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
    const incPicture = picture.checked
    randomUserRequest(userAmount, incFirstName, incLastName, incEmail, incPhone, incPicture);

    $("#userReturnSection").css("display", "block")
    $("#userGeneratorForm").css("display", "none");
})

// Random User API that fetches the data
function randomUserRequest (users, first, last, email, phone, picture) {
    var placeholderUrl = "https://randomuser.me/api/?results=" + users + "&inc=name,email,cell,picture&exc=login";
    $.ajax({
        url: placeholderUrl,
        method: "GET"
    }).then(function(response) {
        console.log("Random User Response ------")
        var results = response.results;
        showRandomUserData(first, last, email, phone, picture, results);
    }) 
};

// Function that displays the results of specified random user requirements
function showRandomUserData (first, last, email, phone, picture, results) {
    console.log(results);
    for(var i = 0; i < results.length; i++) {
        if(first === true) {
            console.log(results[i].name.first)
        } else {
            console.log("Does not want first name")
        }
        if(last === true) {
            console.log(results[i].name.last)
        } else {
            console.log("Does not want last name")
        }
        if(email === true) {
            console.log(results[i].email)
        } else {
            console.log("Does not want email")
        }
        if(phone === true) {
            console.log(results[i].cell)
        } else {
            console.log("Does not want phone number")
        }
        if(picture === true) {
            console.log(results[i].picture.large)
        } else {
            console.log("Does not want picture")
        }
    }
}

// copy to clipboard
const clipboard = document.getElementById('clipboard')

clipboard.addEventListener('click', e => {
      // command to select the password and copy it to te clipboard

      
      $("#copyText").select();
      document.execCommand('copy');

});

// Lorem Ipsum API 
// Have parameters that relate to form results
function loremIpsumRequest () {
    var loremIpsumUrl = "https://loripsum.net/api";
    $.ajax({
        url: loremIpsumUrl,
        method: "GET"
    }).then(function(response) {
        console.log("Lorem Ipsum Response ------")
        console.log(loremResponse)

        var generatedLorem = loremResponse
        var postLorem = $(`
            <textarea readonly style="resize: none;" id="copyText">${generatedLorem}</textarea>
            
            `);

        $("#loremReturn").append(postLorem)
    })
}
loremIpsumRequest();



// Picture Placeholder API
// Pass form results into parameters
function placeholderRequest (width, height, text) {
    var placeholderUrl = "https://via.placeholder.com/"+ width + "x" + height + "?text=" + text;
    console.log("Placeholder Image Response ------")
    console.log(placeholderUrl);

    var placeholderImg = $(`
        <img src="${placeholderUrl}">
            <a href="${placeholderUrl}" target="_blank">
                <button id="downloadBtn" style="margin-top: 2vh" class="btn"><i class="fa fa-download"></i> Download</button>
            </a>
    `);

    $('#placeholderReturn').append(placeholderImg)
   
}
placeholderRequest(300, 300, "Hello");