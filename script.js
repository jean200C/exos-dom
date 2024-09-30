document.querySelectorAll('.article').forEach(article => {
    const priceElement = article.querySelector('.prix');
    const quantityElement = article.querySelector('.quantite');
    const totalElement = document.getElementById('total');

    // Fonction pour mettre à jour le prix
    function updatePrice() {
        const price = parseFloat(article.dataset.price);
        const quantity = parseInt(quantityElement.textContent);
        priceElement.textContent = (price * quantity).toFixed(2) + '€';
        updateTotal();
    }

    // Fonction pour mettre à jour le total
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.article').forEach(a => {
            total += parseFloat(a.querySelector('.prix').textContent);
        });
        totalElement.textContent = total.toFixed(2) + '€';
    }

    // Événements pour les boutons "+"
    article.querySelector('.increase').addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updatePrice();
    });

    // Événements pour les boutons "-"
    article.querySelector('.decrease').addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
            updatePrice();
        }
    });

    // Événements pour le bouton "Supprimer"
    article.querySelector('.supprimer').addEventListener('click', () => {
        article.remove();
        updateTotal();
    });

    // Événements pour le bouton "Aimer"
    article.querySelector('.like').addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Met à jour le total initial
updateTotal();
