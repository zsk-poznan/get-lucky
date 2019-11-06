function logDate() {
  const now = Date.now();

  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getYear();

  console.log(`${year}-${month}-${day}`);
}

exports.logDate = logDate;
