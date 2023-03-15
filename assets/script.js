const form = document.querySelector('form');
form.addEventListener('submit', handleSearch);

const searchBar = document.querySelector('#searchbar');
const blogPosts = document.querySelectorAll('.news-snippet');

function handleSearch(event) {
  event.preventDefault()
  const searchTerm = document.querySelector('#searchbar').value;

  blogPosts.forEach(post => {
    const title = post.querySelector('.news-title').textContent.toLowerCase();
    const content = post.querySelector('.post-content').textContent.toLowerCase();
    const matches = title.includes(searchTerm) || content.includes(searchTerm);
    if (matches) {
      post.classList.remove('hidden');
    } else {
      post.classList.add('hidden');
      event.stopImmediatePropagation();
    }
  });
  return false;
}