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
        createAbout(),
        createHours(),
        createLocation()
    );
}

function createElement(tag, { classes = [], text = '', children = [] } = {}) {
    const element = document.createElement(tag);
    if (classes.length) element.classList.add(...classes);
    if (text) element.textContent = text;

    children.forEach(child => element.append(child));

    return element;
}

function createAbout() {
    return createElement('div', {
        classes: ['section', 'about'],
        children: [
            createElement('h3', { classes: ['section-title'], text: 'About Us' }),
            createElement('p', { classes: ['section-text'], text: 'Welcome to The Copper Kettle, where culinary alchemy meets cozy comfort! Step into our gear-driven sanctuary and enjoy the finest steam-roasted coffees and hearty meals. Whether you are fueling up for a long airship voyage or simply need a warm place to unwind by the furnace, our gears are always turning to serve you the absolute best.' })
        ]
    })
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
            classes: ['section-list-item'],
            text: `${item.day}: ${item.hours}`
        })
    });

    return createElement('div', {
        classes: ['section', 'hours'],
        children: [
            createElement('h3', { classes: ['section-title'], text: 'Hours' }),
            createElement('ul', { classes: ['section-list'], children: listItems })
        ]
    })
}

function createLocation() {
    return createElement('div', {
        classes: ['section', 'location'],
        children: [
            createElement('h3', { classes: ['section-title'], text: 'Location' }),
            createElement('p', { classes: ['section-text'], text: '42 Clockwork Lane, The Steam District, Cogsville' })
        ]
    })
}
