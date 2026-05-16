const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function formatMonth(value: string): string {
  const [year, month] = value.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}
