/** ----------------------------------------
    Mask
 ---------------------------------------- */

function _mask(string) {
    return this.config.mask ? window.btoa(string) : string;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _mask;