'use strict';

import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (string1, string2) => {
  return isEqual(
    getLetterCount(string1.replace(/\s/g, '').toLowerCase()),
    getLetterCount(string2.replace(/\s/g, '').toLowerCase())
  );
}
