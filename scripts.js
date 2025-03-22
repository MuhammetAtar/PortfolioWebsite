document.addEventListener("DOMContentLoaded", function () {
    console.log("Max’s frontend portal ready.");
    const navItems = document.querySelectorAll("nav a");
    navItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const el = document.querySelector(this.getAttribute("href"));
            el.scrollIntoView({ behavior: "smooth" });
        });
    });
});