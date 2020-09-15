/** ----------------------------------------
    Add
 ---------------------------------------- */

function add(obj) {
    const data = Object.entries(obj);

    data.forEach(item => {
        const [name, value] = item;
        const isArray = Array.isArray(value);
        const array = isArray ? value : (typeof value === 'number' ? [value] : value.toString().split());
        const type = typeof this.data[name];

        array.forEach(value => {
            const add = () => {
                const excists = this._hasDuplictes(name, value) || this._data[name] !== value;
                excists && (this._data[name] = [this._data[name], value]);
            };

            const assign = () => this._data[name] = value;

            type === 'object' ? this._data[name].push(value) : (this._data[name] ? add() : assign());
        });
    });

    const uri = this._createUri();
    this._updateUri(uri);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default add;