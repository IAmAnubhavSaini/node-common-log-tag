const TAGS = {
    INFO: ' <INFO> ',
    END: ' || END || ',
    START: ' || START >> ',
    REQUEST: ' + REQUEST + ',
    WAITING: ' ** WAITING **',
    READ: (sub: string) => ` > READ ${sub} > `,
    WRITE: (sub: string) => ` > WRITE ${sub} > `,
    EXECUTE: (sub: string) => ` > EXECUTE ${sub} > `
};

export {TAGS};
