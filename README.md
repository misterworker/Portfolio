# Portfolio App
This project is hosted on Vercel with NextJS.

## Features

1. Github Commit Calendar
2. AI helper (Not yet implemented)
3. Night Day theme switcher
4. Insights into my projects!

## Run on Development Server

```bash
# Copy the repository to your local system
git clone https://github.com/misterworker/Portfolio

# Install node packages
npm install

# Navigate to the backend scripts folder
cd scripts

# Paste your GitHub access token in a .env file
# Get your personal GitHub access token here:
# https://github.com/settings/tokens

# Install Python dependencies
pip install -r requirements.txt

# Start the FastAPI application
uvicorn contributions_git:app --port 8001

# Open a new terminal or navigate back to the project root
cd ..

# Start the Next.js frontend
npm run dev

# Open the application in your browser
# Visit: http://localhost:3000
```
