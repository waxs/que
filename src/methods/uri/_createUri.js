/** ----------------------------------------
    Create URI
 ---------------------------------------- */

function _createUri(uri) {
    const values = Object.keys(this.data);

    const query = values.map(key => {
        const value = this.data[key];

        const [date, isDate] = this._convertDate(value);
        const convertedValue = (isDate && date) || value;

        return `${key}="${convertedValue.toString()}"`;
    });

    return query.join('&');
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _createUri;