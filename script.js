
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('productModal');

    // 1. Generation dyal 31 Hijab (0 hta 30)
    for (let i = 0; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/hijab${i}.jpeg" loading="lazy">
            <p style="margin-top:10px; font-size:11px; font-weight:bold;">MODÈLE EXCELLENCE N°${i}</p>
        `;
        card.onclick = () => openProduct(i);
        gallery.appendChild(card);
    }

    // 2. Fonction Open Product
    window.openProduct = function(id) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.getElementById("modalImage").src = `images/hijab${id}.jpeg`;
        document.getElementById("modalTitle").innerText = `MODÈLE EXCELLENCE N°${id}`;
        
        // Random Pinterest recommendations
        const recGrid = document.getElementById('recommendedGrid');
        recGrid.innerHTML = '';
        let used = [id];
        for (let j = 0; j < 4; j++) {
            let rid = Math.floor(Math.random() * 31);
            while(used.includes(rid)) rid = Math.floor(Math.random() * 31);
            used.push(rid);
            const rec = document.createElement('div');
            rec.className = 'rec-card';
            rec.innerHTML = `<img src="images/hijab${rid}.jpeg">`;
            rec.onclick = () => { modal.scrollTo(0,0); openProduct(rid); };
            recGrid.appendChild(rec);
        }
    };

    // 3. Logic dyal Modals o Menu
    const cartModal = document.getElementById('cartModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const loginModal = document.getElementById('loginModal');

    document.querySelector('.menu-burger').onclick = () => document.getElementById('sideMenu').classList.add('active');
    document.querySelector('.close-menu').onclick = () => document.getElementById('sideMenu').classList.remove('active');
    
    document.getElementById('searchBtn').onclick = () => document.getElementById('searchOverlay').style.display = 'block';
    document.getElementById('userIcon').onclick = () => loginModal.style.display = 'block';
    document.getElementById('openLoginFooter').onclick = () => loginModal.style.display = 'block';

    document.querySelector('.add-to-cart').onclick = () => cartModal.style.display = 'block';
    document.getElementById('continueShopping').onclick = () => cartModal.style.display = 'none';
    document.getElementById('goToCheckout').onclick = () => { cartModal.style.display = 'none'; checkoutModal.style.display = 'block'; };

    // Closers
    document.querySelectorAll('.close-modal, .close-checkout, .close-login, .close-search').forEach(btn => {
        btn.onclick = () => {
            modal.style.display = "none";
            checkoutModal.style.display = "none";
            loginModal.style.display = "none";
            document.getElementById('searchOverlay').style.display = 'none';
            document.body.style.overflow = "auto";
        }
    });

    window.onclick = (e) => {
        if (e.target.className.includes('modal')) {
            e.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    // Final Action
    document.getElementById('paymentForm').onsubmit = (e) => {
        e.preventDefault();
        alert("Paiement validé ! Merci de votre achat chez CHALHER Paris.");
        location.reload();
    };
});
