export function formatTags(tags) {
    return tags.map(tag => {
        if (!tag.startsWith('#')) {
            return '#' + tag;
        }
        return tag;
    });
};
