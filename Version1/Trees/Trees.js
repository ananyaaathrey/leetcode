class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// L, Node, R
function inOrderTraversal(node) {
  //   console.log('node: ', node)
  if (node === null) {
    return
  }
  inOrderTraversal(node.left)
  console.log('node.value:', node.value)
  inOrderTraversal(node.right)
}

// Node, L, R
function preOrderTraversal(node) {
  if (node === null) {
    return
  }
  console.log(node.value)
  preOrderTraversal(node.left)
  preOrderTraversal(node.right)
}

// L, R, N
function postOrderTraversal(node) {
  if (node === null) {
    return
  }
  postOrderTraversal(node.left)
  postOrderTraversal(node.right)
  console.log(node.value)
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(8)
root.right.right = new TreeNode(9)

root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.left.right.left = new TreeNode(6)
root.left.right.right = new TreeNode(7)

// console.log('inOrderTraversal:', inOrderTraversal(root))

// console.log('preOrderTraversal:', preOrderTraversal(root))

// console.log('postOrderTraversal:', postOrderTraversal(root))

//  insert using BFS - breadth first search
function insertNode(root, value) {
  const newNode = new TreeNode(value)
  if (root === null) {
    root = newNode
    return
  }

  const queue = []
  queue.push(root)

  while (queue.length > 0) {
    const current = queue.shift() // get first element

    if (current.left === null) {
      current.left = newNode
      break
    } else if (current.right === null) {
      current.right = newNode
      break
    } else {
      queue.push(current.left)
      queue.push(current.right)
    }
  }

  return root
}
// incomplete
function deleteNode(root, targetValue) {
  if (root === null) {
    return null
  }

  if (root.left === null && root.right === null) {
    if (root.value === targetValue) {
      return false
    } else {
      return root
    }
  }

  let deepestNode = null,
    parentOfDeepest = null,
    targetNode = null
  const queue = [root]

  while (queue.length > 0) {
    deepestNode = queue.shift()

    if (deepestNode.value === targetValue) {
      targetNode = deepestNode
    }

    if (deepestNode.left !== null) {
      parentOfDeepest = deepestNode
      queue.push(deepestNode.left)
    }

    if (deepestNode.right != null) {
      parentOfDeepest = deepestNode
      queue.push(deepestNode.right)
    }
  }

  if (targetNode !== null) {
    targetNode.value = deepestNode.value

    if (parentOfDeepest.left === deepestNode) {
      parentOfDeepest.left = null
    } else {
      parentOfDeepest.right = null
    }
  }
  return root
}

// go till the longest depth
function searchDFS(node, value) {
  if (node === null) {
    return false
  }
  if (node.value === value) {
    return true
  }

  return searchDFS(node.left, value) || searchDFS(node.right, value)
}

console.log('searchDFS(5):', searchDFS(root, 5))
console.log('searchDFS(15):', searchDFS(root, 15))
console.log(' ------ ')
function searchBFS(node, value) {
  if (node === null) {
    return false
  }

  const queue = [node]
  while (queue.length > 0) {
    const current = queue.shift()

    if (current.value === value) {
      return true
    }
    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }

  return false
}

console.log('searchBFS(1): ', searchBFS(1))
console.log('searchBFS(2): ', searchBFS(2))
console.log('searchBFS(5): ', searchBFS(5))
console.log('searchBFS(15): ', searchBFS(15))
console.log(' ------ ')

function findHeight(node) {
  if (node === null) {
    return -1
  }
  const leftHeight = findHeight(node.left)
  const rightHeight = findHeight(node.right)

  return 1 + Math.max(leftHeight, rightHeight)
}

function countNode(node) {
  if (node === null) {
    return 0
  }

  const leftCount = countNode(node.left)
  const rightCount = countNode(node.right)

  return 1 + leftCount + rightCount
}
console.log('countNode(root): ', countNode(root))
console.log(' ------ ')

function isBalanced(node) {
  function findHeight(node) {
    if (node === null) {
      return 0
    }

    const leftHeight = findHeight(node.left)
    if (leftHeight === -1) {
      return -1
    }

    const rightHeight = findHeight(node.right)
    if (rightHeight === -1) {
      return -1
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    }

    return 1 + Math.max(leftHeight, rightHeight)
  }

  return findHeight(node) !== -1
}
console.log('isBalanced(root): ', isBalanced(root))
console.log('isBalanced(root.left): ', isBalanced(root.left))
console.log('isBalanced(root.right): ', isBalanced(root.right))

console.log(' ------ ')

//  also known as maxHeight
function maxDepth(node) {
  if (node === null) {
    return 0
  }

  const leftDepth = maxDepth(node.left)
  const rightDepth = maxDepth(node.right)
  return 1 + Math.max(leftDepth, rightDepth)
}
console.log('Max Depth:', maxDepth(root))
console.log(' ------ ')

// Checking for Symmetry in a Binary Tree
function isSymmetric(root) {
  if (root === null) {
    return true
  }

  function isMirror(t1, t2) {
    if (t1 === null && t2 === null) return true
    if (t1 === null || t2 === null) return false

    return t1.value === t2.value && isMirror(t1.left) && isMirror(t2.right)
  }
  return isMirror(root.left, root.right)
}
console.log('Is Symmetric:', isSymmetric(root))
console.log(' ------ ')

// Assuming the TreeNode class and binary tree have already been defined
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)
const root2 = new TreeNode(1)

