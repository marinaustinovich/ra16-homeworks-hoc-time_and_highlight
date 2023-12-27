import dayjs from 'dayjs';

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

export const customFormatFunction = (date: string) => {
    const now = dayjs();
    const diff = now.diff(date, 'minute');

    if (diff < MINUTE) {
        return `${diff} ${getPluralForm(diff, 'минута', 'минуты', 'минут')} назад`;
    } else if (diff < DAY) {
        const hours = Math.floor(diff / HOUR);
        return `${hours} ${getPluralForm(hours, 'час', 'часа', 'часов')} назад`;
    } else if (diff < MONTH) {
        const days = Math.floor(diff / DAY);
        return `${days} ${getPluralForm(days, 'день', 'дня', 'дней')} назад`;
    } else if (diff < YEAR) {
        const months = Math.floor(diff / MONTH);
        return `${months} ${getPluralForm(months, 'месяц', 'месяца', 'месяцев')} назад`;
    } else {
        const years = Math.floor(diff / YEAR);
        return `${years} ${getPluralForm(years, 'год', 'года', 'лет')} назад`;
    }
};

const  getPluralForm = (number: number, one: string, two: string, five: string): string => {
    let n = Math.abs(number) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) return five;
    if (n1 > 1 && n1 < 5) return two;
    if (n1 === 1) return one;
    return five;
  }
  