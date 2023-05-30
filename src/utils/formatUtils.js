import dayjs from 'dayjs';

export  const customFormatFunction = (date) => {
    const now = dayjs();
    const diff = now.diff(date, 'minute');

    if (diff < 60) {
        return `${diff} минут назад`;
    } else if (diff < 24 * 60) {
        const hours = Math.floor(diff / 60);
        return `${hours} часов назад`;
    } else if (diff < 30 * 24 * 60) {
        const days = Math.floor(diff / (24 * 60));
        return `${days} дней назад`;
    } else if (diff < 12 * 30 * 24 * 60) {
        const months = Math.floor(diff / (30 * 24 * 60));
        return `${months} ${getPluralForm(months, 'месяц', 'месяца', 'месяцев')} назад`;
    } else {
        const years = Math.floor(diff / (12 * 30 * 24 * 60));
        return `${years} ${getPluralForm(years, 'год', 'года', 'лет')} назад`;
    }
};

export const getPluralForm = (number, one, few, many) => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
            
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
            
    if (lastDigit === 1) {
        return one;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    } else {
        return many;
    }
};