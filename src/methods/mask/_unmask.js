/** ----------------------------------------
    Unmask
 ---------------------------------------- */

function _unmask(string) {
    return this.config.mask ? window.atob(string) : string;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _unmask;