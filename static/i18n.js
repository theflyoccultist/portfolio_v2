i18next
    .use(i18nextHttpBackend)
    .init({
        lng: localStorage.getItem("language") || "en", // Default language
        fallbackLng: "en",
        debug: true,
        ns: ['common', 'projects'],
        defaultNS: 'common',
        backend: {
            loadPath: '../locales/{{lng}}/{{ns}}.json',
        }
    }, function(err, t) {
        if (err) {
            console.error(err);
        }
    });

// Function to update all elements with translations
function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = i18next.t(key);
    });
}

// Change language function
function changeLanguage(lng) {
    i18next.changeLanguage(lng, function(err, t) {
        if (err) {
            console.error(err);
        } else {
            updateContent();
            localStorage.setItem("language", lng); // Save user preference
        }
    });
}

// Ensure language is applied on page load
document.addEventListener("DOMContentLoaded", () => {
    i18next.on('initialized', () => {
        updateContent();
    });
});