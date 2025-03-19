// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement("button");
    btn.innerText = "Dark Mode";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px";
    btn.onclick = toggleDarkMode;
    document.body.appendChild(btn);
});
