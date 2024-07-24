function scrollToCars() {
    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your purchase!');
    });
});