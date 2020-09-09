/** ----------------------------------------
    Handle Escape
 ---------------------------------------- */

function _handleEscape(value) {
    return decodeURI(value.replace(/[{()}]/g, ''));
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _handleEscape;