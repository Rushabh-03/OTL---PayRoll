// Renders star ratings including full, half, and empty stars
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return `${`<i class="bi bi-star-fill"></i>`.repeat(fullStars)}${
    halfStar ? '<i class="bi bi-star-half"></i>' : ""
  }${`<i class="bi bi-star"></i>`.repeat(emptyStars)}`;
}

// Helper function to create a URL-friendly slug from the tool title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

// Renders individual tool cards
function renderToolCard(tool) {
  // Extract solid color from background (remove the last 2 characters for opacity)
  const solidColor = tool.background.slice(0, 7); // e.g., #0B98D31A -> #0B98D3
  const slug = createSlug(tool.title); // Generate URL slug
  const toolUrl = `tool-details.html?tool=${slug}`; // Dynamic URL
  // console.log(
  //   `Rendering tool: ${tool.title}, solidColor: ${solidColor}, url: ${toolUrl}`
  // ); // Debug log
  return `
    <div class="col-md-4 col-lg-3 mb-4">
        <div class="tool-card">
            <div class="tool-icon" style="background:${tool.background};" data-solid-color="${solidColor}">
                <a href="${toolUrl}">
                    <img src="${tool.iconPath}" alt="${tool.title}" class="img-fluid" />
                </a>
            </div>
            <div class="tool-title">
                <a href="${toolUrl}">${tool.title}</a>
            </div>
            <div class="tool-team">${tool.team}</div>
            <div class="star-rating">
                ${renderStars(tool.rating)}
                <span class="tool-label">${tool.label}</span>
            </div>
            <hr>
        </div>
    </div>
    `;
}

