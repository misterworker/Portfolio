from fastapi import FastAPI, HTTPException
import requests
from dotenv import load_dotenv
import os

load_dotenv()
GIT_TOKEN = os.getenv("git_token")

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://portfolio-phi-mocha-72.vercel.app/", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"

# GraphQL query template
QUERY_TEMPLATE = """
query ($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}
"""

def fetch_contributions(username: str):
    headers = {
        "Authorization": f"bearer {GIT_TOKEN}",
        "Content-Type": "application/json",
    }

    payload = {
        "query": QUERY_TEMPLATE,
        "variables": {"username": username},
    }

    response = requests.post(GITHUB_GRAPHQL_URL, json=payload, headers=headers)

    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Failed to fetch data from GitHub API")

    data = response.json()

    if "errors" in data:
        raise HTTPException(status_code=400, detail=data["errors"])

    return data["data"]["user"]["contributionsCollection"]["contributionCalendar"]

@app.get("/contributions/{username}")
def get_contributions(username: str):
    calendar_data = fetch_contributions(username)

    contributions = []
    for week in calendar_data["weeks"]:
        for day in week["contributionDays"]:
            contributions.append({
                "date": day["date"],
                "contributions": day["contributionCount"]
            })
            
    return {"username": username, "contributions": contributions}
