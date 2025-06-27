const ITEMS_PER_PAGE = 6;
let currentPage = 1;

function initializePagination() {
    const blogCards = document.querySelectorAll('.blog-card-wrapper');
    const totalPages = Math.ceil(blogCards.length / ITEMS_PER_PAGE);
    const paginationContainer = document.getElementById('blogPagination');

    if (!paginationContainer || blogCards.length === 0) return;

    // Prevent browser scroll restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Update blog display with current page
    updateBlogDisplay(blogCards, currentPage, true);
    
    // Generate pagination controls
    updatePaginationControls(totalPages, paginationContainer);

    // Add keyboard navigation
    addKeyboardNavigation(paginationContainer);
}

function updateBlogDisplay(blogCards, page, isInitialLoad = false) {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const blogContainer = document.querySelector('.container.p-5');
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    blogCards.forEach((card, index) => {
        card.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
        // Reset AOS attributes to trigger animations
        if (index >= startIndex && index < endIndex) {
            card.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
            card.removeAttribute('data-aos-easing');
        }
    });

    // Debounce AOS refresh to prevent scroll interference
    setTimeout(() => {
        AOS.refresh();
    }, 100);

    // Scroll to top of blog section, accounting for navbar height, only if not initial load
    if (!isInitialLoad) {
        const containerTop = blogContainer.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
            top: containerTop,
            behavior: 'smooth'
        });
    }
}

function updatePaginationControls(totalPages, paginationContainer) {
    paginationContainer.innerHTML = '';

    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">Previous</span></a>`;
    prevLi.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            updateBlogDisplay(document.querySelectorAll('.blog-card-wrapper'), currentPage);
            updatePaginationControls(totalPages, paginationContainer);
        }
    });
    paginationContainer.appendChild(prevLi);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageLi = document.createElement('li');
        pageLi.className = `page-item ${i === currentPage ? 'active' : ''}`;
        pageLi.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageLi.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            updateBlogDisplay(document.querySelectorAll('.blog-card-wrapper'), currentPage);
            updatePaginationControls(totalPages, paginationContainer);
        });
        paginationContainer.appendChild(pageLi);
    }

    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">Next</span></a>`;
    nextLi.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            updateBlogDisplay(document.querySelectorAll('.blog-card-wrapper'), currentPage);
            updatePaginationControls(totalPages, paginationContainer);
        }
    });
    paginationContainer.appendChild(nextLi);
}

function addKeyboardNavigation(paginationContainer) {
    const links = paginationContainer.querySelectorAll('.page-link');
    links.forEach((link, index) => {
        link.setAttribute('tabindex', '0');
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            } else if (e.key === 'ArrowLeft' && index > 0) {
                links[index - 1].focus();
            } else if (e.key === 'ArrowRight' && index < links.length - 1) {
                links[index + 1].focus();
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePagination);