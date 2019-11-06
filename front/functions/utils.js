function logDate() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  console.log(`${year}-${month}-${day}`);
}

exports.logDate = logDate;
