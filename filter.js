console.log('filter.js 已載入');
document.addEventListener('DOMContentLoaded', () => {
  const filterItems = document.querySelectorAll('.intro ul li[data-filter]');
  const cards = document.querySelectorAll('.workCard');

  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      const filter = item.dataset.filter;

      // 切換 active 樣式
      filterItems.forEach(li => li.classList.remove('active'));
      item.classList.add('active');

      // 顯示 / 隱藏卡片
      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else if (filter === card.dataset.category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
