/** ----------------------------------------
    Remove
 ---------------------------------------- */

function remove(obj) {
    const data = Object.entries(obj);

    data.forEach(item => {
        const [name, value] = item;
        const isArray = Array.isArray(value);
        const array = isArray ? value : value.split();

        this.data[name] && isArray && array.forEach(value => {
            const index = this.data[name].indexOf(value);
            index > -1 && this.data[name].splice(index, 1);
        });

        !isArray && delete this.data[name];
    });

    const uri = this._createUri();
    this._updateUri(uri);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default remove;