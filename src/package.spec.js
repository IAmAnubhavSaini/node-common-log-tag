"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_1 = require("./package");
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
        var actual = Object.keys(package_1.TAGS).sort();
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=package.spec.js.map