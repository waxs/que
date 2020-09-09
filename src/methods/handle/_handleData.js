/** ----------------------------------------
    Handle Data
 ---------------------------------------- */

function _handleData(data) {
    const escape = this._handleEscape(data);
    const array = this._handleArray(escape);
    const convert = this._parseData(array);
    return array.length > 1 ? convert : convert[0];
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _handleData;