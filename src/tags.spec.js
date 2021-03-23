"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tags_1 = require("./tags");
describe('TAGS', function () {
    it('contains some keys', function () {
        var expected = [
            "INFO",
            "END",
            "START",
            "REQUEST",
            "WAITING",
            "READ",
            "WRITE",
            "EXECUTE"
        ].sort();
        var actual = Object.keys(tags_1.TAGS).sort();
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=tags.spec.js.map