/**
 * Formats a given duration in seconds into human readable duration string
 *
 * @param s Total duration in seconds
 * @returns human readable duration string in `d` `h` `m` `s` format
 */
export const formatHumanReadableDuration = (s: number): string => {
  const totalSeconds = Math.floor(s);

  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / (60 * 60)) % 24;
  const days = Math.floor(totalSeconds / (60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
