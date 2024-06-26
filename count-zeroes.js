//find left index of 0 in an array where any quantity of 0's are sorted last.
function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (arr[0] === 0) {
    return arr.length;
  }

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal == 1) {
      leftIdx = middleIdx + 1;
    } else if (middleVal == 0 && arr[middleIdx - 1] === 0) {
      rightIdx = middleIdx - 1;
    } else if (middleVal == 0 && arr[middleIdx - 1] === 1) {
      return arr.length - middleIdx;
    }
  }
  return 0;
}

module.exports = countZeroes;
