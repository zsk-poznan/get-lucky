import os
import base64

import requests

lucky = int(input())

URL = "https://graphql.fauna.com/graphql"
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

r = requests.post(URL, headers=headers, json={"query": query})