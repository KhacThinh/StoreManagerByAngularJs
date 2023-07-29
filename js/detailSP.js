// JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail-image");
    const mainImage = document.querySelector(".main-image");
  
    // Event listener for thumbnail images
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function() {
        mainImage.src = thumbnail.src;
      });
    });
  
    const minusBtn = document.querySelector(".minus");
    const plusBtn = document.querySelector(".plus");
    const quantityInput = document.querySelector(".quantity-input");
  
    // Event listener for minus button
    minusBtn.addEventListener("click", function() {
      let quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantityInput.value = quantity - 1;
      }
    });
  
    // Event listener for plus button
    plusBtn.addEventListener("click", function() {
      let quantity = parseInt(quantityInput.value);
      quantityInput.value = quantity + 1;
    });
  
    const addToCartBtn = document.querySelector(".add-to-cart");
    const buyNowBtn = document.querySelector(".buy-now");
  
    // Event listener for Add to Cart button
    addToCartBtn.addEventListener("click", function() {
      // Add to Cart logic here
      alert("Added to Cart!");
    });
  
    // Event listener for Buy Now button
    buyNowBtn.addEventListener("click", function() {
      // Buy Now logic here
      alert("Buy Now!");
    });
  });
  
// Get the main image and thumbnail images
const mainImage = document.querySelector('.main-image img');
const thumbnailImages = document.querySelectorAll('.thumbnail-image img');

// Add click event listeners to thumbnail images
thumbnailImages.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Get the source of the clicked thumbnail image
    const src = thumbnail.getAttribute('src');

    // Set the source of the main image to the clicked thumbnail image
    mainImage.setAttribute('src', src);
  });
});