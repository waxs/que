/** ----------------------------------------
    Add
 ---------------------------------------- */

function add(obj) {
    const data = Object.entries(obj);

    const duplicate = (name, value) => {
        const data = this.data[name];
        this.data[name] = !data ? [] : data;
        return this.config.duplicate && !this.data[name].includes(value);
    };

    data.forEach(item => {
        const [name, value] = item;
        const isArray = Array.isArray(value);
        const array = isArray ? value : value.toString().split();
        const type = typeof this.data[name];

        array.forEach(value => {
            duplicate(name, value) && type === 'array' ? this._data[name].push(value) : this._data[name] = value;
        });
    });

    const uri = this._createUri();
    this._updateUri(uri);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default add;