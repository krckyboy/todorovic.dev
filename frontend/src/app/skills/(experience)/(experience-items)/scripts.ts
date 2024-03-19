import { format } from 'date-fns';

const differenceInMonths = (startDate: Date, endDate: Date) => {
  const startYear = startDate.getUTCFullYear();
  const startMonth = startDate.getUTCMonth();
  const endYear = endDate.getUTCFullYear();
  const endMonth = endDate.getUTCMonth();

  return (endYear - startYear) * 12 + (endMonth - startMonth);
};

export const formatDuration = (startDate: Date, endDate?: Date) => {
  const utcEndDate = endDate ? new Date(endDate) : new Date();
  const monthsDifference = differenceInMonths(startDate, utcEndDate);
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