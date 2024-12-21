# CI/CD Express

A simple Express project with HTML to demonstrate a basic CI/CD setup using GitHub Actions, Docker, and Render.

## Features

- **Express.js**: Backend framework to serve HTML.
- **HTML**: Basic static HTML page served through Express.
- **CI/CD**: Automated build and deployment pipeline using GitHub Actions.
- **Docker**: Containerized application for consistent deployment.

---

## Prerequisites

1. **Render Account**:
   - Create a free account at [Render](https://render.com/).

2. **Render API Key**:
   - Retrieve the **Reader API Key** from your Render account.

3. **GitHub Secret**:
   - Add your Render API Key as a GitHub secret:
     - Go to **Settings > Secrets and Variables > Actions** in your repository.
     - Add a new secret:
       - **Name**: `RENDER_API_KEY`
       - **Value**: Your Render API Key.

---

## Dependencies

The project uses the following dependencies:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Express.js](https://expressjs.com/)
- [Docker](https://www.docker.com/)

---

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ci-cd-express.git
cd ci-cd-express
