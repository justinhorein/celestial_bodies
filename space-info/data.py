import requests

url = "https://api.le-systeme-solaire.net/rest/bodies/"

data = requests.get(url).json()

# print(data)
