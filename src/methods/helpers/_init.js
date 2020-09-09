/** ----------------------------------------
    Initialize
 ---------------------------------------- */

function _init() {
    this._setConfig();
    [this._domain, this._query] = this._url.split('?');
    this._query && this._setQuery();
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _init;