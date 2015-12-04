import std.net.curl, std.stdio;

void main() {
    string url = "http://localhost:8026/geognosis/8.0/Maps.json?";
    auto content = get(url);
    
    writeln("Request URL: ", url);
    writeln(content);
}
