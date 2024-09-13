// Image upload preview functionality
const imageInput = document.getElementById('imageUpload');
const profileImage = document.getElementById('profile-image');

imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.onload = function (e) {
        profileImage.src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
});
