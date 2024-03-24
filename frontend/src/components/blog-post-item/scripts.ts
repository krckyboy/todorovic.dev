import { format, formatDistanceToNow } from 'date-fns';

export const convertToHumanReadableDate = (date: string) => {
  const dateObject = new Date(date);
  const formattedDate = format(dateObject, 'MMMM dd, yyyy');
  const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true });

  return `${formattedDate} (${timeAgo})`;
};
