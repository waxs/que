/** ----------------------------------------
    Default Config
 ---------------------------------------- */

const defaultConfig = {
    duplicate: false,
    history: false, 
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