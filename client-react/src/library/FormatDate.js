export default (date) => {
    const dateObj = new Date(date);
    return `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
};