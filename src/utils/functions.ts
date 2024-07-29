
export function transformReleaseDate(releaseDate: string) {
  const date = releaseDate.split('-')
  const day = Number(date[2])
  let month = Number(date[1])
  const year = Number(date[0])
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  month = Number(months[month - 1]);

  const currentYear = new Date().getFullYear();

  if (currentYear != year) {
    return `${day} ${month}, ${year}`;
  } else {
    return `${day} ${month}`;
  }
}