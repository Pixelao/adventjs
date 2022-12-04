function countHours(year, holidays) {
  return (
    holidays
      .map((holiday) => new Date(`${year}/${holiday}`).getDay())
      .filter((day) => day !== 0 && day !== 6).length * 2
  );
}
