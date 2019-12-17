import json


def parse_response(json_string):
    json_data = json.loads(json_string)
    try:
        return json_data["data"][0]["Zawartosc"][0]["Zawartosc"][0]["Nazwa"][-2:]
    except (KeyError, IndexError):
        return 0


if __name__ == "__main__":
    parse_response(input())
