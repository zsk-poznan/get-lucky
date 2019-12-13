# Data collection

To init the sqlite db:

```sh
cat schema.sql | sqlite3 numbers.sql

# or more fancy way
cat schema.sql | litecli numbers.sql
```

> You should backup the `numbers.db`
