"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAGS = void 0;
var TAGS = {
    INFO: ' <INFO> ',
    END: ' || END || ',
    START: ' || START >> ',
    REQUEST: ' + REQUEST + ',
    WAITING: ' ** WAITING **',
    READ: function (sub) { return " > READ " + sub + " > "; },
    WRITE: function (sub) { return " > WRITE " + sub + " > "; },
    EXECUTE: function (sub) { return " > EXECUTE " + sub + " > "; }
};
exports.TAGS = TAGS;
//# sourceMappingURL=package.js.map