import { setActiveFilter } from '/src/js/utils/utils.mjs';

/**
 * Utility functions related to setting up filter event listeners.
 * @module setupFilterListeners
 * 
 * Sets up event listeners for filter elements in the UI. When a filter is clicked, 
 * it triggers the provided display function and sets the clicked filter as active.
 * 
 * @function
 * @name setupFilterListeners
 * @param {Function} displayPostsFunction - The function to be called when a filter is clicked. 
 * This function is responsible for displaying posts based on the selected filter.
 * @example
 * 
 * // Assuming there are filter elements with IDs 'filter-publications', 'filter-popular', etc.
 * // and a function named 'displayPosts' that takes a filter type as an argument.
 * setupFilterListeners(displayPosts);  
 */
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
};