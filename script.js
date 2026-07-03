const personalProjects = [
  {
    title: "My-Task",
    description: "Task and project management platform.",
    image: "./assets/mytask.png",
    link: "https://project-management-system-orpin.vercel.app/",
    tech: ["React", "Express", "NodeJS", "MongoDB"],
  },
  {
    title: "Tech Blog",
    description: "Blog management and publishing system.",
    image: "./assets/tech_blog.png",
    link: "https://blog-beginner.pages.dev/",
    tech: ["React", "NodeJS", "SQL"],
  },
  {
    title: "Shopee Mart",
    description: "Developed an e-commerce platform supporting product browsing, shopping cart, order placement, and user authentication.",
    image: "./assets/shopee_mart.png",
    link: "https://shopelo.vercel.app/",
    tech: ["React", "Redux", "Shadcn UI", "NodeJS", "MongoDB"],
  },
  {
    title: "Restoran",
    description: "Restaurant landing page developed with ReactJs. Built as a frontend practice project to improve UI composition, responsive layouts, and landing page development skills.",
    image: "./assets/restoran.png",
    link: "https://restoran-delta-ashy.vercel.app/",
    tech: ["React", "Shadcn UI"],
  },
  {
    title: "Real-time chat app",
    description: "A real-time messaging application built with React and Node.js, using Socket.Io to enable instant communication between users.",
    image: "./assets/real-time.png",
    link: "https://nexus-chat-realtime.vercel.app/",
    tech: ["React", "NodeJS", "Shadcn UI", "Socket.IO", "MongoDB"],
  },
];

const companyProjects = [
  {
    title: "Leave Management System",
    description: "Employee leave request and approval workflow.",
    image: "./assets/qlns.png",
    tech: ["React", "NodeJS", "MongoDB"],
  },
];

const companyContainer = document.getElementById("companyProjects");
const personalContainer = document.getElementById("personalProjects");

personalProjects.forEach((project) => {
  personalContainer.innerHTML += `
<a href="${project.link}" target="_blank" class="project-link">
  <div class="project-card hidden">

    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
    </div>

    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="tech">
        ${project.tech.map((t) => `<span>${t}</span>`).join("")}
      </div>
    </div>

  </div>
</a>
`;
});

companyProjects.forEach((project) => {
  companyContainer.innerHTML += `
<div class="project-card hidden">

    <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
    </div>

     <div class="project-content">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tech">
        ${project.tech.map((t) => `<span>${t}</span>`).join("")}
    </div>
    </div>

</div>
`;
});

/* ACTIVE NAV */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
