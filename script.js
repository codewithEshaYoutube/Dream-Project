
// Get the canvas and its context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load images
const faceImage = new Image();
const lipstickImage = new Image();
const eyeshadowImage = new Image();
const blushImage = new Image();

// Set the image sources
faceImage.src = "face.png"; // The base image of the girl's face (replace with actual image)
lipstickImage.src = "lipstick.png"; // Lipstick image (replace with actual image)
eyeshadowImage.src = "eyeshadow.png"; // Eyeshadow image (replace with actual image)
blushImage.src = "blush.png"; // Blush image (replace with actual image)

// Variables to store the applied makeup coordinates
let lipstickApplied = false;
let eyeshadowApplied = false;
let blushApplied = false;

// Function to draw the base face
function drawFace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.drawImage(faceImage, 0, 0, canvas.width, canvas.height); // Draw the face
}

// Function to apply lipstick
function applyLipstick() {
    if (!lipstickApplied) {
        // Coordinates for the lipstick placement
        ctx.drawImage(lipstickImage, 180, 480, 140, 40); // Adjust these coordinates based on your image
        lipstickApplied = true;
    } else {
        alert("Lipstick is already applied!");
    }
}

// Function to apply eyeshadow
function applyEyeshadow() {
    if (!eyeshadowApplied) {
        // Coordinates for the eyeshadow placement
        ctx.drawImage(eyeshadowImage, 140, 200, 200, 40); // Adjust these coordinates based on your image
        eyeshadowApplied = true;
    } else {
        alert("Eyeshadow is already applied!");
    }
}

// Function to apply blush
function applyBlush() {
    if (!blushApplied) {
        // Coordinates for the blush placement
        ctx.drawImage(blushImage, 120, 350, 150, 50); // Adjust these coordinates based on your image
        blushApplied = true;
    } else {
        alert("Blush is already applied!");
    }
}

// Function to reset makeup
function resetMakeup() {
    lipstickApplied = false;
    eyeshadowApplied = false;
    blushApplied = false;
    drawFace(); // Redraw the face without makeup
}

// Initialize the game by drawing the face
faceImage.onload = () => {
    drawFace();
};
