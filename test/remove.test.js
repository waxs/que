/** ----------------------------------------
    Que
 ---------------------------------------- */

import Que from '@build/que.pkg';
const query = new Que();

/** ----------------------------------------
    Test remove()
 ---------------------------------------- */

describe('Using remove() for url manipulation', () => {
    test('It should remove all keys from URL', () => {
        query.set({
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        });

        query.remove();

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?';

        expect(input).toEqual(output);
    });
});

describe('Using remove() for url manipulation', () => {
    test('It should remove name from URL', () => {
        query.set({
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        });

        query.remove('name');

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?age="31"&city="Amsterdam"';

        expect(input).toEqual(output);
    });
});

describe('Using remove() for url manipulation', () => {
    test('It should remove name and city from URL', () => {
        query.set({
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        });

        query.remove(['name', 'city']);

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?age="31"';

        expect(input).toEqual(output);
    });
});

describe('Using remove() for url manipulation', () => {
    test('It should remove value from hobbies array', () => {
        query.set({
            name: 'Sander',
            age: 31,
            hobbies: ['music', 'development']
        });

        query.remove({
            hobbies: 'development'
        });

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?age="31"&name="Sander"&hobbies=""music""';

        expect(input).toEqual(output);
    });
});