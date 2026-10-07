(() => {
  const preferenceKey = "theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const savedPreference = () => localStorage.getItem(preferenceKey) || "system";
  const activeTheme = () => {
    const preference = savedPreference();
    return preference === "system" ? (systemTheme.matches ? "dark" : "light") : preference;
  };

  const applyTheme = () => {
    const theme = activeTheme();
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themeSetting = savedPreference();

    const button = document.querySelector("#theme-toggle");
    if (!button) return;

    const nextTheme = theme === "light" ? "dark" : "light";
    button.setAttribute("aria-label", `Use ${nextTheme} theme`);
    button.setAttribute("title", `Use ${nextTheme} theme`);
    button.querySelector("[data-theme-icon]").textContent = theme === "light" ? "☾" : "☀";
  };

  applyTheme();
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    document.querySelector("#theme-toggle")?.addEventListener("click", () => {
      localStorage.setItem(preferenceKey, activeTheme() === "light" ? "dark" : "light");
      applyTheme();
    });
  });
  systemTheme.addEventListener("change", applyTheme);
})();
