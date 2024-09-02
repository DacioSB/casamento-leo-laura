document.addEventListener('DOMContentLoaded', function() {
    const btnTwoReais = document.querySelector('.two-reals'); // Selects the "2 Reais" button
    
    btnTwoReais.addEventListener('mouseover', () => {
        // Get the viewport dimensions
        const maxX = window.innerWidth - btnTwoReais.clientWidth;
        const maxY = window.innerHeight - btnTwoReais.clientHeight;
        
        // Generate a random position within the viewport
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        
        // Apply the new position to the "2 Reais" button
        btnTwoReais.style.position = 'absolute';
        btnTwoReais.style.left = `${newX}px`;
        btnTwoReais.style.top = `${newY}px`;
    });
});
