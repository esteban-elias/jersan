/**
 *
 * @param text Text to truncate.
 * @param wordLimit Number of words limit.
 * @returns Truncated text with ellipsis (...) at the end.
 */
export const truncateText = (
  text: string,
  wordLimit: number
): string => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + ' ...';
  }
  return text;
};
