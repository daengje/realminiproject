// script.js

document.addEventListener("DOMContentLoaded", function() {
    var signupBtn = document.querySelector(".signup-btn2");

    signupBtn.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지

        var answer = confirm("가입하시겠습니까?");
        if (answer) {
            window.location.href = "basic.html"; // 예를 눌렀을 때 basic.html로 이동
        } else {
            // 아니오를 눌렀을 때는 아무런 동작을 하지 않음
        }
    });
});



// script.js

function changeImage(imageId) {
    var clickedImage = document.getElementById(imageId).querySelector("img");
    var newImagePath = clickedImage.dataset.changedSrc;
    clickedImage.src = newImagePath;
}
