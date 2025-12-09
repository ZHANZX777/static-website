// 1. 登录跳转功能
const loginForm = document.getElementById('loginForm');
const loginBox = document.getElementById('loginBox');
const siteContent = document.getElementById('siteContent');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  if (username) {
    loginBox.style.display = 'none';
    siteContent.style.display = 'block';
    // 把用户名显示在欢迎栏
    document.querySelector('.welcome-bar h1').textContent = `欢迎 ${username} 来到我的个人网站`;
  } else {
    message.textContent = '请输入用户名';
  }
});

// 2. 导航栏高亮+平滑滚动
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').substring(1) === currentSection) {
      item.classList.add('active');
    }
  });
});

// 3. 兴趣爱好弹窗控制
const hobbyBtn = document.querySelector('.nav-item[href="#hobby"]');
const hobbyModal = document.getElementById('hobbyModal');
const closeBtn = document.querySelector('.close-btn');

hobbyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  hobbyModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  hobbyModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === hobbyModal) {
    hobbyModal.style.display = 'none';
  }
});