<h2 style="text-align:center;">Blogging Platform</h2>

### Full Stack Web Application

### Autonomous Project

![This will be replaced soon](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/blogging-platform.webp "Blogging Platform")

#### This blogging platform was designed to document my coding journey, share my learnings and successes, and enhance my experience in web development and deployment.,
        
**Features**

**User Authentication:** The platform allows users to create an account and log in securely using a token refresh system.

**Post Management (CRUD):** Users can create a new post, view it on their portfolio, edit it later, or delete it. All changes are visible instantly.

**Custom Text Editor (Markdown):** For creating and editing posts, after trying React Quill, I opted for a simple Markdown text editor, allowing more flexibility and ease of writing, while spending less time debugging.

**Responsive Design:** The platform automatically adapts to provide an optimal experience, whether on mobile or desktop.

**Robust Deployment:** This was also deployed on Google Cloud, same as the portfolio, but I also needed to learn how to deploy and configure a PostgreSQL instance.

**Public/Private Display:** A feature to save a draft and publish it later.

---

**Challenges Faced**

**Rewriting the entire platform in HTMX and Ruby:** Previously also a React project, I wanted this project to have a Windows 98 style layout, like browsing the internet in a sketchy 90s internet café. That had to be done, if this was a project that I wanted to be proud of.

**CORS Policies:** I implemented a strict CORS policy in the backend to secure API calls from the frontend. I also configured exceptions to only allow GET requests from my portfolio.,

---

**Architecture Diagram**

![Shitty Diagram](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/diagramme-architecture.webp "Blogging Platform Architecture Diagram")

A diagram illustrating the relationship between the different components of the platform.

---

**Deployment Process**

- Creating a frontend project with HTMX and CSS.
- Setting up a backend with Ruby's Sinatra framework to serve files.
- Setting up ERB templates for the dynamic server-side rendering.
- Configuring a PostgreSQL to make posts persistent.
- Configuring a CI/CD pipeline for quick updates through GitHub Actions and Google Cloud Services.

---

**Screenshots**

![Replace this image soon](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/screenshot1.webp "Platform HTML page")

![Also replace this image soon](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/screenshot2.webp "Post Edit Page")

---

**Code Examples**

Text Editor Customization

Backend Controller for Creating a New Post

---

**Lessons Learned**

This project allowed me to understand the intricacies of deploying a full-stack application in a professional environment. It also taught me how to solve complex issues related to deployment and server configuration.

Starting with a rudimentary version deployment was a strategic approach, as it allowed me to identify malfunctions in a targeted manner while showing a functional version of the application. Using GitHub to manage backups proved valuable when I had to restore files after errors.

---

**Conclusion**

As my development skills improve, this platform will continue to evolve. It will meet my growing needs and represent a showcase of my technical skills. I have confidence in this project because it is not just a coding exercise, but an application I actively use to document my journey and enrich my portfolio.
