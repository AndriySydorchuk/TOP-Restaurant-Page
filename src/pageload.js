import { createElement } from './createElementHelper';
import { createCard } from './createElementHelper';

export const initialPageLoad = function () {
    const content = document.querySelector('#content');

    const title = createElement(
        'h2',
        {
            classes: ['title'],
            text: 'The Copper Kettle'
        }
    )

    content.append(
        title,
        createCard(
            'about',
            'About Us',
            'Welcome to The Copper Kettle, where culinary alchemy meets cozy comfort! Step into our gear-driven sanctuary and enjoy the finest steam-roasted coffees and hearty meals. Whether you are fueling up for a long airship voyage or simply need a warm place to unwind by the furnace, our gears are always turning to serve you the absolute best.'
        ),
        createHours(),
        createCard(
            'location',
            'Location',
            '42 Clockwork Lane, The Steam District, Cogsville'
        )
    );
}

function createHours() {
    const hours = [
        { day: 'Monday - Thursday', hours: '7:00 AM - 9:00 PM' },
        { day: 'Friday', hours: '7:00 AM - 11:00 PM' },
        { day: 'Saturday', hours: '8:00 AM - 11:00 PM' },
        { day: 'Sunday', hours: '8:00 AM - 8:00 PM' }
    ]

    const listItems = hours.map(item => {
        return createElement('li', {
            classes: ['card-list-item'],
            text: `${item.day}: ${item.hours}`
        })
    });

    return createElement('div', {
        classes: ['card', 'hours'],
        children: [
            createElement('h3', { classes: ['card-title'], text: 'Hours' }),
            createElement('ul', { classes: ['card-list'], children: listItems })
        ]
    })
}