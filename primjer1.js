async function data() {
    try {
        const odgovor = await fetch('https://jsonplaceholder.typicode.com/users');
        const podaci = await odgovor.json();
        console.log(podaci);
        //podaci.forEach(korisnik => console.log(korisnik.name)); //imena
        // podaci.forEach(korisnik => console.log(korisnik.username)); //korisničko ime
        //podaci.forEach(korisnik => console.log(korisnik.email)); //email
    } catch (error) {
        console.error('Došlo je do greške:', error);
    }
}

data();