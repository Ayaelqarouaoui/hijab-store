const products = document.querySelectorAll(".product");
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

products.forEach(prod => {
  prod.addEventListener("click", ()=>{
    let pid = prod.dataset.id;
    modal.innerHTML = `<div class="modal-content">
      <span class="close">&times;</span>
      <img src="images/hijab${pid}.jpg" class="main-img">
      <div class="related">`;
    // 3 related images
    for(let i=1;i<=3;i++){
      let rid = ((parseInt(pid)+i-1)%18)+1;
      modal.innerHTML += `<img src="images/hijab${rid}.jpg" class="related-img">`;
    }
    modal.innerHTML += `</div></div>`;
    modal.classList.add("show");

    modal.querySelector(".close").onclick = ()=> modal.classList.remove("show");
    modal.querySelectorAll(".related-img").forEach(img=>{
      img.onclick = ()=> modal.querySelector(".main-img").src = img.src;
    });
  });
});
