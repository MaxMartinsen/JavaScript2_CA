/**
 * Utility functions related to date and time formatting.
 * @module formatDateAndTime
 * Formats a date string into a more readable format: "YYYY-MM-DD HH:MM".
 * 
 * @function
 * @name formatDateAndTime
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} The formatted date string.
 * @example
 * 
 * const formattedDate = formatDateAndTime("2023-09-23T12:34:56Z");
 * Outputs: "2023-09-23 12:34"
 */
export const formatDateAndTime = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};