// Dataset of tools
const toolsData = [
  {
    title: "Helpdesk/ Support ticketing System",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/helpdesk.svg",
    background: "#0B98D31A",
    rating: 5,
    label: "Free",
    highlighted: true,
    description: "Orange Support offers a simplified and streamline customer service that delivers fast, effective and measurable support. It helps to organize the customer query process and saves time.",
    dashboardImages: ["assets/marketplace/details/helpdesk-dashboard.webp", "assets/marketplace/details/helpdesk-dashboard.webp"],
    version: "2.0.10",
    lastUpdated: "Aug 22, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Timesheet/ Utilization Tracking", 
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/timesheet.svg",
    background: "#FD5E651A",
    rating: 4,
    label: "Call",
    description: "Track time and utilization efficiently with this tool.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.5.3",
    lastUpdated: "Jul 10, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Login Using - Authentication",
    team: "Orange Team", 
    iconPath: "assets/marketplace/icons/login-auth.svg",
    background: "#15AAA71A",
    rating: 4.5,
    label: "Free",
    description: "Secure login system with authentication features.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.1.0",
    lastUpdated: "Jun 15, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Happiness Meter",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/happiness-meter.svg",
    background: "#303F9F1A",
    rating: 5,
    label: "Free",
    description: "Measure employee happiness and engagement levels.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.8.2",
    lastUpdated: "Sep 01, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Meeting Room/ Workstation",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/workstation.svg",
    background: "#1C1F371A",
    rating: 3.5,
    label: "Free",
    description: "Manage meeting rooms and workstations effectively.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.2.5",
    lastUpdated: "May 20, 2023",
    compatibility: "19 and up"
  },
  {
    title: "Vendor/Manpower Tracking System",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/vendor.svg",
    background: "#FF75021A",
    rating: 4.5,
    label: "Call",
    description: "Track vendors and manpower resources efficiently.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.3.1",
    lastUpdated: "Aug 05, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Forum/Knowledge stats",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/forum.svg",
    background: "#7B1FA21A",
    rating: 5,
    label: "Call",
    description: "Monitor forum activity and knowledge statistics.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.9.0",
    lastUpdated: "Jul 25, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Virtual Biometric Attendance System",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/biometrics.svg",
    background: "#0B98D31A",
    rating: 4,
    label: "Free",
    description: "Virtual biometric system for attendance tracking.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.0.0",
    lastUpdated: "Aug 12, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Google Analytics",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/google-analytics.svg",
    background: "#FD5E651A",
    rating: 4.5,
    label: "Free",
    description: "Integrate Google Analytics for website insights.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.7.4",
    lastUpdated: "Jun 30, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Skills & Endorsements",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/skills.svg",
    background: "#15AAA71A",
    rating: 5,
    label: "Call",
    description: "Manage skills and endorsements for employees.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.2.1",
    lastUpdated: "Sep 10, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Organization Chart",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/org-chart.svg",
    background: "#303F9F1A",
    rating: 5,
    label: "Free",
    description: "Visualize your organization structure.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.6.0",
    lastUpdated: "Aug 18, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Master Login",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/master-login.svg",
    background: "#1C1F371A",
    rating: 5,
    label: "Call",
    description: "Centralized login system for multiple services.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.0.8",
    lastUpdated: "Jul 15, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Orange (Firewall)",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/orange-firewall.svg",
    background: "#FF75021A",
    rating: 5,
    label: "Free",
    description: "Enhanced firewall protection for Orange services.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.9.5",
    lastUpdated: "Aug 28, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Login Attempts",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/login-attempts.svg",
    background: "#7B1FA21A",
    rating: 5,
    label: "Free",
    description: "Monitor and manage login attempt records.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.4.2",
    lastUpdated: "Jun 22, 2023",
    compatibility: "19 and up"
  },
  {
    title: "Profile Fields Mapper",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/field-mapper.svg",
    background: "#0B98D31A",
    rating: 5,
    label: "Free",
    description: "Map and manage profile fields effectively.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.1.3",
    lastUpdated: "Sep 05, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Default Colleague plugin",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/colleague-plugin.svg",
    background: "#FD5E651A",
    rating: 5,
    label: "Free",
    description: "Enhance colleague interactions with this plugin.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.3.0",
    lastUpdated: "Jul 18, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Config Protector",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/config-protector.svg",
    background: "#15AAA71A",
    rating: 5,
    label: "Call",
    description: "Protect configuration settings securely.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.0.7",
    lastUpdated: "Aug 14, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Forever Login plugin",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/forever-login-plugin.svg",
    background: "#303F9F1A",
    rating: 5,
    label: "Free",
    description: "Persistent login solution for users.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.6.8",
    lastUpdated: "Sep 02, 2023",
    compatibility: "20 and up"
  },
  {
    title: "Profile Statistics",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/profile-statistics.svg",
    background: "#1C1F371A",
    rating: 5,
    label: "Free",
    description: "Analyze profile statistics and trends.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "2.2.0",
    lastUpdated: "Jul 28, 2023",
    compatibility: "21 and up"
  },
  {
    title: "Session Tracker",
    team: "Orange Team",
    iconPath: "assets/marketplace/icons/session-tracker.svg",
    background: "#FF75021A",
    rating: 5,
    label: "Free",
    description: "Track user sessions and activities.",
    dashboardImages: ["https://via.placeholder.com/600x300", "https://via.placeholder.com/600x300"],
    version: "1.5.9",
    lastUpdated: "Aug 30, 2023",
    compatibility: "20 and up"
  },
];

// Filter tools based on search term and category
function filterTools(searchTerm = "", category = "Human Resources") {
  searchTerm = searchTerm.toLowerCase().trim();
  
  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = searchTerm === "" || 
                         tool.title.toLowerCase().includes(searchTerm) || 
                         tool.description.toLowerCase().includes(searchTerm);
    
    // If no category is selected or category is "All", show all tools
    const matchesCategory = category === "All" || 
                           tool.category === category;
    
    return matchesSearch && (category === "All" || true); // For now, ignore category filtering until we add categories to tools
  });
  
  updateToolsDisplay(filteredTools);
}

