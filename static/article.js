document.addEventListener("htmx:afterSwap", function(event) {
    if (!event.detail.target || event.detail.target.id !== "blog-container") return;

    console.log("HTMX swapper content, applying syntax highlighting");
    if (typeof Prism !== "undefined") {
        Prism.highlightAll();
    }
});