// reverese string
// input : "hello" ;  output : "olleh"

function recursiveReverseString(str) {
  const n = str.length;

  if (str.length > 1) {
    return (
      str[str.length - 1] + recursiveReverseString(str.slice(0, str.length - 1))
    );
  }
  return str;

  //   str.slice(-1);
  //   hello;
  //   hell
  //   hel
  //   he
  //   h
}

console.log(recursiveReverseString("hello"));
