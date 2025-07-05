document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    const FOOTER_CACHE_KEY = "cachedFooter_v1"; // Increment this when footer.html changes

    // Clean up old cached versions (v2, v3, etc.)
    // Object.keys(localStorage).forEach(key => {
    //     if (key.startsWith("cachedFooter") && key !== FOOTER_CACHE_KEY) {
    //         localStorage.removeItem(key);
    //     }
    // });

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
