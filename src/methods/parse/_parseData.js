/** ----------------------------------------
    Mask
 ---------------------------------------- */

function _parseData(array) {
    return array.map(value => {
        value = decodeURI(value.replace(/"/g, ''));
        const [number, isNumber] = this._parseNumber(value);
        const [date, isDate] = this._parseDate(value);
        return this.config.parse && ((isNumber && number) || (isDate && date)) || value;
    });
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _parseData;