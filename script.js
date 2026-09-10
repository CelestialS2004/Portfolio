// ===== Project Data Store =====
const projectData = {
    coding: {
        beginner: [
            { title: "Personal Landing Page (Placeholder)", 
                description: "A clean single-page website built with pure HTML & CSS featuring smooth scroll navigation and responsive layout.", 
                tech: "HTML • CSS" },
            { title: "Simple Calculator (Placeholder)", 
                description: "A functional calculator with basic arithmetic operations, keyboard support and a modern dark UI.", 
                tech: "HTML • CSS • JavaScript" },
            { title: "To-Do List App (Placeholder)", 
                description: "Add, complete and delete tasks. Data persists in localStorage so your list survives page reloads.", 
                tech: "HTML • CSS • JavaScript" }
        ],
        intermediate: [
            { title: "Weather Dashboard (Placeholder)", 
                description: "Fetches real-time weather data from an API, displays forecasts and allows city search with loading states.", 
                tech: "JavaScript • Fetch API • CSS" },
            { title: "Flask Blog (Placeholder)", 
                description: "A multi-page blog with user authentication, create/edit/delete posts and SQLite database.", 
                tech: "Python • Flask • SQLite • Jinja2" },
            { title: "Expense Tracker (Placeholder)", 
                description: "Track income and expenses with categories, charts and monthly summaries stored in the browser.", 
                tech: "JavaScript • Chart.js • localStorage" }
        ],
        advanced: [
            { title: "Full-Stack Task Manager (Placeholder)", 
                description: "Complete task management system with user accounts, real-time updates, priorities and team sharing.", 
                tech: "Django • PostgreSQL • JavaScript • REST API" },
            { title: "E-commerce Prototype (Placeholder)", 
                description: "Product catalog, shopping cart, checkout flow and admin dashboard for inventory management.", 
                tech: "Django • Stripe • PostgreSQL • HTML/CSS" },
            { title: "Real-time Chat App (Placeholder)", 
                description: "WebSocket-powered chat rooms with authentication, online status and message history.", 
                tech: "Python • Flask-SocketIO • JavaScript" }
        ]
    },
    editing: {
        beginner: [
            { title: "Short Social Media Clips (Placeholder)", 
                description: "Quick vertical edits for Instagram/TikTok: cuts, text overlays, simple transitions and music sync.", 
                tech: "Premiere Pro • DaVinci Resolve" },
            { title: "Basic YouTube Intros (Placeholder)", 
                description: "Clean animated intros and outros with logo animation, lower-thirds and consistent branding.", 
                tech: "After Effects • Premiere Pro" },
            { title: "Photo Color Grading (Placeholder)", 
                description: "Simple cinematic looks and colour correction applied to photo sequences and short videos.", 
                tech: "DaVinci Resolve • Photoshop" }
        ],
        intermediate: [
            { title: "Documentary Style Edit (Placeholder)", 
                description: "Multi-clip storytelling with B-roll, interviews, subtle motion graphics and professional audio mix.", 
                tech: "Premiere Pro • After Effects • Audition" },
            { title: "Product Promo Video (Placeholder)", 
                description: "Dynamic product showcase with kinetic typography, smooth camera moves and branded graphics.", 
                tech: "After Effects • Premiere Pro" },
            { title: "Event Highlight Reel (Placeholder)", 
                description: "Fast-paced event recap with beat-synced cuts, title sequences and colour consistency across footage.", 
                tech: "DaVinci Resolve • Premiere Pro" }
        ],
        advanced: [
            { title: "Cinematic Short Film (Placeholder)", 
                description: "Narrative short with advanced colour grading, visual effects, sound design and multi-layer compositing.", 
                tech: "DaVinci Resolve • After Effects • Premiere Pro" },
            { title: "Motion Graphics Package (Placeholder)", 
                description: "Full brand motion kit: logo reveals, lower-thirds, transitions and animated icons ready for reuse.", 
                tech: "After Effects • Illustrator / Affinity" },
            { title: "VFX Breakdown Reel (Placeholder)", 
                description: "Complex compositing, tracking, particle systems and seamless integration of CGI elements into live footage.", 
                tech: "After Effects • DaVinci Resolve" }
        ]
    }
};

// ===== Service Details Data Store =====
const serviceDetailsData = {
    "web-dev": {
        title: "Web Development Options",
        description: "Choose your architecture path below. Options can be ordered separately or combined into an end-to-end full-stack web application.",
        options: [
            { name: "Front-End Development", desc: "UI/UX design translation, responsive HTML/CSS/JS, custom animations, and clean client-side logic.", price: "From R1,500" },
            { name: "Back-End Development", desc: "Database architecture, API development, server-side processing in Python/Flask/Django, and user auth.", price: "From R2,500" },
            { name: "Full-Stack Application", desc: "Complete end-to-end application combining modern UI with robust backend database workflows.", price: "From R4,000" }
        ]
    },
    "video-editing": {
        title: "Video Editing Options",
        description: "Professional video editing tailored for social content creators, YouTube channels, or corporate branding.",
        options: [
            { name: "Short Social Clips", desc: "Fast-paced vertical edits (Reels/TikTok/Shorts) with captions, sound effects, and audio sync.", price: "From R450 / clip" },
            { name: "YouTube & Longform", desc: "Complete pacing cuts, B-roll insertion, audio levelling, color enhancement, and graphic lower thirds.", price: "From R1,200 / video" },
            { name: "Documentary / Event", desc: "Multi-cam syncing, cinematic color grading, sound design, and narrative storytelling polish.", price: "From R2,500 / project" }
        ]
    },
    "photo-editing": {
        title: "Photo Editing & Retouching Options",
        description: "High-quality photo post-processing for personal portraits, branding shoots, or product catalogues.",
        options: [
            { name: "Standard Retouching", desc: "Skin smoothing, object/background cleanup, and lighting adjustments.", price: "From R150 / image" },
            { name: "Cinematic Color Grade", desc: "Custom color styling, tone mapping, and mood enhancements using Photoshop & Affinity.", price: "From R250 / image" },
            { name: "Batch Restoration", desc: "Bulk retouching and consistency grading for event galleries or product catalogues.", price: "From R800 / batch" }
        ]
    },
    "motion-graphics": {
        title: "Motion Graphics Options",
        description: "Custom keyframe animation and graphic motion assets created with Adobe After Effects.",
        options: [
            { name: "Logo Reveal & Intros", desc: "Animated brand logo reveals, intro/outro screens, and custom video stings.", price: "From R1,200" },
            { name: "Kinetic Typography", desc: "Animated typography sequences, lower thirds, and callout graphics for videos.", price: "From R1,800" },
            { name: "Full Motion Package", desc: "Complete motion graphic kit including animated overlays, lower thirds, and transitions.", price: "From R3,000" }
        ]
    }
};

