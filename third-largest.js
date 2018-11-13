const BinarySearchTree = require('./bst');

/**
 *
 * can we assume at least 3 elements ? -> yes
 * can we assume this search tree is balanced? -> of course
 *
 *  input ->
 *       5
 *     /   \
 *    2     20
 *   / \    / \
 *  1   4  
 * output -> 15
 *

 */

function thirdLargest(bst) {
  let largest;

  if (bst.right === null) {
    largest = bst;
  }
  if (bst.right) {
    return thirdLargest(bst.right);
  }

  if (largest.parent.left) {
    if (largest.parent.left.right) {
      return largest.parent.left.right;
    } else return largest.parent.left;
  } else {
    return largest.parent.parent;
  }
}

function main() {
  let bst = new BinarySearchTree();
  const arr = [5, 2, 20, 1, 4, 15, 21];

  for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
  }

  console.log(thirdLargest(bst));
}
main();
