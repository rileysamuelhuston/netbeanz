const links = document.querySelectorAll('.bouncing-link');

links.forEach(link => {
  const text = link.textContent;
  link.innerHTML = '';

  text.split('').forEach(letter => {
    const span = document.createElement('span');
    if (letter === ' ') {
      span.innerHTML = '&nbsp;'; // Use non-breaking space for spaces
    } else {
      span.textContent = letter;
    }
    link.appendChild(span);
  });
});