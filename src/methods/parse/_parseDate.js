/** ----------------------------------------
    Parse Date
 ---------------------------------------- */

function _parseDate(string) {
    const isDate = !isNaN(Date.parse(string));

    const dateValue = [new Date(string), true];
    const stringValue = [string, false];

    return isDate ? dateValue : stringValue;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _parseDate;