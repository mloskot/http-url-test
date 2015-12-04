import std.net.curl, std.stdio;

void main() {
    string url = "http://localhost:8026/geognosis/8.0/Maps.json?";
    
    writeln("Request URL: ", url);
    auto client = HTTP(url);
    client.onReceive = (ubyte[] data) {
        writeln("Got data", to!(const(char)[])(data));
        return data.length;
    };
    client.perform();
}
