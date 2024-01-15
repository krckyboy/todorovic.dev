import { format, formatDistanceToNow } from 'date-fns';

export const convertToHumanReadableDate = (date: string) => {
  const dateObject = new Date(date);
  const formattedDate = format(dateObject, 'MMMM dd, yyyy');
  const timeAgo = formatDistanceToNow(formattedDate, { addSuffix: true });

  return `${formattedDate} (${timeAgo})`;
};
