const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  const group = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => { card.hidden = group !== 'all' && card.dataset.group !== group; });
}));

const dialog = document.getElementById('preview-dialog');
const previewImage = document.getElementById('preview-image');
const previewTitle = document.getElementById('preview-title');
document.querySelectorAll('.view-button').forEach(button => button.addEventListener('click', () => {
  previewImage.src = button.dataset.image;
  previewImage.alt = `${button.dataset.title}的脱敏界面还原图`;
  previewTitle.textContent = button.dataset.title;
  dialog.showModal();
}));
document.getElementById('close-preview').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
