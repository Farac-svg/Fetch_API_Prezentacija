async function data() {
  try {
    const odgovor = await fetch('https://cataas.com/api/cats?limit=3');
    const podaci = await odgovor.json();