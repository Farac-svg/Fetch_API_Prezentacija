async function dohvatiSliku() {
    try {
        const odgovor = await fetch('https://cataas.com/cat?json=true');
        const podaci = await odgovor.json();

        console.log("Dohvaćeni podaci:", podaci); // Provjera u konzoli

        const kontejner = document.getElementById('slikaKontejner');
        kontejner.innerHTML = ''; // Briše prethodnu sliku ako postoji

        const img = document.createElement('img');
        img.src = `https://cataas.com/cat/${podaci.id}`;

        kontejner.appendChild(img);
    } catch (error) {
        console.error('Došlo je do greške:', error);
    }
}

// Dodajemo slušač klika na gumb
document.getElementById('mojGumb').addEventListener('click', dohvatiSliku);