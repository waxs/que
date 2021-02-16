/** ----------------------------------------
     Has Duplicates
 ---------------------------------------- */

function _hasDuplicates(name, value) {
    const isArray = Array.isArray(this._data[name]);
    const data = this.data[name];
    this._data[name] = !data ? [] : data;
    return !this.config.duplicate && (isArray && this._data[name].includes(value));
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _hasDuplicates;