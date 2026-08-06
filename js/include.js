/**
 * Component Loader System
 * Fetches reusable HTML snippets and injects styles/scripts dynamically
 */
document.addEventListener("DOMContentLoaded", function () {
    // 1. Load Header Component
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        fetch("../components/header.html")
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok loading Header");
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;
                if (typeof initHeader === "function") {
                    initHeader();
                }
            })
            .catch(error => console.error("Error loading header component:", error));
    }

    // 2. Load Footer Component
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        fetch("../components/footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok loading Footer");
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
                if (typeof initFooter === "function") {
                    initFooter();
                }
            })
            .catch(error => console.error("Error loading footer component:", error));
    }
});