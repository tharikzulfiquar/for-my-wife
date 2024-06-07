function showFlowers() {
    document.querySelector('.message').style.display = 'block';
    document.querySelector('.flowers').style.display = 'flex';
    document.querySelector('.flowers').innerHTML = `
        <img src="https://www.linktoflowerimage1.com/flower1.png" alt="Flower 1">
        <img src="https://www.linktoflowerimage2.com/flower2.png" alt="Flower 2">
        <img src="https://www.linktoflowerimage3.com/flower3.png" alt="Flower 3">
    `;
}