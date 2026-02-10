document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const suggestionsGrid = document.getElementById("suggestionsGrid");
    const closeBtn = document.querySelector(".close-modal");

    // Loop mn hijab1 tal hijab18 (7it 0 raha f hero)
    for (let i = 1; i <= 18; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/hijab${i}.jpeg" alt="Modèle ${i}" loading="lazy">
            <p style="margin-top:10px; font-size:12px; letter-spacing:1px;">CHALHER MODÈLE N°${i}</p>
        `;
        card.onclick = () => openModal(i);
        gallery.appendChild(card);
    }

    function openModal(index) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        modalImg.src = `images/hijab${index}.jpeg`;
        modalTitle.innerText = `Édition Prestige N°${index}`;
        
        // 4 suggestions Pinterest style
        suggestionsGrid.innerHTML = "";
        for(let j = 0; j < 4; j++) {
            let rand = Math.floor(Math.random() * 18) + 1;
            const sImg = document.createElement('img');
            sImg.src = `images/hijab${rand}.jpeg`;
            sImg.onclick = (e) => { e.stopPropagation(); openModal(rand); };
            suggestionsGrid.appendChild(sImg);
        }
    }

    closeBtn.onclick = () => { modal.style.display = "none"; document.body.style.overflow = "auto"; }
    window.onclick = (e) => { if (e.target == modal) { modal.style.display = "none"; document.body.style.overflow = "auto"; } }
});
