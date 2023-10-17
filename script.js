 // Get references to the HTML elements we want to work with
 let popup = document.getElementById("popup");
 let submitButton = document.getElementById("submitButton");

 // Function to open the pop-up
 function openPopup() {
   // Add the "open-popup" class to the pop-up element
   // This class makes the pop-up visible and scales it to its original size
   popup.classList.add("open-popup");

   // Hide the Submit button by changing its display style property
   submitButton.style.display = "none"; // Hide the Submit button
 }

 // Function to close the pop-up
 function closePopup() {
   // Remove the "open-popup" class to hide the pop-up
   popup.classList.remove("open-popup");

   // Show the Submit button by changing its display style property
   submitButton.style.display = "block"; // Show the Submit button
 }