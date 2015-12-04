import std.net.curl, std.stdio;

void main() {
    string url = "http://www.bing.com/search?";
    auto content = get(url);
    
    writeln("Request URL: ", url);
    writeln(content);
}
