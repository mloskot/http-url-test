import urllib.request
body = urllib.request.urlopen(url).read()
print(body)