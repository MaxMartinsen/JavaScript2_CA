/**
 * Utility functions related to setting the active filter on a UI.
 * @module setActiveFilter
 * Sets the active filter in the UI by adding an 'active' class to the specified filter 
 * and removing it from all others.
 * @function
 * @name setActiveFilter
 * @param {string} filterId - The ID of the filter element to be set as active.
 * @example
 * 
 * // Assuming there are filter elements with IDs 'filter-publications', 'filter-popular', etc.
 * setActiveFilter('filter-popular');  // This will set the 'filter-popular' as the active filter.
 */
export function setActiveFilter(filterId) {
    const filters = ['filter-publications', 'filter-popular', 'filter-photo', 'filter-tags'];
    filters.forEach(id => {
        const filterElement = document.getElementById(id);
        filterElement.classList.remove('active');
    });
    document.getElementById(filterId).classList.add('active');
}