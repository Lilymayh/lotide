const middle = function(arr) {
  let newArr = []

  if (arr.length < 3) {
    return newArr
  }
  
  const middleNum = Math.floor(arr.length / 2)

  if (arr.length % 2 === 0) {
      newArr.push((arr[middleNum - 1]), arr[middleNum])
  } else {
      newArr.push(arr[middleNum])
}
    return newArr
}

module.exports = middle