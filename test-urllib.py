import config
import urllib.request
body = urllib.request.urlopen(config.url).read()
print(body)