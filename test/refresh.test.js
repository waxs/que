/** ----------------------------------------
    Que
 ---------------------------------------- */

import Que from '@build/que.pkg';
const query = new Que();

/** ----------------------------------------
    Test add()
 ---------------------------------------- */

describe('Using add() for url manipulation', () => {
    test('It should add a value to city', () => {
        query.set({
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        });

        query.refresh({
            city: 'Berlin'
        });

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?city="Berlin"';

        expect(input).toEqual(output);
    });
});