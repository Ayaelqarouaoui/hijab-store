document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const suggestionsGrid = document.getElementById("suggestionsGrid");
    const closeBtn = document.querySelector(".close-modal");

    // Boucle pour afficher hijab1.jpeg à hijab18.jpeg dans la galerie
    for (let i = 1; i <= 18; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="images/hijab${i}.jpeg" alt="CHALHER Modèle ${i}" loading="lazy">
            <p class="product-name">CHALHER Édition N°${i}</p>
        `;

        card.onclick = () => openModal(i);
        gallery.appendChild(card);
    }

    // Ouvrir la fenêtre modale
    function openModal(index) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Bloque le scroll arrière
        
        modalImg.src = `images/hijab${index}.jpeg`;
        modalTitle.innerText = `Édition Prestige N°${index}`;
        
        // Générer 4 suggestions aléatoires
        suggestionsGrid.innerHTML = "";
        for(let j = 0; j < 4; j++) {
            let randomIdx = Math.floor(Math.random() * 18) + 1;
            const sImg = document.createElement('img');
            sImg.src = `images/hijab${randomIdx}.jpeg`;
            sImg.onclick = (e) => {
                e.stopPropagation();
                openModal(randomIdx);
            };
            suggestionsGrid.appendChild(sImg);
        }
    }

    // Fermer la modale
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});
