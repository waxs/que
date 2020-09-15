/** ----------------------------------------
    Default Config
 ---------------------------------------- */

const defaultConfig = {
    duplicate: true,
    mask: false,
    parse: true
};

/** ----------------------------------------
    Set Config
 ---------------------------------------- */

function _setConfig() {
    this._config = defaultConfig;
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