// ===== Project Data Store =====
const projectData = {
    coding: [
        { title: "Personal Landing Page", description: "A clean single-page website built with pure HTML & CSS featuring smooth scroll navigation and responsive layout.", tech: "HTML • CSS" },
        { title: "Flask Blog", description: "A multi-page blog with user authentication, create/edit/delete posts and SQLite database.", tech: "Python • Flask • SQLite • Jinja2" },
        { title: "Full-Stack Task Manager", description: "Complete task management system with user accounts, real-time updates, priorities and team sharing.", tech: "Django • PostgreSQL • JavaScript • REST API" }
    ],
    editing: [
        { title: "Short Social Media Clips", description: "Quick vertical edits for Instagram/TikTok: cuts, text overlays, simple transitions and music sync.", tech: "Premiere Pro • DaVinci Resolve" },
        { title: "Documentary Style Edit", description: "Multi-clip storytelling with B-roll, interviews, subtle motion graphics and professional audio mix.", tech: "Premiere Pro • After Effects • Audition" },
        { title: "Cinematic Short Film", description: "Narrative short with advanced colour grading, visual effects, sound design and multi-layer compositing.", tech: "DaVinci Resolve • After Effects • Premiere Pro" }
    ],
    photoEditing: [
        { title: "Portrait Touch-up", description: "Basic skin cleanup, blemish removal, and color balancing for individual portraits.", tech: "Photoshop • Affinity Photo" },
        { title: "Cinematic Landscape Grading", description: "Tone mapping, sky replacement, atmosphere enhancements, and color grading for outdoor shots.", tech: "Photoshop • Lightroom • Affinity" },
        { title: "High-End Beauty Retouching", description: "Frequency separation, non-destructive dodge & burn, texture preservation, and hair cleanup.", tech: "Photoshop • Affinity Photo" }
    ],
    motionGraphics: [
        { title: "Lower Third Titles", description: "Animated lower-third graphic callouts with clean enter/exit easing for video projects.", tech: "After Effects" },
        { title: "Kinetic Typography Video", description: "Text-driven motion design timed seamlessly to voiceover tracks or background music beats.", tech: "After Effects • Premiere Pro" },
        { title: "Full Brand Motion Identity Kit", description: "Complete package including logo reveals, transition wipes, animated lower thirds, and intro/outro bumpers.", tech: "After Effects • Illustrator • Premiere Pro" }
    ]
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

// Index Page Card Clicks - Navigates in SAME TAB
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

// Form Submission Handler - Opens Gmail in NEW TAB on Desktop
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
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
            window.open(gmailUrl, '_blank');
        } else {
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        }
    });
}

// Contact Section Email Handler - Opens Gmail in NEW TAB on Desktop
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

function openModal(category) {
    if (!modal) return;
    
    const titleMap = { 
        coding: "Coding Projects", 
        editing: "Video Editing Projects", 
        photoEditing: "Photo Editing Projects", 
        motionGraphics: "Motion Graphics Projects" 
    };

    if (modalTitle) {
        modalTitle.textContent = titleMap[category] || "Projects";
    }

    const projects = projectData[category] || [];

    if (modalBody) {
        if (projects.length === 0) {
            modalBody.innerHTML = `<p class="no-projects">No projects listed for this category yet.</p>`;
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
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

// Event Delegation for Project Box Clicks (Fixes inner h3 click issues)
document.addEventListener("click", (e) => {
    const projectBox = e.target.closest(".project-box");
    if (projectBox) {
        const category = projectBox.getAttribute("data-category");
        if (category) openModal(category);
    }
});

// Event Delegation for Project Box Keyboard Access
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        const projectBox = e.target.closest(".project-box");
        if (projectBox) {
            e.preventDefault();
            const category = projectBox.getAttribute("data-category");
            if (category) openModal(category);
        }
    }
});

// Modal Close Listeners (Overlay click, 'X' button click, Escape Key)
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target.hasAttribute("data-close") || e.target.classList.contains("modal-overlay") || e.target.classList.contains("modal-close")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

// CV Download Modal Logic
const cvModal = document.getElementById("cv-modal");
const openCvBtn = document.getElementById("open-cv-modal-btn");
const cvForm = document.getElementById("cv-download-form");

function openCvModal() {
    if (!cvModal) return;
    cvModal.classList.add("active");
    cvModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeCvModal() {
    if (!cvModal) return;
    cvModal.classList.remove("active");
    cvModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

if (openCvBtn) {
    openCvBtn.addEventListener("click", openCvModal);
}

if (cvModal) {
    cvModal.querySelectorAll("[data-close-cv]").forEach(el => el.addEventListener("click", closeCvModal));
}

// Handle CV Download & Email Notification
if (cvForm) {
    cvForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const userEmail = document.getElementById("cv-user-email").value;
        const recipient = "Kabelokgasago5@gmail.com";
        const subject = encodeURIComponent(`CV Download Notification from ${userEmail}`);
        const body = encodeURIComponent(
            `Hi Kabelo,\n\nUser (${userEmail}) has just requested and downloaded your CV from your portfolio site.\n\n` +
            `Timestamp: ${new Date().toLocaleString()}\n` +
            `User Email: ${userEmail}`
        );

        // 1. Trigger the actual PDF Download in the browser
        const downloadLink = document.createElement("a");
        downloadLink.href = "Kabelo_Kgasago_CV.pdf";
        downloadLink.download = "Kabelo_Kgasago_CV.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // 2. Open Gmail compose window on Desktop or Mailto on Mobile to send notification
        const isDesktop = window.innerWidth > 768 && !('ontouchstart' in window);
        if (isDesktop) {
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
            window.open(gmailUrl, '_blank');
        } else {
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        }

        // Close Modal & Reset Form
        closeCvModal();
        cvForm.reset();
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
