/** ----------------------------------------
    Que
 ---------------------------------------- */

import Que from '@build/que.pkg';
const query = new Que();

/** ----------------------------------------
    Test value()
 ---------------------------------------- */

describe('Using value() to retrieve a value', () => {
    test('It should retrieve the name', () => {
        query.set({
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        });

        query.value('name');

        const input = query.value('name');
        const output = 'Sander';

        expect(input).toEqual(output);
    });
});