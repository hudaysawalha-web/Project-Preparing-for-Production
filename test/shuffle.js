import { shuffle } from '../src/shuffle.js';
import { expect } from 'chai';

describe('Shuffle Function', () => {
  it('should shuffle the indexes of an array', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = shuffle(originalArray);
    
    expect(shuffledArray).to.have.lengthOf(originalArray.length);
    
    originalArray.forEach(item => {
      expect(shuffledArray).to.include(item);
    });
    
    const isSameOrder = originalArray.every((item, index) => item === shuffledArray[index]);
    expect(isSameOrder).to.be.false;
  });

  it('should handle empty arrays', () => {
    const emptyArray = [];
    const shuffled = shuffle(emptyArray);
    expect(shuffled).to.be.an('array').that.is.empty;
  });

  it('should handle single element arrays', () => {
    const singleArray = [42];
    const shuffled = shuffle(singleArray);
    expect(shuffled).to.deep.equal([42]);
  });
});