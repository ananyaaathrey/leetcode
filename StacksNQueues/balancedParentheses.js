function balancedParentheses(str) {
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (s of str) {
    if (s in map) {
      topElement = stack.length === 0 ? '*' : stack.pop()
      if (topElement !== map[s]) {
        return false
      }
    } else {
      stack.push(s)
    }
  }
  return true
}

console.log('balancedParentheses: ', balancedParentheses('()'))
