import { expect } from 'chai';

import BST from '../src/binary-search-tree.js';

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

    it('getMin returns minimum value', () => {
      let min = nums.getMin();

      expect(min).to.equal(3);
    });

    it('getMax returns maximum value', () => {
      let max = nums.getMax();

      expect(max).to.equal(99);
    });

    it('will successfully find an element', () => {
      let n = nums.find(99);

      expect(n.data).to.equal(99);
    });

    it('remove will successfully remove a node', () => {
      nums.remove(23);

      expect(nums.toArray()).to.deep.equal([3, 16, 22, 37, 45, 99])
    });

  });

});
