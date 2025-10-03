/**
 * Calculates the difference between NOW and a given Timestamp,
 * and returns the value as formatted string
 *
 * @param {number} startTimestamps
 * @returns
 */
export const calculateElapsedTime = (startTimestamp: number): string => {
  const now = Date.now();
  const diffMs = +(now - startTimestamp);

  const seconds = Math.floor(diffMs / 1000) % 60;
  const minutes = Math.floor(diffMs / 1000 / 60) % 60;
  const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const elapsedtime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return elapsedtime;
};
