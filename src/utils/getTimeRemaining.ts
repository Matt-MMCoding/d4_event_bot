export const getTimeRemaining = (futureTime: number) => {
  const now = new Date().getTime();
  const future = Math.floor(new Date(futureTime).getTime() * 1000.0);

  const timeleft = future - now;

  // convert milliseconds to seconds / minutes / hours etc.
  const msPerMinute = 1000 * 60;
  const msPerHour = msPerMinute * 60;

  const remainingHours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / msPerHour
  );
  const remaningMinutes = Math.floor(
    (timeleft % (1000 * 60 * 60)) / msPerMinute
  );

  return { remainingHours, remaningMinutes };
};

export default getTimeRemaining;
