const routes = {
  "/": "/pages/skills.html", // Relative to the document root
  "/skills": "/pages/about.html", // Ensure this path exists
  "/contact": "/pages/contact.html", // Ensure this path exists
};

// Handle navigation
function navigateTo(url) {
  history.pushState(null, null, url);
  render();
}

// Render the appropriate content based on the current route
async function render() {
  const app = document.getElementById("app");
  const path = window.location.pathname;
  const route = routes[path];

  if (route) {
    try {
      const response = await fetch(route);
      if (!response.ok)
        throw new Error(`Failed to load page: ${response.statusText}`);
      const content = await response.text();
      app.innerHTML = content;
    } catch (error) {
      console.error(error);
      app.innerHTML = "<h1>Error</h1><p>Unable to load page content.</p>";
    }
  } else {
    app.innerHTML = "<h1>404 Not Found</h1><p>Page does not exist.</p>";
  }
}

// Add event listeners to intercept link clicks
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  render();
});

// Handle browser back/forward button navigation
window.addEventListener("popstate", render);
