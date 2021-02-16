/** ----------------------------------------
    Handle Escape
 ---------------------------------------- */

function _handleEscape(value) {
    return decodeURI(value.replace(/[-[\]{}()*+?.\\^$|#\s]/g, '\\$'));
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _handleEscape;