'use strict';
const BinarySearchTree = require('./bst');

//if the input is a binary tree is it balanced? - yes
//input:  5
//      /  \
//    2     20
//   / \    / \
//  1   4  15  21
//output: true

//input: 25
//      /  \
//    28    20
//   / \    / \
//  1   4  15  21
//output: false

// start at parent
//if left child && right child
//compare left and right
//left should be less than parent && right should be greater than parent
//if true -
// if false return false
// at end of comparison return true

function isBST(tree) {
  //base case
  if (tree.left === null && tree.right === null) {
    return true;
  }

  if (tree.left) {
    if (tree.left.key < tree.key) {
      return isBST(tree.left);
    } else {
      return false;
    }
  }

  if (tree.right) {
    if (tree.right.key > tree.key) {
      return isBST(tree.right);
    } else {
      return false;
    }
  }
}

function main() {
  let bst = new BinarySearchTree();
  const arr = [5, 2, 20, 1, 4, 15, 21];

  for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
  }

  console.log(isBST(bst));
}
main();
