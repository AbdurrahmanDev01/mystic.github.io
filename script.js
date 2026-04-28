// Словарь переводов EN / RU
const translations = {
    en: {
        home: "Home",
        about: "about site",
        portfolio: "portfolio",
        news: "news",
        contacts: "contacts",
        "hero-subtitle": "Website Project",
        "hero-title": "Work that we produce for our clients",
        "hero-author": "Author: abdurrahman",
        "hero-btn": "Get more details",
        "see-all": "see all",
        "trending-title": "Currently Trending Development",
        followers1: "followers 20%",
        followers2: "followers 30%",
        followers3: "followers 50%",
        "big-text": "a developer is one of the most sought-after profession in our time",
        "stats-title": "Project Information",
        "stat1-label": "Goal Achieved",
        "stat1-desc": "The site is fully responsive and meets modern standards",
        "stat2-label": "Technologies",
        "stat2-desc": "HTML, CSS, Flexbox, Grid, JavaScript",
        "stat3-label": "Year Created",
        "stat3-desc": "Project started in April 2026",
        "stat4-label": "Developer",
        "stat4-desc": "Frontend developer: Abdurrahman"
    },
    ru: {
        home: "Главная",
        about: "О сайте",
        portfolio: "Портфолио",
        news: "Новости",
        contacts: "Контакты",
        "hero-subtitle": "Веб-проект",
        "hero-title": "Работа, которую мы создаём для наших клиентов",
        "hero-author": "Автор: Абдурахман",
        "hero-btn": "Узнать подробнее",
        "see-all": "Смотреть всё",
        "trending-title": "Актуальные разработки",
        followers1: "подписчиков 20%",
        followers2: "подписчиков 30%",
        followers3: "подписчиков 50%",
        "big-text": "разработчик — одна из самых востребованных профессий в наше время",
        "stats-title": "Информация о проекте",
        "stat1-label": "Цель достигнута",
        "stat1-desc": "Сайт полностью адаптивен и соответствует современным стандартам",
        "stat2-label": "Технологии",
        "stat2-desc": "HTML, CSS, Flexbox, Grid, JavaScript",
        "stat3-label": "Год создания",
        "stat3-desc": "Проект начат в апреле 2026 года",
        "stat4-label": "Разработчик",
        "stat4-desc": "Frontend-разработчик: Абдурахман"
    }
};

// Функция перевода
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', lang);
}

// Загружаем сохранённый язык при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});

// Обработчики кнопок (ждём загрузки DOM)
document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langRuBtn = document.getElementById('lang-ru');
    
    if (langEnBtn) {
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }
    
    if (langRuBtn) {
        langRuBtn.addEventListener('click', () => setLanguage('ru'));
    }
});