document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const closeBtn = document.querySelector(".close-modal");

    // Men hijab1 tal hijab18 (0 f hero)
    for (let i = 1; i <= 18; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/hijab${i}.jpeg" alt="CHALHER N°${i}" loading="lazy">
            <p style="margin-top:10px; font-size:11px; font-weight:bold; letter-spacing:1px;">MODÈLE EXCELLENCE N°${i}</p>
        `;
        card.onclick = () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            modalImg.src = `images/hijab${i}.jpeg`;
            modalTitle.innerText = `MODÈLE EXCELLENCE N°${i} - CHALHER PARIS`;
        };
        gallery.appendChild(card);
    }

    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});
