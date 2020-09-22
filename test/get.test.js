/** ----------------------------------------
    Que
 ---------------------------------------- */

import Que from '@build/que.pkg';
const query = new Que();

/** ----------------------------------------
    Test get()
 ---------------------------------------- */

describe('Using get() to retrieve a value', () => {
    test('It should retrieve the data object', () => {
        query.set({
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        });

        const input = query.get();

        const output = {
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        };

        expect(input).toEqual(output);
    });
});