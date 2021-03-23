import {TAGS} from './package';

describe('TAGS', () => {
    it('contains some keys', () => {
        const expected = [
            "INFO",
            "END",
            "START",
            "REQUEST",
            "WAITING",
            "READ",
            "WRITE",
            "EXECUTE"
        ].sort();
        const actual = Object.keys(TAGS).sort();
        expect(actual).toEqual(expected);
    });
});
