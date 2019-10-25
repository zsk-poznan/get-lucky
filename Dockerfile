FROM ubuntu:18.04

# Install python and chromium
RUN apt-get update && apt-get install -y \
    chromium-browser \
    chromium-chromedriver \
    python3 \
    python3-pip \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Setup encoding for python input() and print()
ENV PYTHONIOENCODING=utf-8

WORKDIR /home

COPY requirements.txt .

RUN python3 -m pip install -r requirements.txt

# Remove unnecessary packages
RUN apt-get purge -y \
    python3-pip

ADD . /home

ENTRYPOINT [ "./docker_entrypoint.sh" ]
