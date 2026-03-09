// vangee's Blog - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
});

// 主题切换
function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// 导航栏
function initNavigation() {
    const nav = document.getElementById('nav');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}