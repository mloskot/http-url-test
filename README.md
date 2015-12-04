# http-url-test

Playground for random tests of HTTP URL requests.

This work follows up discussion on URL parsing and (de|re)composing issues in Python Requests
(see [Issue 2912](https://github.com/kennethreitz/requests/issues/2912),
but also possbile to occur in HTTP packages for other programming languages.

## Python (3.5)

Configuration: edit the URL in `config.py` or copy to new `config_local.py`
and edit there.

* http.client 
* requests
* urllib
* urllib3

## Node

Configuration: edit the URL in `config.js` or copy to new `config_local.js`
and edit there.

* GET requests tested with:
    * request
    * [shred](https://www.npmjs.com/package/shred)
    * unirest
    * urllib

* URL parsing tested with:
    * url
    * parseurl
    * url-parse
    * TODO: [node-uriparser](https://github.com/DreamLab/node-uriparser/)
      (see [issue #5](https://github.com/DreamLab/node-uriparser/issues/5))
 
## CSharp

Configuration: hard-wired URL in `Program.cs` source file.

The `csharp` folder contains project which exercises a bunch of HTTP clients for .NET:

* `WebRequest` (`HttpWebRequest`) from `System.Net`
* `WebClient` from `System.Net`
* [HttpClient](https://www.nuget.org/packages/Microsoft.Net.Http/)
* [EasyHttp](https://github.com/hhariri/EasyHttp)
* [RestSharp](https://github.com/restsharp/RestSharp)

The third-party libraries are referenced via NuGet,
so they should automatically deploy during build.

## Go

* [net/http](https://golang.org/pkg/net/http/)
* [gorequest](https://github.com/parnurzeal/gorequest)
