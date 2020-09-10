/** ----------------------------------------
    Refresh
 ---------------------------------------- */

function refresh(obj) {
    this._data = {};
    const data = Object.entries(obj);

    data.forEach(item => {
        const [name, value] = item;
        this._data[name] = value;
    });

    const uri = this._createUri();
    this._updateUri(uri);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default refresh;