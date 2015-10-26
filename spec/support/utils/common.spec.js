'use strict';

import {isEmpty} from '../../../utils/common';

describe('isEmpty', function() {
    it('should return true if empty', function () {
        expect(isEmpty('')).toEqual(true);
        expect(isEmpty(undefined)).toEqual(true);
        expect(isEmpty(null)).toEqual(true);
    });
    it('should return false if filled', function () {
        expect(isEmpty('a')).toEqual(false);
    });
});