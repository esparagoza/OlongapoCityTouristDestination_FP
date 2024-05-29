document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery img");
    
    galleryItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            item.style.transform = "scale(0.9)";
            item.style.transition = "transform 0.3s";
        });

        item.addEventListener("mouseout", function() {
            item.style.transform = "scale(1)";
        }); 
    });
});