import { setActiveFilter } from './setActiveFilter.js';

export function setupFilterListeners(displayPostsFunction) {
    document.getElementById('filter-publications').addEventListener('click', (e) => {
        e.preventDefault();
        displayPostsFunction();
        setActiveFilter('filter-publications');
    });
    document.getElementById('filter-photo').addEventListener('click', (e) => {
        e.preventDefault();
        displayPostsFunction('photo');
        setActiveFilter('filter-photo');
    });
    document.getElementById('filter-popular').addEventListener('click', (e) => {
        e.preventDefault();
        displayPostsFunction('popular');
        setActiveFilter('filter-popular');
    });
    document.getElementById('filter-tags').addEventListener('click', (e) => {
        e.preventDefault();
        displayPostsFunction('tags');
        setActiveFilter('filter-tags');
    });
}
