/** ----------------------------------------
    Set
 ---------------------------------------- */

function set(obj) {
    const data = Object.entries(obj);

    data.forEach(item => {
        const [name, content] = item;
        this._data[name] = content;
    });

    const uri = this._createUri();
    this._updateUri(uri);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default set;