let count = 0;
function increment() {
  count++;
  document.getElementById('counter').textContent = count;
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Заявка отправлена!');
      form.reset();
    });
  }
});