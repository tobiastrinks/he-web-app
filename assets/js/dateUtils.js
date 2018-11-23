export function getLocaleDateString (date) {
  const intDay = date.getDate();
  const intMonth = date.getMonth() + 1;

  const day = intDay >= 10 ? intDay : `0${intDay}`;
  const month = intMonth >= 10 ? intMonth : `0${intMonth}`;

  return `${day}.${month}.${date.getFullYear()}`;
}
