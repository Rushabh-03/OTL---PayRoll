document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

    const NAVBAR_CACHE_KEY = "cachedNavbar_v2"; // Increment this when navbar.html changes

    // Clean up old cached versions (v2, v3, etc.)
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("cachedNavbar") && key !== NAVBAR_CACHE_KEY) {
            localStorage.removeItem(key);
        }
    });
    
    const cachedNavbar = localStorage.getItem(NAVBAR_CACHE_KEY);

    if (cachedNavbar) {
        navbarContainer.innerHTML = cachedNavbar;
        document.dispatchEvent(new Event('navbarLoaded'));
        highlightActiveLink();
    } else {
        fetch("../components/navbar.html")
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
                localStorage.setItem(NAVBAR_CACHE_KEY, data);
                document.dispatchEvent(new Event('navbarLoaded'));
                highlightActiveLink();
            })
            .catch(err => console.error("Navbar Load Failed:", err));
    }

    function highlightActiveLink() {
        const links = navbarContainer.querySelectorAll('a.nav-link');
        const currentPath = window.location.pathname.split("/").pop();

        links.forEach(link => {
            const linkPath = link.getAttribute('href').split("/").pop();
            if (
                linkPath === currentPath ||
                (currentPath === '' && linkPath === 'index.html') ||
                (currentPath.startsWith('blog-detail') && linkPath === 'blog.html')
            ) {
                link.classList.add('active');
            }
        });
    }
});
