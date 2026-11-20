function toggleDark() {
  document.body.classList.toggle('dark');
  let btn = document.getElementById('darkBtn');
  btn.innerText = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function searchMovie() {
  let word = document.getElementById('search').value.toLowerCase();
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let title = card.querySelector('h2').innerText.toLowerCase();
    card.style.display = title.includes(word) ? 'inline-block' : 'none';
  });
}
