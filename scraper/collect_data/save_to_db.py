import sqlite3
from datetime import datetime

DB_NAME = "collect_data/numbers.db"


class Connection(object):
    """Class for using the context manager with db connection."""

    def __init__(self, db_file_name):
        self.conn = sqlite3.connect(db_file_name)

    def __enter__(self):
        return self.conn

    def __exit__(self, type, value, traceback):
        self.conn.close()


def format_date(date: datetime) -> str:
    """Format the date for db."""
    return date.strftime("%Y-%m-%d %T")


def save_to_db(lucky_number: int, lucky_timestamp: datetime) -> None:
    """Puts lucky number into the database."""
    with Connection(DB_NAME) as conn:
        c = conn.cursor()
        date = format_date(lucky_timestamp)
        c.execute("INSERT INTO lucky_numbers (lucky_number, lucky_day) VALUES (?,?)",
                  (lucky_number, date))
        conn.commit()
