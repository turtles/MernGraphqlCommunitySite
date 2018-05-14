/**
 * Get the date from a date string
 * @param {string} date 
 * @param {string} locale 
 */
const date = (date, locale = 'en-US') => {
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString(locale)}`;
};

/**
 * Get the date and time from a date string
 * @param {string} date 
 * @param {string} locale 
 */
const dateAndTime = (date, locale = 'en-US') => {
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString(locale)} ${dateObj.toLocaleTimeString(locale)}`;
}

export default {date, dateAndTime};