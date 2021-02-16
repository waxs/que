/** ----------------------------------------
    Set Query
 ---------------------------------------- */

function _setQuery() {
    let values = [];

    const query = this._unmask(this._query);
    const data = query.split(/([^&=]+)=(.*?)(?=&[^&=]+=|$)/g);

    data.forEach((value, index) => {
        if(value && value === '&' || index === 0) {
            values.push(`${data[index+1]}=${data[index + 2]}`);
        }
    });

    values.forEach(query => {
        const [name, content] = query.split('=');
        this._data[name] = this._handleData(content);
    });
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _setQuery;