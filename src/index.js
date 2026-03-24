import "./style.css";
import { initialPageLoad } from './pageload.js';
import { showMenuPage } from './menu.js';
import { showContactPage } from './contact.js';

initialPageLoad();

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.querySelector('.home-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const contactBtn = document.querySelector('.contact-btn');

    homeBtn.addEventListener('click', () => {
        toggleButton(homeBtn);
        clearPage();
        initialPageLoad();
    })

    menuBtn.addEventListener('click', () => {
        toggleButton(menuBtn);
        clearPage();
        showMenuPage();
    })

    contactBtn.addEventListener('click', () => {
        toggleButton(contactBtn);
        clearPage();
        showContactPage();
    })
})

function clearPage() {
    document.querySelector('#content').innerHTML = '';
}

function toggleButton(btn) {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
    })

    btn.classList.add('active');
}