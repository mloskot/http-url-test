import std.net.curl, std.stdio;

void main() {
    string url = "http://www.bing.com/search?";
    
    writeln("Request URL: ", url);
    auto client = HTTP(url);
    client.onReceive = (ubyte[] data) {
        writeln("Got data", to!(const(char)[])(data));
        return data.length;
    };
    client.perform();
}
