/** ----------------------------------------
    Set Query
 ---------------------------------------- */

function _setQuery() {
    const query = this._unmask(this._query);
    const data = query.split('&');

    data.forEach(query => {
        const [name, content] = query.split('=');
        this._data[name] = this._handleData(content);
    });
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _setQuery;