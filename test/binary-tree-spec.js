import { expect } from 'chai';

import BST from '../src/binary-tree.js';

describe('Binary Search Tree', () => {

  describe('Instantiate and insert', () => {

    it('can instantiate', () => {
      let nums = new BST();

      expect(nums).to.exist;
    });

    it('can insert values', () => {
      let nums = new BST();
      nums.insert(23);
      nums.insert(56);

      expect(nums.find(23)).to.be.ok;
    });

  });

  describe('Search and find', () => {
    
    let nums;

    beforeEach(() => {
      nums = new BST();
      nums.insert(23);
      nums.insert(45);
      nums.insert(16);
      nums.insert(37);
      nums.insert(3);
      nums.insert(99);
      nums.insert(22);
    });

    it('toArray returns ordered array', () => {
      let arr = nums.toArray();

      expect(arr).to.be.a('array');
      expect(arr).to.deep.equal([3, 16, 22, 23, 37, 45, 99]);
    });

  });

});
