function getTimeFormatted(date) {
  const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const m = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

  return `${m} ${d}, ${y}`;
}

export { getTimeFormatted };
