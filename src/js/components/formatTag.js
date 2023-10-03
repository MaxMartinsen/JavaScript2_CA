export function formatTags(tags) {
    return tags.map(tag => {
        tag = tag.toLowerCase().trim();
        if (!tag.startsWith('#')) {
            return '#' + tag;
        }
        return tag;
    });
};

