

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
    $(".profiles").text(" ");
    $(".loremText").text(" ");
    $("#placeholderReturn").text("");
    $("body").css({"background-image": "linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)", "background-color": "none", "border": "1px solid white"})
    $("#loremIpsumForm").css("display", "none");
    $("#userGeneratorForm").css("display", "none");
    $("#placeholderForm").css("display", "none");
    $("#userReturnSection").css("display", "none");
    $("#loremReturnSection").css("display", "none");
    $("#placeholderReturnSection").css("display", "none");
    $("#carouselExampleIndicators").css("display", "block");
})


// Creating variables based on the input box
const firstName = document.getElementById("firstNameStatus");
const lastName = document.getElementById("lastNameStatus");
const email = document.getElementById("emailStatus");
const phone = document.getElementById("phoneStatus");
const picture = document.getElementById("picStatus");
const links = document.getElementById("links");
const headings = document.getElementById("headings");
const decorate = document.getElementById("decorate");
const prude = document.getElementById("prude");

// Add event listeners for when and input occurs, calls function "syncCharacterAmount"
$("#rangeSlider").on('input', syncCharacterAmount);
$("#numberBox").on('input', syncCharacterAmount);
$("#rangeSlider2").on('input', syncCharacterAmount2);
$("#numberBox2").on('input', syncCharacterAmount2);
$("#rangeSlider3").on('input', syncCharacterAmount3);
$("#numberBox3").on('input', syncCharacterAmount3);

/* Function sets the value of the slider/numberbox equal to the other */
function syncCharacterAmount(e) {
    const value = e.target.value
    rangeSlider.value = value
    numberBox.value = value
}

function syncCharacterAmount2(e) {
    const value = e.target.value 
    rangeSlider2.value = value 
    numberBox2.value = value
}

function syncCharacterAmount3(e) {
    const value = e.target.value 
    rangeSlider3.value = value 
    numberBox3.value = value
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
    e.preventDefault();
    const paragraphLength = $(".paraLength").val();
    const typeOfParagraph = $(".paragraphType").val();
    const linksCheck = links.checked;
    const headingCheck = headings.checked;
    const decorateCheck = decorate.checked;
    const prudeCheck = prude.checked;
    loremIpsumRequest(paragraphLength, typeOfParagraph, linksCheck, headingCheck, decorateCheck, prudeCheck);
    $("#loremReturnSection").css("display", "block")
    $("#loremIpsumForm").css("display", "none");
})

// Placeholder Image Submit
$("#generatePlaceholder").on("submit", e => {
    e.preventDefault();
    const height = numberBox2.value;
    const width = numberBox3.value;
    const caption = Caption.value;
    placeholderRequest(height, width, caption);
    $("#placeholderReturnSection").css("display", "block")
    $("#placeholderForm").css("display", "none");
}) 

// Lorem Ipsum API that fetches the data
function loremIpsumRequest (paragraphLength, paragraphType, links, headings, decorate, prude) {
    var loremIpsumUrl = "https://loripsum.net/api/" + paragraphLength + "/" + paragraphType;
    if (links === true) {
        loremIpsumUrl = loremIpsumUrl + "/link"
    }
    if (headings === true) {
        loremIpsumUrl = loremIpsumUrl + "/headers"
    }
    if (decorate === true) {
        loremIpsumUrl = loremIpsumUrl + "/decorate"
    }
    if (prude === true) {
        loremIpsumUrl = loremIpsumUrl + "/prude"
    }
    $.ajax({
        url: loremIpsumUrl,
        method: "GET"
    }).then(function(loremResponse) {
        $(".result-page").css("height", "auto");
        $("body").css({"background-image": "linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)", "background-color": "white"})
        var storedLorem = localStorage.getItem("loremData");
        saveLorem(loremResponse);
        unsaveLorem();
        if(storedLorem) {
            $(".loremText").append(storedLorem);
            $("#save-lorem").css("display", "none")
            $("#unsave-lorem").css("display", "block")
            copySequence();
        } else {
            $(".loremText").append(loremResponse)
            $("#save-lorem").css("display", "block")
            $("#unsave-lorem").css("display", "none")
            copySequence();
        }
    })
}

function copySequence () {
    $("#copy-button").on("click", copyToClipboard(".loremText"))
        function copyToClipboard (element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        };
}

// Function that pushes data to local storage
function saveLorem (loremUrl) {
    $("#save-lorem").on("click", function() {
        localStorage.setItem("loremData", loremUrl)
        $("#save-lorem").css("display", "none")
        $("#unsave-lorem").css("display", "block")
    })
}

function unsaveLorem () {
    var empty;
    $("#unsave-lorem").on("click", function() {
        localStorage.removeItem("loremData")
        $("#unsave-lorem").css("display", "none")
        $("#save-lorem").css("display", "block")
    })
}


// Random User API that fetches the data
function randomUserRequest (users, first, last, email, phone, picture) {
    var randomUserUrl = "https://randomuser.me/api/?results=" + users + "&inc=name,email,cell,picture&exc=login";
    $.ajax({
        url: randomUserUrl,
        method: "GET"
    }).then(function(response) {
        var results = response.results;
        if(users > 1) {
            $(".result-page").css("height", "auto");
        }
        showRandomUserData(first, last, email, phone, picture, results);
    }) 
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

// Picture Placeholder API that fetches the data
function placeholderRequest (height, width, caption) {
    var placeholderUrl = "http://via.placeholder.com/"+ height + "x" + width + "?text=" + caption;
    showPlaceholderData(placeholderUrl);
}


// Function that displays the results of specified placeholder requirements
function showPlaceholderData (placeholderUrl) {
    var placeholderImg = $(`
        <img src="${placeholderUrl}"/>
            <a href="${placeholderUrl}" target="_blank">
                <button style="margin-top: 2vh" class="btn button-design" id="save-picture"><i class="fa fa-download"></i> DOWNLOAD</button>
            </a>
    `);

    $('#placeholderReturn').append(placeholderImg)
}