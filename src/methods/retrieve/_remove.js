/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import isType from '@util/_isType';

/** ----------------------------------------
    Remove
 ---------------------------------------- */

function remove(obj) {
    const data = Object.entries(obj);
    const argType = isType(obj);

    if(argType === 'string') {
        this._data[obj] && delete this._data[obj];
    }

    if(argType === 'array') {
        data.forEach(item => {
            const [name, value] = item;
            this._data[value] && delete this._data[value];
        });
    }

    if(argType === 'object') {
        data.forEach(item => {
            const [name, value] = item;

            if((isType(this.data[name]) === 'string' || isType(this.data[name]) === 'boolean') && this.data[name] === value) {
                this._data[name] && delete this._data[name];
                return;
            }

            const isArray = Array.isArray(value);
            const array = isArray ? value : this.data[name] && value.split();

            this.data[name] && array.forEach(value => {
                const index = this.data[name].indexOf(value);
                index > -1 && this.data[name].splice(index, 1);
            });
        });
    }


    const uri = this._createUri();
    this._updateUri(uri);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default remove;