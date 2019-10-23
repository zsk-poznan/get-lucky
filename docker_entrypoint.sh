#!/bin/sh

lucky=$(python3 get_lucky.py | sh | python3 parse_response.py)

echo $lucky