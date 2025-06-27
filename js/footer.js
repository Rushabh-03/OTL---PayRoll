document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => {
        footerContainer.innerHTML = data;
        document.dispatchEvent(new Event('footerLoaded'));
    })
    .catch(err => console.error("Footer Load Failed:", err));
});
