/** ----------------------------------------
    Parse Number
 ---------------------------------------- */

function _parseNumber(string) {
    const number = parseInt(string);
    const stringLength = string.length;
    const numberLength = number.toString().length;
    const isNumber = stringLength === numberLength;

    const numberValue = [number, true];
    const stringValue = [string, false];

    return isNumber ? numberValue : stringValue;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _parseNumber;