/** ----------------------------------------
    Convert Date
 ---------------------------------------- */

function _convertDate(date) {
    const isDate = date instanceof Date;

    if(isDate) {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        date = `${ day }-${ month }-${ year }`;
    }

    return [date, true];
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _convertDate;