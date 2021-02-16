/** ----------------------------------------
    Update URI
 ---------------------------------------- */

function _updateUri(uri) {
    if (typeof(history.pushState) !== 'undefined') {
        const obj = { title: '', url: '?' + this._mask(uri) };
        const update = this.config.history ? 'pushState' : 'replaceState';
        history[update](obj, obj.title, obj.url);
    }
}  

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _updateUri;