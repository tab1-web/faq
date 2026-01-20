# FAQ & Documentation

Welcome to this repository! This site is built using [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and serves as a central hub for our guides and frequently asked questions.

## 🚀 How to Run Locally

If you want to preview the documentation on your own machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tab1-web/faq.git
   
   cd faq
2. **Install dependencies:**
    (It is recommended to use a virtual environment)
    ```bash
    pip install -r requirements.txt
    ```

3. **Start the dev server:**
    ```bash
    mkdocs serve
    ```


4. **View the site:** Open `http://127.0.0.1:8000/` in your browser.

## 💬 Comments

We use **Giscus** for our comment system. Comments are powered by GitHub Discussions. To participate, simply log in with your GitHub account at the bottom of any page.

## 📄 License

This project is licensed under the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.html) file included in this repository.

# Contributing to the FAQ

Thank you for your interest in contributing! We welcome updates, corrections, and new guides.

## How to Contribute

### 1. Making Small Changes
For simple typos or minor text updates, you can:
* Click the **pencil icon** (Edit this page) on any page of the live website.
* GitHub will automatically create a fork and a Pull Request for you.

### 2. Adding New Pages
If you are adding a new guide or a large section:
1. **Fork** the repository.
2. Create a new branch for your feature.
3. Place your new Markdown file in the appropriate folder under `docs/`.
4. Update the `nav` section in `mkdocs.yml` so your page appears in the sidebar.
5. Submit a **Pull Request** back to the `main` branch.

## Style Guidelines
* **Images:** Upload all images to [PostImages](https://postimages.org/) and share the link with GitHub Markdown
* **Formatting:** Use standard Markdown. Avoid using custom HTML.

## Review Process

Once you submit a Pull Request, a maintainer will review your changes. We may ask for small adjustments before merging.

### Where to put these files?

Place markdown files in the **docs directory** of the project.
