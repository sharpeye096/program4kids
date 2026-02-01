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

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("Server running. Press Ctrl+C to stop.")
    httpd.serve_forever()
