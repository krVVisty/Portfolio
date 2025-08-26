// ========== GitHub username ==========
const username = "krVVisty";

// ===== Fetch profile info =====
fetch(`https://api.github.com/users/${username}`)
  .then((res) => res.json())
  .then((profile) => {
    document.getElementById("profile-name").textContent =
      profile.name || profile.login;
    document.getElementById("profile-avatar").src = profile.avatar_url;
    document.getElementById("profile-bio").textContent = profile.bio || "";
  })
  .catch((err) => console.error("Error fetching profile:", err));

// ===== Featured repositories with emoticons instead of screenshots =====
const featuredRepos = [
  {
    repo: "krVVisty/CyberShield-website",
    live: "https://krVVisty.github.io/CyberShield-website/",
    icon: "🛡️",
  },
  {
    repo: "krVVisty/Image-gallery",
    live: "https://krVVisty.github.io/Image-gallery/",
    icon: "🎨",
  },
  {
    repo: "krVVisty/Shopping-list",
    live: "https://krVVisty.github.io/Shopping-list/",
    icon: "🛒",
  },
];

const container = document.getElementById("repos-container");

// Fetch GitHub data for each featured repo and display card
featuredRepos.forEach(async (item) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${item.repo}`);
    if (!res.ok) throw new Error(`Failed to fetch ${item.repo}`);
    const data = await res.json();

    // Create repo card
    const card = document.createElement("div");
    card.classList.add("repo-card");

    card.innerHTML = `
      <h2>${item.icon} ${data.full_name}</h2>
      <p>📝 ${data.description || "No description"}</p>
      <p>⭐ Stars: ${data.stargazers_count}</p>
      <p>🍴 Forks: ${data.forks_count}</p>
      <p>🐛 Open Issues: ${data.open_issues_count}</p>
      <p>🏠 <a href="${item.live}" target="_blank">Live Demo</a></p>
      <p>🔗 <a href="${data.html_url}" target="_blank">View on GitHub</a></p>
    `;

    container.appendChild(card);
  } catch (err) {
    console.error(err);
  }
});
