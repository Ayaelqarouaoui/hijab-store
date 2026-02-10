// ===== Hero Slider =====
let current = 0;
const slides = document.querySelectorAll(".hero img");
const total = slides.length;

function showSlide(index){
  slides.forEach((slide, i) => slide.style.display = i === index ? "block" : "none");
}

function nextSlide(){
  current = (current + 1) % total;
  showSlide(current);
}

setInterval(nextSlide, 4000);
showSlide(current);

// ===== Product Hover Effects =====
const products = document.querySelectorAll(".product");

products.forEach(prod => {
  prod.addEventListener("mouseenter", () => {
    prod.style.transform = "scale(1.05)";
    prod.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
  });
  prod.addEventListener("mouseleave", () => {
    prod.style.transform = "scale(1)";
    prod.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
  });
});

// ===== Lightbox Modal للصور =====
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

products.forEach(prod => {
  const img = prod.querySelector("img");
  img.addEventListener("click", () => {
    modal.innerHTML = `<img src="${img.src}" alt="Zoom">`;
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", () => modal.style.display = "none");

// ===== Scroll Animation =====
const faders = document.querySelectorAll(".collection, .about");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(fader => {
    const faderTop = fader.getBoundingClientRect().top;
    if(faderTop < triggerBottom){
      fader.style.opacity = 1;
      fader.style.transform = "translateY(0)";
    }
  });
});
