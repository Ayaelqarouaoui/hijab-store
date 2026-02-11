
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // 1. Zid 30 tsowira (0 hta 30)
    for (let i = 0; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/hijab${i}.jpeg" alt="Modèle ${i}">
            <p>MODÈLE EXCELLENCE N°${i}</p>
        `;
        card.onclick = () => {
            document.getElementById('productModal').style.display = "block";
            document.getElementById('modalImage').src = `images/hijab${i}.jpeg`;
            document.getElementById('modalTitle').innerText = `MODÈLE EXCELLENCE N°${i}`;
        };
        gallery.appendChild(card);
    }

    // 2. Activation d l-bouton Ajouter au Panier -> Checkout
    document.getElementById('addToCartBtn').onclick = () => {
        document.getElementById('productModal').style.display = "none";
        document.getElementById('checkoutModal').style.display = "block";
    };

    // 3. Sedd l-Modals
    document.querySelectorAll('.close-modal, .close-checkout').forEach(btn => {
        btn.onclick = () => {
            document.getElementById('productModal').style.display = "none";
            document.getElementById('checkoutModal').style.display = "none";
        };
    });

    // 4. Contact o User links
    document.getElementById('userIcon').onclick = () => alert("Espace Client bientôt disponible");
    document.getElementById('orderLink').onclick = () => alert("Connectez-vous pour voir vos commandes");
});
