// Get all view buttons
const viewButtons = document.querySelectorAll(".view");
const modal = document.getElementById("carModal");
const closeButton = document.querySelector(".close");

// Function to open modal
viewButtons.forEach((button) => {
    button.addEventListener("click", function() {
        // Get the vehicle element that corresponds to the clicked button
        const vehicle = button.parentElement; // Get the parent vehicle div
        const vehicleImage = vehicle.querySelector("img").src; // Get the image source
        const vehicleTitle = vehicle.querySelector("h3").innerText; // Get the title
        const vehiclePrice = vehicle.querySelector("p").innerText; // Get the price
        const vehicleDescription = vehicle.querySelector(".hidden-description").innerText; // Get the hidden description

        // Update modal content
        modal.querySelector("h2").innerText = vehicleTitle; // Set the title in the modal
        modal.querySelector("img").src = vehicleImage; // Set the image in the modal
        modal.querySelector(".modal-price").innerText = vehiclePrice; // Set the price in the modal
        modal.querySelector(".description").innerText = vehicleDescription; // Set the description in the modal

        // Show the modal
        modal.style.display = "block"; 
        
    });
});

// Close modal when the close button is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none"; // Hide the modal
    
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
        
    }
});