/** ----------------------------------------
    Initiate Que Core
 ---------------------------------------- */

class Core {}

/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import { extend } from '@js/setup/_extends';

/** ----------------------------------------
     Methods
 ---------------------------------------- */

import convert from '@method/convert';
import debugging from '@method/debugging';
import handle from '@method/handle';
import helpers from '@method/helpers';
import mask from '@method/mask';
import parse from '@method/parse';
import retrieve from '@method/retrieve';
import uri from '@method/uri';

/** ----------------------------------------
    Needle Helpers
 ---------------------------------------- */

extend(Core, convert);
extend(Core, debugging);
extend(Core, handle);
extend(Core, helpers);
extend(Core, mask);
extend(Core, parse);
extend(Core, retrieve);
extend(Core, uri);

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default Core;