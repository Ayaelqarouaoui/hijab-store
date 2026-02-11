document.addEventListener('DOMContentLoaded', () => {

const gallery = document.getElementById('gallery');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close-modal");

let cart = [];
const cartCount = document.querySelector(".cart-count");
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");

/* PRODUCTS */
for (let i = 1; i <= 18; i++) {
const card = document.createElement('div');
card.className = 'product-card';
card.innerHTML = `
<img src="images/hijab${i}.jpeg">
<p>MODÈLE EXCELLENCE N°${i}</p>
`;
card.onclick = () => {
modal.style.display = "block";
modalImg.src = `images/hijab${i}.jpeg`;
modalTitle.innerText = `MODÈLE EXCELLENCE N°${i}`;
};
gallery.appendChild(card);
}

/* CLOSE MODAL */
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

/* ADD TO CART */
document.querySelector(".add-to-cart").onclick = () => {
const title = modalTitle.innerText;
cart.push(title);
cartCount.innerText = cart.length;
updateCart();
alert("Produit ajouté au panier 🛒");
};

function updateCart(){
cartItemsContainer.innerHTML="";
cart.forEach(item=>{
cartItemsContainer.innerHTML += `<p>${item}</p>`;
});
cartTotal.innerText="Total articles : "+cart.length;
}

/* SIDEBAR */
const burger = document.querySelector(".menu-burger");
const sidebar = document.querySelector(".sidebar");
burger.onclick = () => sidebar.style.left="0";
document.querySelector(".close-sidebar").onclick=()=>sidebar.style.left="-250px";

/* SEARCH */
const searchIcon = document.querySelector(".fa-search");
const searchInput = document.querySelector(".search-input");

searchIcon.onclick = ()=>{searchInput.style.display="block";searchInput.focus();}

searchInput.addEventListener("keyup", function(){
const value = this.value.toLowerCase();
document.querySelectorAll(".product-card").forEach(card=>{
card.style.display = card.innerText.toLowerCase().includes(value) ? "block":"none";
});
});

/* USER */
const userIcon = document.querySelector(".fa-user");
const userMenu = document.querySelector(".user-dropdown");
userIcon.onclick=()=>userMenu.style.display=userMenu.style.display==="block"?"none":"block";

/* MINI CART */
const cartIcon = document.querySelector(".fa-shopping-bag");
const miniCart = document.querySelector(".mini-cart");
cartIcon.onclick=()=>miniCart.style.display=miniCart.style.display==="block"?"none":"block";

});

