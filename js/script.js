

document.addEventListener("DOMContentLoaded", function() {
    var signupBtn = document.querySelector(".signup-btn2");

    signupBtn.addEventListener("click", function(event) {
        event.preventDefault();

        var answer = confirm("가입하시겠습니까?");
        if (answer) {
            window.location.href = "index.html";
        } else {
            
        }
    });
});



function changeImage(imageId) {
    var clickedImage = document.getElementById(imageId).querySelector("img");
    var newImagePath = clickedImage.dataset.changedSrc;
    clickedImage.src = newImagePath;
}



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
