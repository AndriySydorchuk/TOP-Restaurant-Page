import { createElement, createCard } from './createElementHelper';

export const showMenuPage = function () {
    const content = document.querySelector('#content');

    const title = createElement(
        'h2',
        {
            classes: ['title'],
            text: 'Menu'
        }
    )

    const beveragesTitle = createElement(
        'h3',
        {
            classes: ['section-title'],
            text: 'Beverages'
        }
    )

    const beveragesCards = [
        createCard(
            'beverages-card',
            'Steam-Powered Espresso',
            'A high-pressure double shot pulled through perfectly roasted, artisanal dark beans. Guaranteed to start your engine.'
        ),
        createCard(
            'beverages-card',
            'The Alchemist\'s Tea',
            'Earl Grey tea delicately infused with lavender, sweet vanilla, and a mysterious hint of smoked honey.'
        )
    ]

    const mainCoursesTitle = createElement(
        'h3',
        {
            classes: ['section-title'],
            text: 'Main Courses'
        }
    )

    const mainCoursesCards = [
        createCard(
            'maincourses-card',
            'The Zeppelin Burger',
            'A towering double-beef patty topped with smoked gouda, crispy bacon, caramelized onions, and our signature brass-sauce on a brioche bun.'
        ),
        createCard(
            'maincourses-card',
            'Goggle-Mender\'s Pie',
            'A rustic, hearty shepherd\'s pie topped with a golden, flaky crust. Served piping hot in a cast-iron skillet.A rustic, hearty shepherd\'s pie topped with a golden, flaky crust. Served piping hot in a cast-iron skillet.'
        ),
        createCard(
            'maincourses-card',
            'Clockwork Waffles',
            'Crispy on the outside, fluffy on the inside. Served with a heavy pour of aged bourbon maple syrup and whipped butter.'
        )
    ]


    content.append(title, beveragesTitle);
    beveragesCards.forEach(card => content.append(card));

    content.append(mainCoursesTitle);
    mainCoursesCards.forEach(card => content.append(card));
}