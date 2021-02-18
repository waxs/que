/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import isType from '@util/_isType';

/** ----------------------------------------
    Create URI
 ---------------------------------------- */

function _createUri(data = this.data) {
    const values = Object.keys(data);

    const convertDates = value => {
        const [date, isDate] = this._convertDate(value);
        const type = (isDate && date) || value;
        return value && type.toString();
    };

    const query = values.map(key => {
        const values = data[key];
        const type = isType(values);
        if(type !== 'array') return `${key}="${convertDates(values)}"`;
        return `${key}=${values.map(value => `"${convertDates(value)}`).join('",')}"`;
    }); 

    return query.join('&');
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _createUri;