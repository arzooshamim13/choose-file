console.log("Hello World !");

function submit() {
    var file = document.getElementById("file").files[0];
    var image = document.getElementById("image");
    
    if (file && file.type.startsWith("image/")) {
        image.src = URL.createObjectURL(file);
        image.style.display = "block";
    } else {
        alert("Please upload a valid image file!");
    }
}

function reset() {
    var fileInput = document.getElementById("file");
    var image = document.getElementById("image");
    
    fileInput.value = ""; // Clear file input
    image.src = ""; // Clear image source
    image.style.display = "none"; // Hide the image
}