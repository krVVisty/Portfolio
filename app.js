// ========== GitHub username ==========
const username = "krVVisty"; // your GitHub username

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

// ===== Fetch all public repositories dynamically =====
const container = document.getElementById("repos-container");

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then((res) => res.json())
  .then((repos) => {
    repos.forEach((data) => {
      const card = document.createElement("div");
      card.classList.add("repo-card");

      card.innerHTML = `
        <h2>📦 ${data.full_name}</h2>
        <p>📝 ${data.description || "No description"}</p>
        <p>⭐ Stars: ${data.stargazers_count}</p>
        <p>🍴 Forks: ${data.forks_count}</p>
        <p>🐛 Open Issues: ${data.open_issues_count}</p>
        <p>🏠 <a href="${data.homepage}" target="_blank">${
        data.homepage || "No homepage"
      }</a></p>
        <p>🔗 <a href="${data.html_url}" target="_blank">View on GitHub</a></p>
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Error fetching repositories:", err));
