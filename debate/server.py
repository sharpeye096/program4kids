import json
import urllib.request
import urllib.error
from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

class ProxyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/proxy':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data)
                if 'target_url' not in data:
                    raise ValueError("target_url is required in the JSON body")
                
                target_url = data.pop('target_url')
                
                req = urllib.request.Request(
                    target_url,
                    data=json.dumps(data).encode('utf-8'),
                    headers={'Content-Type': 'application/json'},
                    method='POST'
                )
                
                with urllib.request.urlopen(req) as response:
                    res_body = response.read()
                    self.send_response(response.getcode())
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(res_body)
                    
            except urllib.error.HTTPError as e:
                self.send_response(e.code)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(e.read())
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Not Found")

if __name__ == '__main__':
    port = 8000
    server_address = ('', port)
    # Ensure serving from the directory of the script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    httpd = HTTPServer(server_address, ProxyHTTPRequestHandler)
    print(f"Starting API proxy and static server on http://localhost:{port}")
    print(f"Open http://localhost:{port} in your browser to start the app.")
    httpd.serve_forever()
