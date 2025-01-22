`javascript
   function adoptPet() {
       const pets = ['🐶 Dog', '🐱 Cat'];
       const randomPet = pets[Math.floor(Math.random() * pets.length)];
       document.getElementById('pet-display').innerText = `You adopted a: ${randomPet}`;
   }
