[![Join Invoice-Collector on Discord](https://img.shields.io/badge/Discord-Invoice--Collector-2e8555.svg?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/dMXTdpxMqY)

<p align="center">
  <img width="100%" src="https://github.com/invoice-collector/invoice-collector/raw/master/images/preview/preview.svg" />
</p>

# Invoice Collector

Invoice Collector is a free Docker image designed to retrieve invoices and receipts from suppliers. It seamlessly connects to customer portals, APIs, and email inboxes to automatically gather invoices.

<p align="center">
  <a href="https://invoice-collector.com/demo" target="_blank">
    <img width="150px" src="https://img.shields.io/badge/Try%20the%20Demo-2e8555?style=for-the-badge" />
  </a>
</p>

## Prerequisits
- [Install docker engine](https://docs.docker.com/engine/install/)

## Installation

Use the [docker-compose.yml](https://github.com/invoice-collector/invoice-collector/blob/master/docker-compose.yml) file to build and run a container.

1. Download the `docker-compose.yml` file from Github repo.

```bash
curl https://raw.githubusercontent.com/invoice-collector/invoice-collector/refs/heads/master/docker-compose.yml >> docker-compose.yml
```

2. Edit the `docker-compose.yml` and set the values for the env variables:
    - `SECRET_MANAGER_BITWARDEN_ACCESS_TOKEN`
    - `SECRET_MANAGER_BITWARDEN_ORGANIZATION_ID`
    - `SECRET_MANAGER_BITWARDEN_PROJECT_ID`
    - `LOG_SERVER_ACCESS_TOKEN`

3. Build and run the container

```
# Run the container*
sudo docker compose up --build
```

<!-- ## Usage -->
## Contribution

There are two ways you can contribute to Invoice-Collector:
- [Open a new issue to report a bug are request a new feature](https://github.com/invoice-collector/invoice-collector/issues/new/choose)
- Create a new collector for the benefit of all

Here is how to run the docker container on your local machine.

```bash
# Clone the repo
git clone https://github.com/invoice-collector/invoice-collector.git

# Enter the folder
cd invoice-collector

# Create a .env file with your values
echo "SECRET_MANAGER_BITWARDEN_ACCESS_TOKEN=<TBD>" >> .env
echo "SECRET_MANAGER_BITWARDEN_ORGANIZATION_ID=<TBD>" >> .env
echo "SECRET_MANAGER_BITWARDEN_PROJECT_ID=<TBD>" >> .env
echo "LOG_SERVER_ACCESS_TOKEN=<TBD>" >> .env

# Run the debug container
docker-compose -f docker-compose-debug.yml up --build
```

<!-- ## FAQ -->
