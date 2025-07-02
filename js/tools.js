
// Renders star ratings including full, half, and empty stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return `${`<i class="bi bi-star-fill"></i>`.repeat(fullStars)}${halfStar ? '<i class="bi bi-star-half"></i>' : ''}${`<i class="bi bi-star"></i>`.repeat(emptyStars)}`;
}

// Renders individual tool cards
function renderToolCard(tool) {
    return `
    <div class="col-md-4 col-lg-3 mb-4">
        <div class="tool-card">
            <div class="tool-icon" style="background:${tool.background};">
                <img src="${tool.iconPath}" alt="${tool.title}" class="img-fluid" />
            </div>
            <div class="tool-title">${tool.title}</div>
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


// Sample dataset of tools
const toolsData = [
    {
        title: "Helpdesk/ Support ticketing System",
        team: "Orange Team",
        iconPath: "assets/marketplace/helpdesk.svg",
        background: "#0B98D31A",
        rating: 5,
        label: "Free",
        highlighted: true
    },
    {
        title: "Timesheet/ Utilization Tracking",
        team: "Orange Team",
        iconPath: "assets/marketplace/timesheet.svg",
        background: "#FD5E651A",
        rating: 4,
        label: "Call"
    },
    {
        title: "Login Using - Authentication",
        team: "Orange Team",
        iconPath: "assets/marketplace/login-auth.svg",
        background: "#15AAA71A",
        rating: 4.5,
        label: "Free"
    },
    {
        title: "Happiness Meter",
        team: "Orange Team",
        iconPath: "assets/marketplace/happiness-meter.svg",
        background: "#303F9F1A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Meeting Room/ Workstation",
        team: "Orange Team",
        iconPath: "assets/marketplace/workstation.svg",
        background: "#1C1F371A",
        rating: 3.5,
        label: "Free"
    },
    {
        title: "Vendor/Manpower Tracking System",
        team: "Orange Team",
        iconPath: "assets/marketplace/vendor.svg",
        background: "#FF75021A",
        rating: 4.5,
        label: "Call"
    },
    {
        title: "Forum/Knowledge stats",
        team: "Orange Team",
        iconPath: "assets/marketplace/forum.svg",
        background: "#7B1FA21A",
        rating: 5,
        label: "Call"
    },
    {
        title: "Virtual Biometric Attendance System",
        team: "Orange Team",
        iconPath: "assets/marketplace/biometrics.svg",
        background: "#0B98D31A",
        rating: 4,
        label: "Free"
    },
    {
        title: "Google Analytics",
        team: "Orange Team",
        iconPath: "assets/marketplace/google-analytics.svg",
        background: "#FD5E651A",
        rating: 4.5,
        label: "Free"
    },
    {
        title: "Skills & Endorsements",
        team: "Orange Team",
        iconPath: "assets/marketplace/skills.svg",
        background: "#15AAA71A",
        rating: 5,
        label: "Call"
    },
    {
        title: "Organization Chart",
        team: "Orange Team",
        iconPath: "assets/marketplace/org-chart.svg",
        background: "#303F9F1A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Master Login",
        team: "Orange Team",
        iconPath: "assets/marketplace/master-login.svg",
        background: "#1C1F371A",
        rating: 5,
        label: "Call"
    },
    {
        title: "Orange (Firewall)",
        team: "Orange Team",
        iconPath: "assets/marketplace/orange-firewall.svg",
        background: "#FF75021A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Login Attempts",
        team: "Orange Team",
        iconPath: "assets/marketplace/login-attempts.svg",
        background: "#7B1FA21A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Profile Fields Mapper",
        team: "Orange Team",
        iconPath: "assets/marketplace/field-mapper.svg",
        background: "#0B98D31A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Default Colleague plugin",
        team: "Orange Team",
        iconPath: "assets/marketplace/colleague-plugin.svg",
        background: "#FD5E651A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Config Protector",
        team: "Orange Team",
        iconPath: "assets/marketplace/config-protector.svg",
        background: "#15AAA71A",
        rating: 5,
        label: "Call"
    },
    {
        title: "Forever Login plugin",
        team: "Orange Team",
        iconPath: "assets/marketplace/forever-login-plugin.svg",
        background: "#303F9F1A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Profile Statistics",
        team: "Orange Team",
        iconPath: "assets/marketplace/profile-statistics.svg",
        background: "#1C1F371A",
        rating: 5,
        label: "Free"
    },
    {
        title: "Session Tracker",
        team: "Orange Team",
        iconPath: "assets/marketplace/session-tracker.svg",
        background: "#FF75021A",
        rating: 5,
        label: "Free"
    }
];

// Render tools on page load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("toolsGrid");
    container.innerHTML = toolsData.map(renderToolCard).join('');
});
