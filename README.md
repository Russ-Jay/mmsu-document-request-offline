# MMSU CTE Document Request System

A fully offline document request system for the College of Teacher Education.

## Features
- Student portal with student lookup and first-time registration
- Offline localStorage data persistence
- Request submission and history tracking
- Admin login and dashboard
- Request filtering, updating, and deletion
- No external CDN or network dependency

## Run locally in VS Code
1. Open this folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html` and choose "Open with Live Server".
4. Or serve the folder with a simple static HTTP server.

Example:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Default admin account
- Email: `admin@mmsu.edu.ph`
- Password: `Admin123!`

## Notes
This project is designed to work without internet access. It uses browser localStorage for all data.
