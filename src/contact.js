import { createElement, createCard } from './createElementHelper';

export const showContactPage = function () {
    const content = document.querySelector('#content');

    const title = createElement(
        'h2',
        {
            classes: ['title'],
            text: 'Send Us a Telegram'
        }
    )

    const cards = [
        createCard(
            'contact-card',
            'Captain Bartholomew (Owner)',
            'Phone: +1 (555) 019-8821\nEmail: captain@copperkettle.com'
        ),
        createCard(
            'contact-card',
            'Chief Engineer Clara (Head Chef)',
            'Phone: +1 (555) 019-8822\nEmail: clara.kitchen@copperkettle.com'
        ),
        createCard(
            'contact-card',
            'Apprentice Oliver (Reservations)',
            'Phone: +1 (555) 019-8823\nEmail: bookings@copperkettle.com'
        )
    ]

    content.append(title);
    cards.forEach(card => content.append(card));
}