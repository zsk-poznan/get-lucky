import json

json_string = input()

json_data = json.loads(json_string)

print(json_data["data"][0]["Zawartosc"][0]["Zawartosc"][0]["Nazwa"][-2:])