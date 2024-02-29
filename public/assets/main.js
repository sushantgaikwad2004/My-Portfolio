document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('card-container').scrollIntoView({ behavior: 'smooth' });
});