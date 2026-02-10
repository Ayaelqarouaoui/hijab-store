const gallery = document.getElementById('gallery');

// Boucle pour générer les 18 images de hijab1.jpeg à hijab18.jpeg
for (let i = 1; i <= 18; i++) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Structure de la carte produit
    card.innerHTML = `
        <img src="hijab${i}.jpeg" alt="Collection CHALHER Paris - Modèle ${i}" loading="lazy">
        <div class="product-info">
            <p class="product-name">Modèle Excellence n°${i}</p>
            <p class="product-price">Prix sur demande</p>
        </div>
    `;
    gallery.appendChild(card);
}

// Animation du header au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.9)';
    header.style.padding = window.scrollY > 50 ? '10px 5%' : '20px 5%';
});
