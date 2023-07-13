const HOME_TAB = document.getElementById('home-tab');
const ABOUT_TAB = document.getElementById('about-tab');
const PORTFOLIO_TAB = document.getElementById('portfolio-tab');
const CONTACT_TAB = document.getElementById('contact-tab');
let selectedTab = HOME_TAB;
HOME_TAB.onclick = function() {selectTab(HOME_TAB, 'home');};
ABOUT_TAB.onclick = function() {selectTab(ABOUT_TAB, 'about');};
PORTFOLIO_TAB.onclick = function() {selectTab(PORTFOLIO_TAB, 'portfolio');};
CONTACT_TAB.onclick = function() {selectTab(CONTACT_TAB, 'contact');};

function selectTab(tab, section) {
    tab.className = 'selected-tab';
    selectedTab.className = 'unselected-tab';
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    selectedTab = tab;
}


