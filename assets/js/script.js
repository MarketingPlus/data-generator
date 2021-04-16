

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
    $(".result-page").css("height", "100%");
    $(".profiles").text(" ")
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

// copy to clipboard
$("#clipboard").on('click', e => {
    // command to select the password and copy it to te clipboard

    $("#copyText").select();
    document.execCommand('copy');
});


// User Generator Submit
$("#generateUser").on("submit", e => {
    e.preventDefault()
    const userAmount = rangeSlider.value
    const incFirstName = firstName.checked
    const incLastName = lastName.checked
    const incEmail = email.checked
    const incPhone = phone.checked
    const incPicture = picture.checked
    if(incFirstName === false && incLastName === false && incEmail === false && incPhone === false && incPicture === false) {
        $("#userGeneratorForm").css("display", "none");
        $("#carouselExampleIndicators").css("display", "block")
    } else {
        randomUserRequest(userAmount, incFirstName, incLastName, incEmail, incPhone, incPicture);
        $("body").css("border", "none")
        $("#userReturnSection").css("display", "block")
        $("#userGeneratorForm").css("display", "none");
    }
})

// Lorem Ipsum Submit
$("#generateLoremIpsum").on("submit", e => {
    e.preventDefault()
    loremIpsumRequest();
    $("#loremReturnSection").css("display", "block")
    $("#loremIpsumForm").css("display", "none");
})

// Placeholder Image Submit
$("#generatePlaceholder").on("submit", e => {
    e.preventDefault()
    placeholderRequest(300, 300, "Hello");
    $("#placeholderReturnSection").css("display", "block")
    $("#placeholderForm").css("display", "none");
}) 

// Random User API that fetches the data
function randomUserRequest (users, first, last, email, phone, picture) {
    var placeholderUrl = "https://randomuser.me/api/?results=" + users + "&inc=name,email,cell,picture&exc=login";
    $.ajax({
        url: placeholderUrl,
        method: "GET"
    }).then(function(response) {
        var results = response.results;
        if(users > 1) {
            $(".result-page").css("height", "auto");
        }
        showRandomUserData(first, last, email, phone, picture, results);
    }) 
}

// Lorem Ipsum API that fetches the data
function loremIpsumRequest () {
    var loremIpsumUrl = "https://loripsum.net/api";
    $.ajax({
        url: loremIpsumUrl,
        method: "GET"
    }).then(function(loremResponse) {
        console.log("Lorem Ipsum Response ------")
        console.log(loremResponse)
        showLoremIpsumData(loremResponse);
    })
}

// Picture Placeholder API that fetches the data
function placeholderRequest (width, height, text) {
    var placeholderUrl = "https://via.placeholder.com/"+ width + "x" + height + "?text=" + text;
    console.log("Placeholder Image Response ------")
    console.log(placeholderUrl);
    showPlaceholderData(placeholderUrl);
}

// Function that displays the results of specified random user requirements
function showRandomUserData (first, last, email, phone, picture, results) {
    for(var i = 0; i < results.length; i++) {
        var userContainerHtml = $(`<div class="container-user${i} container-user" id="userReturn">
        <section class="profile-picture-container${i} profile-picture-container">
          <img class="pro-pic${i} pro-pic"/>
        </section>
        <section class="profile-details${i} profile-details">
          <p class="text-area aktiv-grotesk-bold name-text${i} name-text"></p>
          <p class="text-area email-text${i} email-text"></p>
          <p class="text-area phone-text${i} phone-text"></p>
        </section>
      </div>`)
      $(".profiles").append(userContainerHtml);
        if(first === true) {
            var firstName = results[i].name.first
            $(".name-text" + i).append(firstName)
        }
        if(last === true) {
            var lastName = results[i].name.last
            $(".name-text" + i).append(" " + lastName)
        }
        if(email === true) {
            var emailRes = results[i].email
            $(".email-text" + i).append(emailRes)
        }
        if(phone === true) {
            var phoneRes = results[i].cell
            $(".phone-text" + i).append(phoneRes)
        }
        if(picture === true) {
            var picRes = results[i].picture.large
            $(".pro-pic" + i).attr('src', picRes)
        }
    }
}

// Function that displays the results of specified lorem ipsum requirements
function showLoremIpsumData (generatedLorem) {
    var postLorem = $(`
            <textarea readonly style="resize: none;" id="copyText">${generatedLorem}</textarea>
            `);
        $("#loremReturn").append(postLorem)
};

// Function that displays the results of specified placeholder requirements
function showPlaceholderData (placeholderUrl) {
    var placeholderImg = $(`
        <img src="${placeholderUrl}"/>
            <a href="${placeholderUrl}" target="_blank">
                <button id="downloadBtn" style="margin-top: 2vh" class="btn"><i class="fa fa-download"></i> Download</button>
            </a>
    `);

    $('#placeholderReturn').append(placeholderImg)
}














