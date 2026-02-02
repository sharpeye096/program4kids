# -*- coding: utf-8 -*-
import http.server
import socketserver
import os

print("Starting server...")

PORT = 8000
DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')

os.chdir(DIR)
print(f"Serving from: {DIR}")
print(f"Open http://localhost:{PORT}")

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def end_headers(self):
        # Force charset for text files
        path = self.translate_path(self.path)
        if path.endswith('.js') or path.endswith('.css') or path.endswith('.html'):
            self.send_header('Content-Type', self.guess_type(path) + '; charset=utf-8')
        super().end_headers()

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("Server running. Press Ctrl+C to stop.")
    httpd.serve_forever()
