import os
import base64

import requests

URL = "https://graphql.fauna.com/graphql"


def prepare_request(lucky):
    """
    This function returns headers for the request and graphql query based on lucky number.
    """
    FAUNADB_KEY = os.environ['FAUNADB_KEY'] + ":"
    LUCKY_REF = os.environ['LUCKY_REF']

    authorization_bytes = FAUNADB_KEY.encode('utf-8')
    authorization_key = base64.b64encode(authorization_bytes).decode('utf-8')

    headers = {
        'Authorization': f'Basic {authorization_key}'
    }

    query = f"""
    mutation {{
        updateLuckyNumber(
            id: {LUCKY_REF}
            data: {{
                luckyNumber: {lucky}
            }}) {{
                luckyNumber
        }}
    }}
    """

    return headers, query


def update_lucky(lucky):
    headers, query = prepare_request(lucky)
    r = requests.post(URL, headers=headers, json={"query": query})


if __name__ == '__main__':
    update_lucky(input())
