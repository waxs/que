/** ----------------------------------------
    Valid Mask
 ---------------------------------------- */

function _validMask(string) {
    const regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    return regex.test(string);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _validMask;