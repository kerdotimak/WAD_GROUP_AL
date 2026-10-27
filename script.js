const API_URL = "https://api.jsonbin.io/v3/b/6ae0e333ffd5d16053909488";

async function loadPosts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('HTTP error: ${response.status}');
        }
    
        const data = await response.json();
        const posts = data.record;

        console.log(posts);
        displayPosts(posts);
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

loadPosts();


function displayPosts(posts) {
    const container = document.getElementById("posts-container");

    container.innerHTML = "";

    posts.forEach(post => {
        const article = document.createElement("article");
        article.className = "post";

        const header = document.createElement("div");
        header.className = "post-header";

        const meta = document.createElement("div");
        meta.className = "post-meta";

        const author = document.createElement("span");
        author.className = "post-author-icon";
        author.textContent = `👤 ${post.author}`;

        const date = document.createElement("span");
        date.className = "post-date";
        date.textContent = new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "UTC"
        });

        meta.appendChild(author);
        meta.appendChild(date);
        header.appendChild(meta);
        article.appendChild(header);

        const body = document.createElement("p");
        body.className = "post-body";
        body.textContent = post.text;
        article.appendChild(body);

        if (post.image) {
            const image = document.createElement("img");
            image.src = post.image;
            image.alt = post.imageAlt || "";
            image.className = "post-image";
            article.appendChild(image);
        }

        const actions = document.createElement("div");
        actions.className = "post-actions";

        const likeButton = document.createElement("button");
        likeButton.className = "like-btn";
        likeButton.textContent = "Like";

        actions.appendChild(likeButton);
        article.appendChild(actions);

        container.appendChild(article);
    });
}
