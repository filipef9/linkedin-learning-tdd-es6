'use strict';

import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('Anagrams basic functionality', () => {

  it('Is an anagram if both strings has some quantity of each letters', () => {
    // arrange

    // act
    const bothStringsAreAnagram = isAnagram('listen', 'silent');

    // assert
    expect(bothStringsAreAnagram).to.be.true;
  });

  it('It\'s not an anagram if both strings are different in quantity of each letters', () => {
    // arrange

    // act
    const bothStringsAreAnagram = isAnagram('elbows', 'below');

    // assert
    expect(bothStringsAreAnagram).to.be.false;
  });

  it('spaces must be ignored', () => {
    // arrange

    // act
    const bothStringsAreAnagram = isAnagram('conversation', 'voices rant on');

    // assert
    expect(bothStringsAreAnagram).to.be.true;
  });

  it('cases must be ignored', () => {
    // arrange

    // act
    const bothStringsAreAnagram = isAnagram('STATE', 'taste');

    // assert
    expect(bothStringsAreAnagram).to.be.true;
  });

});
