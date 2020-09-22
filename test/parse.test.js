/** ----------------------------------------
    Que
 ---------------------------------------- */

import Que from '@build/que.pkg';

/** ----------------------------------------
    Test parse()
 ---------------------------------------- */

describe('Using parse() for string conversion', () => {
    test('It should convert string to an object', () => {
        const query = new Que();

        const input = 'http://www.example.com?name="Sander"&age="31"&city="Amsterdam"';

        const output = {
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        };

        const parse = query.parse(input);

        expect(parse).toEqual(output);
    });
});