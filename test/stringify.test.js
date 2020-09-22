/** ----------------------------------------
    Que
 ---------------------------------------- */

import Que from '@build/que.pkg';

/** ----------------------------------------
    Test stringify()
 ---------------------------------------- */

describe('Using stringify() for object conversion', () => {
    test('It should convert object to a string', () => {
        const query = new Que();

        const input = {
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        };

        const output = '?name="Sander"&age="31"&city="Amsterdam"';

        const parse = query.stringify(input);

        expect(parse).toEqual(output);
    });
});