// utils/pagination.js
const paginate = (array, page_size, page_number) => {
  --page_number; // pages are 0-based
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

module.exports = paginate;