root2.left = node2
root2.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

// Function to find the LCA
function lowestCommonAncestor(root, p, q) {
  if (root === null) return null

  if (root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) {
    return root // If p and q are found in different subtrees
  }

  return left ? left : right // Return the non-null child if one exists
}

// Finding the LCA of node2 and node4
const lca = lowestCommonAncestor(root2, node2, node4)
console.log('Lowest Common Ancestor of 2 and 4:', lca.value) // Should print 2
console.log(' ------ ')

let diameter = 0

function findHeightForDiameter(root) {
  if (root === null) return 0

  const leftHeight = findHeightForDiameter(root.left)
  const rightHeight = findHeightForDiameter(root.right)
  diameter = Math.max(diameter, leftHeight + rightHeight)

  return 1 + Math.max(leftHeight, rightHeight)
}

function getDiameterOfBinaryTree(root) {
  if (root === null) return 0

  findHeightForDiameter(root)
  return diameter
}

const diameterRoot = new TreeNode(1)
diameterRoot.left = new TreeNode(2)
diameterRoot.right = new TreeNode(3)
diameterRoot.left.left = new TreeNode(4)
diameterRoot.left.right = new TreeNode(5)

const treeDiameter = getDiameterOfBinaryTree(diameterRoot)
console.log('Diameter of the binary tree:', treeDiameter)
console.log(' ------ ')

// Serialise a Binary Tree - convert a Binary Tree to string format
function serialise(node) {
  let queue = []

  function traverse(node) {
    if (node === null) {
      queue.push(null)
      return
    }

    queue.push(node.value)
    traverse(node.left)
    traverse(node.right)
  }
  traverse(node)
  return JSON.stringify(queue)
}
const serializeRoot = new TreeNode(1)
serializeRoot.left = new TreeNode(2)
serializeRoot.right = new TreeNode(3)
serializeRoot.left.left = new TreeNode(4)
serializeRoot.left.right = new TreeNode(5)

const serialized = serialise(serializeRoot)
console.log('Serialized tree:', serialized)
// console.log('serialise(node): ', serialise(root2))
console.log(' ------ ')

function serialize2(root) {
  if (root === null) return 'null'
  return `${root.value},${serialize2(root.left)},${serialize2(root.right)}`
}
console.log('Serialized tree:', serialize2(serializeRoot))

function deserialize(data) {
  const values = JSON.parse(data)
  console.log('values: ', values)

  function createNodes() {
    const currrent = values.shift()
    if (currrent === null) {
      return null
    }

    const newNode = new TreeNode(currrent)
    newNode.left = createNodes()
    newNode.right = createNodes()

    return newNode
  }
  return createNodes()
}
const deserializedTree = deserialize(serialized)
console.log('Deserialized tree root value:', deserializedTree.value)

console.log('Serialized tree:', serialise(deserializedTree))
console.log(' ------ ')
