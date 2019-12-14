# get-lucky scraper

In this folder you can find the code for scrapping the lucky number from Vulcan.

## Usage

The scraper is embedded into a docker container.

### Environment variables

| Variable name          | Content                                                                         |
| ---------------------- | ------------------------------------------------------------------------------- |
| VULCAN_LOGIN           | Login for vulcan                                                                |
| VULCAN_PASSWORD        | Password for vulcan                                                             |
| FAUNADB_KEY (optional) | Access key to fauna database. If not set the lucky number will not be uploaded. |
| LUCKY_REF (optional)   | Fauna REF for the object storing the lucky number.                              |
| COLLECT (optional)     | If set the code will save all numbers into the SQLite database.                 |
| DB_PATH (optional)     | Sets the path were the `numbers.db` file should be stored.                      |

Read more about `COLLECT` [here](collect_data)
