/** ----------------------------------------
    Stringify
 ---------------------------------------- */

function stringify(data) {
    return '?' + this._createUri(data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default stringify;