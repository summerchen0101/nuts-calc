// 取得 URL 中的參數
const urlParams = new URLSearchParams(window.location.search);
const authParam = urlParams.get('auth');

localStorage.setItem('auth', authParam);

const authValue = localStorage.getItem('auth');

if (authValue === '1') {
  document.getElementById('show-cost-label').style.display = 'block';
  document.getElementById('back-btn').style.display = 'block';
} else {
  document.getElementById('show-cost-label')?.style.display = 'none';
  document.getElementById('back-btn').style.display = 'none';
}
