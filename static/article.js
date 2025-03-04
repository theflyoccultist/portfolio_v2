document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (!postId) {
        document.getElementById("blog-container").innerHTML = "<h1>No blog Post Available.</h1>";
        return;
    }

    fetch(`http://localhost:4567/api/blog/${postId}`)
        .then(response => response.json())
        .then(article => {
            document.getElementById("blog-title").innerText = article.title;
            document.getElementById("blog-author").innerText = "by " + article.author;
            document.getElementById("blog-thumbnail").src = article.thumbnail;
            document.getElementById("blog-thumbnail").alt = article.title;
            document.getElementById("blog-date").innerText = new Date(article.publishedAt).toDateString();

            // Convert Markdown content to HTML
            document.getElementById("blog-content").innerHTML = marked.parse(article.content);

            // Apply syntax highlighting
            Prism.highlightAll();
        })
        .catch(error => {
            console.error("Error fetching blog post:", error);
            document.getElementById("blog-container").innerHTML = "<h1>Failed to load blog post.</h1>";
        });
    });