document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

    fetch("../components/navbar.html")
    .then(response => response.text())
    .then(data => {
        navbarContainer.innerHTML = data;
        document.dispatchEvent(new Event('navbarLoaded'));

        //Highlight active link based on current URL
        const links = navbarContainer.querySelectorAll('a.nav-link');
        const currentPath = window.location.pathname.split("/").pop();

        links.forEach(link => {
            const linkPath = link.getAttribute('href').split("/").pop();
            if(linkPath === currentPath || 
               (currentPath === '' && linkPath === 'index.html') ||
               (currentPath.startsWith('blog-detail') && linkPath === 'blog.html')) {
                link.classList.add('active')
            }
        });
    })
    .catch(err => console.error("Navbar Load Failed:", err));
});

