/** ----------------------------------------
    Valid Mask
 ---------------------------------------- */

import _validMask from './_validMask';

/** ----------------------------------------
    Unmask
 ---------------------------------------- */

function _unmask(string) {
    const parser = _validMask(string) ? window.atob(string) : string;
    return this.config.mask || _validMask(string) ? parser : string;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _unmask;