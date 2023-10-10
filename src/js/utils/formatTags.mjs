
/**
 * Utility functions related to tag formatting.
 * @module formatTags
 * Formats an array of tags to ensure they are lowercase, trimmed, and start with a '#'.
 * 
 * @function
 * @name formatTags
 * @param {string[]} tags - An array of tag strings to be formatted.
 * @returns {string[]} An array of formatted tag strings.
 * @example
 * 
 * Outputs: ["#test", "#ok", "#post"]
 */export function formatTags(tags) {
    return tags.map(tag => {
        tag = tag.toLowerCase().trim();
        if (!tag.startsWith('#')) {
            return '#' + tag;
        }
        return tag;
    });
};