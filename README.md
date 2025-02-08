# Markdown Editor with Live Preview

This project is a **Markdown Editor** built with **React** and **Flask** for live preview of the content you write in Markdown. The editor provides real-time HTML rendering of the Markdown text. Additionally, it supports switching between Dark Mode and Light Mode, as well as providing a non-editable preview area with copy-only functionality.

## Features

- **Real-time Markdown Preview**: Write in the Markdown editor and see the live HTML rendering.
- **Light and Dark Mode**: Toggle between dark and light themes to suit your preference.
- **Non-editable Preview**: The preview section is for display only, and users can only **copy** the content from there.
- **User Feedback**: Clicking on the preview section alerts users that it is a preview-only area.

## Project Structure

The project follows the structure below:

```
/markdown-editor
  ├── /backend
  │    ├── app.py                # Flask backend code
  │    ├── requirements.txt      # Python dependencies
  │
  ├── /frontend
  │    ├── /public
  │    │    └── index.html       # React HTML template
  │    ├── /src
  │    │    ├── index.js         # React main component
  │    │    └── styles.css       # Custom styles for React app
  │    ├── package.json          # React dependencies and configuration
  └── README.md                  # Project documentation
```

### `/frontend`

This is the React part of the project where the user interface is built.

- `public/index.html`: Contains the root HTML structure for the React application.
- `src/index.js`: This file contains the main React logic for rendering the Markdown editor, HTML preview, and toggling Dark and Light modes.
- `src/styles.css`: Contains the custom styles that define the look and feel of the application.

### `/backend`

This directory contains the Flask server that can be used for any backend functionality (if needed in the future).

- `app.py`: A placeholder Python file for the Flask backend code. This is where you could set up an API if needed.
- `requirements.txt`: This file lists the Python dependencies for the backend.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js** (for React frontend)
- **Python** (for Flask backend)

### Frontend Setup

1. Navigate to the `/frontend` directory.
2. Install the dependencies:

```bash
cd frontend
npm install
```

3. Run the React application:

```bash
npm start
```

The app will be running at `http://localhost:3000`.

### Backend Setup

1. Navigate to the `/backend` directory.
2. Install the Python dependencies:

```bash
cd backend
pip install -r requirements.txt
```

3. Run the Flask app:

```bash
python app.py
```

The Flask server will run at `http://localhost:5000`.

### Running the Application

Once both the frontend and backend are running, navigate to `http://localhost:3000` in your browser to use the Markdown editor with live preview.

## Functionality Overview

1. **Markdown Editor**:
   - On the left side, you can write Markdown text in a `textarea`. As you type, the live HTML preview will automatically be updated.
2. **Live Preview**:

   - On the right side, the rendered HTML is shown in a non-editable preview area.
   - The content in the preview area is selectable, so you can copy it, but **cannot modify** it.
   - If you try to type in the preview section, a user-friendly alert will be displayed indicating that it is a preview-only area.

3. **Light/Dark Mode Toggle**:
   - You can toggle between Dark Mode and Light Mode using the button at the top. This will affect the entire page, including the editor and preview areas.

## Technologies Used

- **Frontend**:
  - React for building the UI.
  - Marked.js for parsing and converting Markdown text to HTML.
- **Backend**:
  - Flask (Python) for the backend logic (optional for this app, but can be extended to support API features).