// Sort tools based on selected option
function sortTools(criteria) {
  let sortedTools = [...toolsData]; // clone

  switch (criteria) {
    case "Rating":
      sortedTools.sort((a, b) => b.rating - a.rating);
      break;
    case "Newest":
      sortedTools.sort(() => 0.5 - Math.random()); // Simulated
      break;
    case "Price":
      const priceOrder = { Free: 0, Call: 1 };
      sortedTools.sort((a, b) => priceOrder[a.label] - priceOrder[b.label]);
      break;
    case "Most Popular":
    default:
      sortedTools = [...toolsData]; // Default order
  }

  // Apply current search filter to sorted tools
  const searchInput = document.querySelector('.search-input-marketplace');
  if (searchInput && searchInput.value.trim() !== "") {
    const searchTerm = searchInput.value.toLowerCase().trim();
    sortedTools = sortedTools.filter(tool => 
      tool.title.toLowerCase().includes(searchTerm) || 
      tool.description.toLowerCase().includes(searchTerm)
    );
  }

  updateToolsDisplay(sortedTools);
}

// Helper function to update tools display and hover effects
function updateToolsDisplay(tools) {
  const container = document.getElementById("toolsGrid");
  if (!container) {
    return; // Exit if container is null
  }
  container.innerHTML = tools.map(renderToolCard).join("");
  applyHoverEffects();
}

// Helper function to apply hover effects to tool icons
function applyHoverEffects() {
  const icons = document.querySelectorAll(".tool-icon");
  if (icons.length > 0) {
    icons.forEach((icon) => {
      const solidColor = icon.getAttribute("data-solid-color");
      if (solidColor) {
        icon.style.setProperty("--solid-color", solidColor);
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initial tools display
  updateToolsDisplay(toolsData);

  // Setup sorting dropdown
  const dropdownItems = document.querySelectorAll("#sortDropdownContainer .dropdown-item");
  const dropdownButton = document.getElementById("sortDropdown");
  if (dropdownItems.length && dropdownButton) {
    dropdownItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = item.getAttribute("data-value");
        dropdownButton.textContent = selectedText;
        sortTools(selectedText);
      });
    });
  }

  // Handle mobile view categories collapse
  if (window.innerWidth <= 576) {
    const collapseElement = document.getElementById("categoriesCollapse");
    const accordionButton = document.querySelector('[data-bs-target="#categoriesCollapse"]');
    if (collapseElement && accordionButton) {
      collapseElement.classList.remove("show");
      accordionButton.setAttribute("aria-expanded", "false");
      accordionButton.classList.add("collapsed");
    }
  }
  
  // Set Human Resources as active by default
  const categoryItems = document.querySelectorAll(".category-item");
  if (categoryItems.length > 0) {
    // Add active class to the first item (Human Resources)
    categoryItems[0].classList.add("active");
    
    // Add click event listeners to all category items
    categoryItems.forEach(item => {
      item.addEventListener("click", () => {
        // Remove active class from all items
        categoryItems.forEach(i => i.classList.remove("active"));
        // Add active class to clicked item
        item.classList.add("active");
        
        // Filter tools based on selected category
        const category = item.textContent.trim();
        const searchInput = document.querySelector('.search-input-marketplace');
        filterTools(searchInput ? searchInput.value : "", category);
      });
    });
  }
  
  // Setup search functionality
  const searchInput = document.querySelector('.search-input-marketplace');
  const searchButton = document.querySelector('.btn-go');
  
  if (searchButton && searchInput) {
    // Search button click event
    searchButton.addEventListener('click', () => {
      const activeCategory = document.querySelector('.category-item.active');
      const category = activeCategory ? activeCategory.textContent.trim() : "All";
      filterTools(searchInput.value, category);
    });
    
    // Enter key press in search input
    searchInput.addEventListener('keyup', (e) => {
      // Filter as you type (real-time filtering)
      const activeCategory = document.querySelector('.category-item.active');
      const category = activeCategory ? activeCategory.textContent.trim() : "All";
      filterTools(searchInput.value, category);
    });
  }
});