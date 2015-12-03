try:
    import config_local as config
except:
    import config

import requests
headers = {"User-Agent": "http-url-test"}
response = requests.get(config.url, headers=headers)
print('Response URL:', response.url)
print(response.text)
