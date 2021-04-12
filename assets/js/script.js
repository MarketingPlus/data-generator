
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