function palindrome(n) {
  if (n < 0) {
    return false
  }
  let rev = 0,
    rem = 0,
    originalNum = n
  while (n > 0) {
    rem = n % 10
    rev = 10 * rev + rem
    n = Math.floor(n / 10)
  }

  return originalNum === rev
}

// console.log('is palindrome:', palindrome(-121))

function reverse(n) {
  let originalNum = n,
    rev = 0,
    rem = 0

  n = Math.abs(n)

  while (n > 0) {
    rem = n % 10
    rev = 10 * rev + rem
    n = n / 10
  }
  const limit = 2 ** 31
  if (rev > limit || rev < -limit) {
    return 0
  }
  return originalNum < 0 ? -rev : rev
}

console.log('rev:', rev(123))
