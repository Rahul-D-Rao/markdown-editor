from flask import Flask, request, jsonify, send_from_directory
import markdown
from flask_cors import CORS
import markdown2  # A module that converts HTML back to markdown

app = Flask(__name__, static_folder='../frontend/build/static')  # Serve static files from build/static
CORS(app)

@app.route('/')
def serve():
    return send_from_directory('../frontend/build', 'index.html')

# Serve static files (JS, CSS, images, etc.) from the React build folder
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('../frontend/build/static', path)

@app.route('/convert', methods=['POST'])
def convert_markdown():
    data = request.get_json()
    md_content = data.get('content')
    
    if not md_content:
        return jsonify({'error': 'No content provided'}), 400

    html_content = markdown.markdown(md_content)
    return jsonify({'html': html_content})

@app.route('/revert', methods=['POST'])
def revert_html_to_markdown():
    data = request.get_json()
    html_content = data.get('content')

    if not html_content:
        return jsonify({'error': 'No content provided'}), 400

    # Convert HTML to Markdown
    markdown_content = markdown2.markdown(html_content)
    return jsonify({'markdown': markdown_content})

if __name__ == '__main__':
    app.run(debug=True)
