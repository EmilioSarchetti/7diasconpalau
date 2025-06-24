document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.toggle-btn');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      if (content) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});