// Index Page Card Clicks - Navigates to Inquiry Page in the SAME tab
const serviceCards = document.querySelectorAll("[data-open-service]");
serviceCards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.getAttribute("data-open-service");
        window.location.href = `inquire.html?service=${key}`;
    });

    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const key = card.getAttribute("data-open-service");
            window.location.href = `inquire.html?service=${key}`;
        }
    });
});

// Inquire Page Logic Execution
if (window.location.pathname.includes("inquire.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get("service") || "web-dev";

    const titleEl = document.getElementById("selected-service-title");
    const detailsContainer = document.getElementById("service-options-details");
    const serviceSelect = document.getElementById("service-type");
    const webOptionsGroup = document.getElementById("web-options-group");

    function renderService(key) {
        const data = serviceDetailsData[key];
        if (!data) return;

        if (titleEl) titleEl.textContent = data.title;

        if (detailsContainer) {
            let optionsHTML = `<p class="inquiry-subtitle">${data.description}</p><div class="option-box-grid">`;
            data.options.forEach(opt => {
                optionsHTML += `
                    <div class="option-box">
                        <h4>${opt.name}</h4>
                        <p>${opt.desc}</p>
                        <div class="option-price">${opt.price}</div>
                    </div>
                `;
            });
            optionsHTML += `</div>`;
            detailsContainer.innerHTML = optionsHTML;
        }

        if (serviceSelect) {
            serviceSelect.value = key;
            if (webOptionsGroup) {
                if (key === "web-dev") {
                    webOptionsGroup.classList.remove("hidden");
                } else {
                    webOptionsGroup.classList.add("hidden");
                }
            }
        }
    }

    renderService(serviceKey);

    if (serviceSelect) {
        serviceSelect.addEventListener("change", (e) => {
            renderService(e.target.value);
        });
    }
}

// Form Submission Handler
const inquiryForm = document.getElementById("service-inquiry-form");
if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("client-name").value;
        const email = document.getElementById("client-email").value;
        const serviceSelect = document.getElementById("service-type");
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        const details = document.getElementById("project-details").value;

        let selectedServiceSummary = `Service: ${serviceText}`;
        if (serviceSelect.value === "web-dev") {
            const webSelect = document.getElementById("web-type");
            const webOptionText = webSelect.options[webSelect.selectedIndex].text;
            selectedServiceSummary += ` (${webOptionText})`;
        }

        const recipient = "Kabelokgasago5@gmail.com";
        const subject = encodeURIComponent(`Service Inquiry from ${name}`);
        const body = encodeURIComponent(
            `Hi Kabelo,\n\nI would like to inquire about your services.\n\n` +
            `Client Name: ${name}\n` +
            `Client Email: ${email}\n` +
            `Requested Service: ${selectedServiceSummary}\n\n` +
            `Project Scope & Details:\n${details}\n\n` +
            `Best regards,\n${name}`
        );

        const isDesktop = window.innerWidth > 768 && !('ontouchstart' in window);

        if (isDesktop) {
            // Opens Web Gmail in a NEW TAB on Desktop
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
            window.open(gmailUrl, '_blank');
        } else {
            // Native Mailto Link on Mobile (Opens default mail app)
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        }
    });
}

// Contact Section Email Handler - Opens Web Gmail in a NEW TAB on Desktop
const desktopEmailLink = document.getElementById("desktop-email-link");
if (desktopEmailLink) {
    desktopEmailLink.addEventListener("click", (e) => {
        const isDesktop = window.innerWidth > 768 && !('ontouchstart' in window);
        if (isDesktop) {
            e.preventDefault();
            const recipient = "Kabelokgasago5@gmail.com";
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
            window.open(gmailUrl, '_blank');
        }
    });
}

// ===== Modal Logic =====
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const projectBoxes = document.querySelectorAll(".project-box");

function openModal(category, level) {
    if (!modal) return;
    const titleMap = { coding: "Coding", editing: "Video Editing" };
    const levelTitle = level.charAt(0).toUpperCase() + level.slice(1);
    modalTitle.textContent = `${titleMap[category]} – ${levelTitle} Projects`;

    const projects = projectData[category]?.[level] || [];

    if (projects.length === 0) {
        modalBody.innerHTML = `<p class="no-projects">No projects listed for this level yet.</p>`;
    } else {
        modalBody.innerHTML = projects
            .map(p => `
            <article class="project-card">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <p class="tech">${p.tech}</p>
            </article>
        `).join("");
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

projectBoxes.forEach(box => {
    box.addEventListener("click", () => {
        openModal(box.dataset.category, box.dataset.level);
    });

    box.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(box.dataset.category, box.dataset.level);
        }
    });
});

if (modal) {
    modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
