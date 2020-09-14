/** ----------------------------------------
    Add
 ---------------------------------------- */

function add(obj) {
    const data = Object.entries(obj);

    const duplicate = (name, value) => {
        const isArray = Array.isArray(this._data[name]);
        const data = this.data[name];
        this._data[name] = !data ? [] : data;
        return !this.config.duplicate && (isArray && !this._data[name].includes(value));
    };

    data.forEach(item => {
        const [name, value] = item;
        const isArray = Array.isArray(value);
        const array = isArray ? value : (typeof value === 'number' ? [value] : value.toString().split());
        const type = typeof this.data[name];

        array.forEach(value => {
            const add = () => {
                const excists = duplicate(name, value) || this._data[name] !== value;
                excists && (this._data[name] = [this._data[name], value]);
            };

            const assign = () => this._data[name] = value;

            type === 'object' ? (duplicate(name, value) && this._data[name].push(value)) : (this._data[name] ? add() : assign());
        });
    });

    const uri = this._createUri();
    this._updateUri(uri);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default add;