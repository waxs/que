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
    this._config = { ...defaultConfig, ...this._config };
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _setConfig;