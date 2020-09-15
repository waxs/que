/** ----------------------------------------
    Parse
 ---------------------------------------- */

function parse(string) {
    const query = string.split('?');
    const unmasked = this._unmask(query[1]);
    const data = unmasked.split('&');

    return data.reduce((obj, query) => {
        const [name, value] = query.split('=');
        obj[name] = this._handleData(value);
        return obj;
    }, {});
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default parse;