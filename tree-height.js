const BinarySearchTree = require('./bst');

/**
 *  can we assume search tree is balanced? -> yes
 * input -> search tree
 *       5
 *     /   \
 *   2     20
 *   / \    / \
 *  1   4  15  21
 *
 * output -> 3
 *
 *  given a search tree
 *  count the number of rows
 *  if a node has child
 *  counter + 1
 *  until node has no child
 *  return count
 *
 *  if ( right )
 *    increment counter
 *    check again
 *  if ( left )
 *     increment counter
 *    check again
 *
 *    return counter;
 *
 *
 *
 *
 *
 *
 */

function findHeight(node, counter = 0) {
  // console.log(currentNode);
  // console.log(bst);
  if (!node) {
    return counter;
  }
  //if has both
  if (node.right) {
    findHeight(node.right, counter++);
  }

  if (node.left) {
    findHeight(node.left, counter++);
  }

  return counter + 1;
}

function main() {
  let bst = new BinarySearchTree();
  const arr = [5, 2, 20, 1, 4, 15, 21];

  for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
  }

  console.log(findHeight(bst));
}
main();
