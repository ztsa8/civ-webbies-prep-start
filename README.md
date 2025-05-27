# User Profile Rendering Project

This project demonstrates a progressive enhancement of a JavaScript-based user profile viewer using [Bulma CSS](https://bulma.io) and modular JavaScript. The app evolves from a static HTML rendering of one user profile to a responsive, card-based dashboard of multiple users deployed via GitHub Pages.

---

## Project Stages

| Version | Description |
|---------|-------------|
| v1      | Static rendering of one user using hardcoded template literals |
| v2      | Modular layout using Bulma sections and card elements |
| v3      | Introduces helper functions (`formatCurrency`, `formatDate`) |
| v4      | Renders multiple users via `forEach()` with full detail |
| v5      | Uses ES modules to import `users.js` dataset |
| v6      | Grid layout dashboard for all users with card summaries |

---

## File Structure

```plaintext
/
├── .github/workflows/deploy.yml    # GitHub Pages deployment workflow
├── index.html                      # Main HTML page (from v1)
├── user_object_v1.js               # First version of rendering script
├── users.js                        # Modular user dataset (v5+)
├── README.md                       # This file
````

---

## GitHub Pages Deployment

The app is deployed automatically on push to the `main` branch via GitHub Actions.

To deploy:

1. Push to the `main` branch.
2. GitHub Actions runs the `deploy.yml` workflow.
3. GitHub Pages is configured to deploy from the GitHub Actions artifact.

Live site:

```
https://<your-username>.github.io/<repo-name>/
```

---

## Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Add and commit changes

```bash
git add .
git commit -m "Your commit message"
```

### 3. Push to GitHub

```bash
git push origin main
```

### 4. Force a GitHub Actions redeploy (if needed)

```bash
git commit --allow-empty -m "Trigger redeploy"
git push
```

---

## Notes

* GitHub Pages only works from public repositories **or private repos with Pro plan or higher**.
* `index.html` must be at the root for GitHub Pages to work by default.

---

## Credits

* Styling: [Bulma](https://bulma.io)
* Hosting: [GitHub Pages](https://pages.github.com)
