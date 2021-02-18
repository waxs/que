/** ----------------------------------------
    Que
 ---------------------------------------- */

import Que from '@build/que.pkg';
const query = new Que();

/** ----------------------------------------
    Test set()
 ---------------------------------------- */

describe('Using set() for url manipulation', () => {
    test('It should set values to URL', () => {
        query.set({
            name: 'Sander',
            age: 31,
            city: 'Amsterdam'
        });

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?name="Sander"&age="31"&city="Amsterdam"';

        expect(input).toEqual(output);
    });
});

describe('Using set() for url manipulation', () => {
    test('It should set an array to the URL', () => {
        query.set({
            language: ['javascript', 'typescript'],
        });

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?name="Sander"&age="31"&city="Amsterdam"&language="javascript,typescript"'; 

        expect(input).toEqual(output);
    });
});

describe('Using set() for url manipulation', () => {
    test('It should replace (set) the name key in the URL', () => {
        query.set({
            name: 'Peter'
        });

        const input = decodeURI(global.window.location.href);
        const output = 'http://localhost/?name="Peter"&age="31"&city="Amsterdam"&language="javascript,typescript"';

        expect(input).toEqual(output);
    });
});