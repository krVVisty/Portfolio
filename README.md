# GitHub Portfolio

This project is a **dynamic portfolio page** that showcases my GitHub profile and featured repositories. It uses the **GitHub REST API** to fetch profile information and repository statistics in real-time, and displays them in a visually appealing card layout.

---

## Features

- **GitHub Profile Information**

  - Profile name
  - Avatar
  - Bio

- **Featured Repositories**

  - Repository name with an emoji icon
  - Description
  - Star count ⭐
  - Fork count 🍴
  - Open issues count 🐛
  - Live demo link 🏠
  - GitHub repository link 🔗

- **Dynamic Updates**
  - Automatically fetches data from GitHub API
  - Updates the page without manually changing HTML

---

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- GitHub REST API

---

## How It Works

1. The page loads and executes `app.js`.
2. `app.js` fetches your GitHub profile info using the API endpoint:  
   `https://api.github.com/users/{username}`
3. Then it fetches your featured repositories using:  
   `https://api.github.com/repos/{username}/{repo}`
4. Each repository is displayed in a card with its information and relevant icons.
5. Screenshots can optionally be included, but currently replaced with emoji icons for simplicity.

---

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/krVVisty/Portfolio.git
   ```
