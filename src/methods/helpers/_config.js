/** ----------------------------------------
    Set Config
 ---------------------------------------- */

function _setConfig() {
    const config = Object.entries(this.config);

    config.map(setting => {
        const [name, value] = setting;
        this._config[name] = value;
    });
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _setConfig;