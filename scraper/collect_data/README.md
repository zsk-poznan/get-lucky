# Data collection

The scraper will save the past numbers into the SQLite database if the `COLLECT` environment variable is set. To start collecting the data you need to init the database.

To init the sqlite db:

```sh
cat schema.sql | sqlite3 numbers.sql

# or more fancy way
cat schema.sql | litecli numbers.sql
```

> You should backup the `numbers.db`

By default the code will look for the `numbers.db` file in this folder (`scraper/collect_data`) but you can change the path using the `DB_PATH` env variable. The path should end with file name i.e. `/some/path/numbers.db`. Remember to set the docker volume!

## Useful queries

#### Filtering numbers that are super lucky (i.e. two days in a row or more)

```sql
with ranking as (
  select lucky_number, lucky_day, 
    rank() over (partition by lucky_number order by lucky_day desc) as in_a_row
  from orders
) 
select lucky_number, lucky_day, in_a_row from ranking where in_a_row > 1;
```

#### Count of lucky number

```sql
select lucky_number, count(lucky_number) as 'Count'
  from orders
group by lucky_number
order by count(lucky_number) desc;

