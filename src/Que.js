/** ----------------------------------------
     Que Core
 ---------------------------------------- */

import Core from '@js/Core';

/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import { construct } from '@js/setup/_construct';
import { contents } from '@js/setup/_contents';

/** ----------------------------------------
     Que
 ---------------------------------------- */

class Que extends Core {

    /** ----------------------------------------
        Constructor
     ---------------------------------------- */

    constructor(config) {
        super();
        construct(this, config);
        this._init();
    }

    /** ----------------------------------------
        Get URL
     ---------------------------------------- */

    get url() {
        return {
            url: this._url,
            domain: this._domain,
            query: this._query
        };
    }

    /** ----------------------------------------
        Get Config
     ---------------------------------------- */

    get config() {
        return this._config;
    }

    /** ----------------------------------------
        Get Data
     ---------------------------------------- */

    get data() {
        return this._data;
    }

}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default Que;