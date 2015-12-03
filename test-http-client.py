try:
    import config_local as config
except:
    import config

parts = config.url.split('/')
url_base = parts[2]
if len(parts) > 3:
    url_path = '/' + '/'.join(parts[3:])
print(url_base, url_path)
 
import http.client
conn = http.client.HTTPConnection(url_base)
conn.request('GET', url_path)
response = conn.getresponse()
print(response.read()) 