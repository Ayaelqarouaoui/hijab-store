
let cart = [];

// Gallery Generation
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    for (let i = 1; i <= 18; i++) {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `<img src="images/hijab${i}.jpeg"><p style="text-align:center; margin-top:10px; font-size:12px;">MODÈLE N°${i}</p>`;
        div.onclick = () => openProduct(i);
        gallery.appendChild(div);
    }
});

function openProduct(index) {
    document.getElementById('modalImage').src = `images/hijab${index}.jpeg`;
    document.getElementById('modalTitle').innerText = `MODÈLE PRESTIGE N°${index}`;
    document.getElementById('productModal').style.display = "block";
    document.getElementById('add-to-cart-btn').onclick = () => addToCart(index);
}

function addToCart(index) {
    cart.push({ name: `Modèle N°${index}`, price: 54.95, img: `images/hijab${index}.jpeg` });
    updateCart();
    closeModal();
    toggleCart();
}

function updateCart() {
    const items = document.getElementById('cart-items');
    items.innerHTML = cart.map((item, i) => `
        <div style="display:flex; gap:10px; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
            <img src="${item.img}" width="50">
            <div><p style="font-size:12px;">${item.name}</p><p>54.95 €</p></div>
        </div>
    `).join('');
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('total-price').innerText = (cart.length * 54.95).toFixed(2);
}

function toggleCart() { document.getElementById('side-cart').classList.toggle('active'); }
function openLogin() { document.getElementById('loginModal').style.display = "block"; }
function closeLogin() { document.getElementById('loginModal').style.display = "none"; }
function closeModal() { document.getElementById('productModal').style.display = "none"; }
function toggleFlags() { document.getElementById('flags-box').style.display = document.getElementById('flags-box').style.display === "block" ? "none" : "block"; }
function togglePassword() {
    const p = document.getElementById('loginPassword');
    p.type = p.type === "password" ? "text" : "password";
}
