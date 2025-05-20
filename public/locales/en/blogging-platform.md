<h2 style="text-align:center;">Blogging Platform</h2>

### Full Stack Web Application

### Autonomous Project

![This has been replaced](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/blogging-platform.png "Blogging Platform")

#### This blogging platform was designed to document my coding journey, share my learnings and successes, and enhance my experience in web development and cloud deployment.
        
**Features**

**User Authentication:** The platform allows users to create an account and log in securely using a token refresh system.

**Post Management (CRUD):** Users can create a new post, view it on their portfolio, edit it later, or delete it. All changes are visible instantly.

**Custom Text Editor (Markdown):** For creating and editing posts, after trying React Quill, I opted for a simple Markdown text editor, allowing more flexibility and ease of writing, while spending less time debugging.

**Responsive Design:** The platform automatically adapts to provide an optimal experience, whether on mobile or desktop.

**Rate Limiting:** Both the API and the platform are rate limited, keeping down costs.

**Robust Deployment:** This was also deployed on Google Cloud, same as the portfolio, but I also needed to learn how to deploy and configure a database. This platform being for solo use, I decided that an SQLite instance was sufficient.

**Public/Private Display:** A feature to save a draft and publish it later.

---

**Challenges Faced**

**Rewriting the entire platform in HTMX and Ruby:** Previously also a React project, I wanted this project to have a Windows 98 style layout, like browsing the internet in a sketchy 90s internet café. That had to be done, if this was a project that I wanted to be proud of.

---

**Architecture Diagram**

![Shitty Diagram](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/diagramme-architecture.webp "Blogging Platform Architecture Diagram")

A diagram illustrating the relationship between the different components of the platform.

---

**Deployment Process**

- Setting up a backend with Ruby's Sinatra framework to serve files.
- Setting up ERB templates with HTMX for server-side rendering.
- Configuring an SQLite database to make posts persistent.
- Configuring a CI/CD pipeline for quick updates through GitHub Actions and Google Cloud Services.

---

**Screenshots**

![Has been replaced](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/article.png "Post Edit Page")

--- 

**Backend Controller for Creating a New Post**

```ruby
  post '/api' do
    is_public = params[:is_public] == 'true' ? 1 : 0

    db.execute(
      "INSERT INTO posts (title, thumbnail, content, author, is_public)
      VALUES (?, ?, ?, ?, ?)",
      [params[:title], params[:thumbnail], params[:content], params[:author], is_public]
    )

    hx_redirect
  end
```

---

**Lessons Learned**

This project allowed me to understand the intricacies of deploying a full-stack application in a professional environment. It also taught me how to solve complex issues related to deployment and server configuration.

Starting with a rudimentary version deployment was a strategic approach, as it allowed me to identify malfunctions in a targeted manner while showing a functional version of the application. Using GitHub to manage backups proved valuable when I had to restore files after errors.

---

**Conclusion**

As my development skills improve, this platform will continue to evolve. It will meet my growing needs and represent a showcase of my technical skills. I have confidence in this project because it is not just a coding exercise, but an application I actively use to document my journey and enrich my portfolio.
