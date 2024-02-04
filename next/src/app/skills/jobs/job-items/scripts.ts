import { differenceInMonths, format } from 'date-fns';

export const formatDuration = (startDate: Date, endDate?: Date) => {
  const monthsDifference = differenceInMonths(endDate ?? new Date(), startDate);
  const years = Math.floor(monthsDifference / 12);
  const months = monthsDifference % 12;

  const durationParts = [];

  if (years > 0) {
    durationParts.push(`${years} years`);
  }
  if (months > 0) {
    durationParts.push(`${months} months`);
  }

  return durationParts.join(', ');
};

export const convertToString = (startDate: Date, endDate?: Date) => {
  return `${format(startDate, 'MMM yyyy')} - ${endDate ? format(endDate, 'MMM yyyy') : 'present'}`;
};