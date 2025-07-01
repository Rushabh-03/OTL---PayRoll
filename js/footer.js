document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    const FOOTER_CACHE_KEY = "cachedFooter_v2"; // Increment this when footer.html changes

    const cachedFooter = localStorage.getItem(FOOTER_CACHE_KEY);

    if (cachedFooter) {
        footerContainer.innerHTML = cachedFooter;
        document.dispatchEvent(new Event('footerLoaded'));
    } else {
        fetch("../components/footer.html")
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
                localStorage.setItem(FOOTER_CACHE_KEY, data);
                document.dispatchEvent(new Event('footerLoaded'));
            })
            .catch(err => console.error("Footer Load Failed:", err));
    }
});
