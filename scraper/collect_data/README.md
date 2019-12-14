# Data collection

The scraper will save the past numbers into the SQLite database if the `COLLECT` environment variable is set. To start collecting the data you need to init the database.

To init the sqlite db:

```sh
cat schema.sql | sqlite3 numbers.sql

# or more fancy way
cat schema.sql | litecli numbers.sql
```

> You should backup the `numbers.db`

By default the code will look for the `numbers.db` file in this folder (`scraper/collect_data`) but you can change the path using the `DB_PATH` env variable. Remember to set the docker volume!
