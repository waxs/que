/** ----------------------------------------
    Create URI
 ---------------------------------------- */

function _createUri(data = this.data) {
    const values = Object.keys(data);

    const query = values.map(key => {
        const value = data[key];

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