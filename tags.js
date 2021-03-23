module.exports = {
    START: ' || START >> ',
    END: ' || END || ',
    WAITING: ' ** WAITING **',
    READ: (sub: string) => ` > READ ${sub} > `,
    WRITE: (sub: string) => ` > WRITE ${sub} > `,
    EXECUTE: (sub: string) => ` > EXECUTE ${sub} > `,
    REQUEST: ' + REQUEST + ',
    INFO: ' <INFO> '
}
