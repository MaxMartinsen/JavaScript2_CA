export function setActiveFilter(filterId) {
    const filters = ['filter-publications', 'filter-popular', 'filter-photo', 'filter-tags'];
    filters.forEach(id => {
        const filterElement = document.getElementById(id);
        filterElement.classList.remove('active');
    });
    document.getElementById(filterId).classList.add('active');
}