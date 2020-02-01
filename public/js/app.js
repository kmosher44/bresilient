const $searchForm = document.querySelector('.search-form');
const $searchInput = document.querySelector('#search');

$searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  $searchInput.value = '';
});
