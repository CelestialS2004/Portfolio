const projectData = {
    coding: {
        beginner: [
            {
                title: "Personal Landing Page",
                description: "A clean single-page website built with pure HTML & CSS featuring smooth scroll navigation and responsive layout.",
                tech: "HTML • CSS"
            },
            {
                title: "Simple Calculator",
                description: "A functional calculator with basic arithmetic operations, keyboard support and a modern dark UI.",
                tech: "HTML • CSS • JavaScript"
            },
            {
                title: "To-Do List App",
                description: "Add, complete and delete tasks. Data persists in localStorage so your list survives page reloads.",
                tech: "HTML • CSS • JavaScript"
            }
        ],
        intermediate: [
            {
                title: "Weather Dashboard",
                description: "Fetches real-time weather data from an API, displays forecasts and allows city search with loading states.",
                tech: "JavaScript • Fetch API • CSS"
            },
            {
                title: "Flask Blog",
                description: "A multi-page blog with user authentication, create/edit/delete posts and SQLite database.",
                tech: "Python • Flask • SQLite • Jinja2"
            },
            {
                title: "Expense Tracker",
                description: "Track income and expenses with categories, charts and monthly summaries stored in the browser.",
                tech: "JavaScript • Chart.js • localStorage"
            }
        ],
        advanced: [
            {
                title: "Full-Stack Task Manager",
                description: "Complete task management system with user accounts, real-time updates, priorities and team sharing.",
                tech: "Django • PostgreSQL • JavaScript • REST API"
            },
            {
                title: "E-commerce Prototype",
                description: "Product catalog, shopping cart, checkout flow and admin dashboard for inventory management.",
                tech: "Django • Stripe • PostgreSQL • HTML/CSS"
            },
            {
                title: "Real-time Chat App",
                description: "WebSocket-powered chat rooms with authentication, online status and message history.",
                tech: "Python • Flask-SocketIO • JavaScript"
            }
        ]
    },
    editing: {
        beginner: [
            {
                title: "Short Social Media Clips",
                description: "Quick vertical edits for Instagram/TikTok: cuts, text overlays, simple transitions and music sync.",
                tech: "Premiere Pro • DaVinci Resolve"
            },
            {
                title: "Basic YouTube Intros",
                description: "Clean animated intros and outros with logo animation, lower-thirds and consistent branding.",
                tech: "After Effects • Premiere Pro"
            },
            {
                title: "Photo Color Grading",
                description: "Simple cinematic looks and colour correction applied to photo sequences and short videos.",
                tech: "DaVinci Resolve • Photoshop"
            }
        ],
        intermediate: [
            {
                title: "Documentary Style Edit",
                description: "Multi-clip storytelling with B-roll, interviews, subtle motion graphics and professional audio mix.",
                tech: "Premiere Pro • After Effects • Audition"
            },
            {
                title: "Product Promo Video",
                description: "Dynamic product showcase with kinetic typography, smooth camera moves and branded graphics.",
                tech: "After Effects • Premiere Pro"
            },
            {
                title: "Event Highlight Reel",
                description: "Fast-paced event recap with beat-synced cuts, title sequences and colour consistency across footage.",
                tech: "DaVinci Resolve • Premiere Pro"
            }
        ],
        advanced: [
            {
                title: "Cinematic Short Film",
                description: "Narrative short with advanced colour grading, visual effects, sound design and multi-layer compositing.",
                tech: "DaVinci Resolve • After Effects • Premiere Pro"
            },
            {
                title: "Motion Graphics Package",
                description: "Full brand motion kit: logo reveals, lower-thirds, transitions and animated icons ready for reuse.",
                tech: "After Effects • Illustrator / Affinity"
            },
            {
                title: "VFX Breakdown Reel",
                description: "Complex compositing, tracking, particle systems and seamless integration of CGI elements into live footage.",
                tech: "After Effects • DaVinci Resolve"
            }
        ]
    }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const projectBoxes = document.querySelectorAll(".project-box");

function openModal(category, level) {
    const titleMap = {
        coding: "Coding",
        editing: "Video Editing"
    };

    const levelTitle = level.charAt(0).toUpperCase() + level.slice(1);
    modalTitle.textContent = `${titleMap[category]} – ${levelTitle} Projects`;

    const projects = projectData[category]?.[level] || [];

    if (projects.length === 0) {
        modalBody.innerHTML = `<p class="no-projects">No projects listed for this level yet.</p>`;
    } else {
        modalBody.innerHTML = projects
            .map(
                (p) => `
            <article class="project-card">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <p class="tech">${p.tech}</p>
            </article>
        `
            )
            .join("");
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Focus the close button for accessibility
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
}

function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

// Click / keyboard support on project boxes
projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        const category = box.dataset.category;
        const level = box.dataset.level;
        openModal(category, level);
    });

    box.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const category = box.dataset.category;
            const level = box.dataset.level;
            openModal(category, level);
        }
    });
});

// Close handlers
modal.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
});

// Close on Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});

// Scroll to top button functionalityconst scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("active");
    } else {
        scrollTopBtn.classList.remove("active");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});