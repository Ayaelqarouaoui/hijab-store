const products = document.querySelectorAll(".product");

// Related items mapping
const relatedItems = {
  "1":["2","3","4"], "2":["1","5","6"], "3":["1","7","8"], "4":["2","9","10"],
  "5":["6","11","12"], "6":["5","7","13"], "7":["3","6","14"], "8":["3","9","15"],
  "9":["4","8","16"], "10":["4","11","17"], "11":["5","10","18"], "12":["5","13","1"],
  "13":["6","12","2"], "14":["7","15","3"], "15":["8","14","4"], "16":["9","17","5"],
  "17":["10","16","6"], "18":["11","12","7"]
};

const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

let currentMainID = null;

function showModal(productID){
  currentMainID = productID;
  let mainImgSrc = `images/hijab${productID}.jpeg`;
  let description = document.querySelector(`.product[data-id="${productID}"]`).dataset.description;
  let html = `<button class="prev">&#10094;</button>
              <img src="${mainImgSrc}" class="main-img">
              <p class="description">${description}</p>
              <button class="next">&#10095;</button>
              <div class="related">`;
  relatedItems[productID].forEach(rid=>{
    html += `<img src="images/hijab${rid}.jpeg" class="related-img">`;
  });
  html += `</div>`;
  modal.innerHTML = html;
  modal.classList.add("show");

  addModalListeners();
}

function addModalListeners(){
  const mainImg = modal.querySelector(".main-img");
  const relatedImgs = modal.querySelectorAll(".related-img");

  relatedImgs.forEach(rimg=>{
    rimg.addEventListener("click", ()=>{
      mainImg.src = rimg.src;
      mainImg.classList.remove("fadeIn");
      void mainImg.offsetWidth;
      mainImg.classList.add("fadeIn");
    });
  });

  modal.querySelector(".prev").addEventListener("click", ()=>{
    navigateCarousel(-1);
  });
  modal.querySelector(".next").addEventListener("click", ()=>{
    navigateCarousel(1);
  });
}

function navigateCarousel(direction){
  let arr = [parseInt(currentMainID),...relatedItems[currentMainID].map(Number)];
  let currentIndex = arr.indexOf(parseInt(currentMainID));
  let newIndex = (currentIndex + direction + arr.length) % arr.length;
  showModal(arr[newIndex]);
  currentMainID = arr[newIndex];
}

// Open modal on product click
products.forEach(prod=>{
  prod.addEventListener("click", ()=>{
    const id = prod.dataset.id;
    showModal(id);
  });
});

// Close modal if click outside image
modal.addEventListener("click", e=>{
  if(e.target === modal) modal.classList.remove("show");
});
